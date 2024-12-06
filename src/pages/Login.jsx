import { useState } from "react";
import PasswordInput from "../components/PasswordInput";
import { Link } from "react-router-dom";
import { validate } from "../utils/helper";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const handleLogin = async(e) => {
    e.preventDefault();
    if(!validate(email)){
        setError("Please enter a valid email");
        return
    }
    if(!password){
        setError("Please enter a password");
        return
    }
    setError("");
}

  return (
    <div className="flex items-center justify-center mt-28">
      <div className="w-96 px-7 py-10 bg-white border rounded drop-shadow-md">
        <h4 className="text-2xl mb-7">Login</h4>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            className="input-box"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <PasswordInput value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required/>
            {error && <p className="text-red-500 text-sm pb-1">{error}</p>}
          <button className="btn-primary mt-4">Login</button>
          <p className="text-sm text-center mt-2">Don{"'"}t have an account?<Link to={"/signup "} className="text-[#2B85FF] cursor-pointer underline" >Signup</Link></p>
        </form>
      </div>
    </div>
  );
}

export default Login;
