import PropTypes from "prop-types";
import { useState } from "react";
import { Link } from "react-router-dom";
import PasswordInput from "../components/PasswordInput";
import { validate } from "../utils/helper";

function Signup(){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [error, setError] = useState("");
    const handleSignup = async(e) => {
        e.preventDefault();
        if(!name){
            setError("Please enter your name");
            return
        }

        if(!validate(email)){
            setError("Please enter a valid email");
            return
        }
        if(!password){
            setError("Please enter a password");
            return
        }
        if(password !== newPassword){
            setError("Passwords do not match");
            return
        }
        setError("");
    }
    return(
        <div className="flex items-center justify-center mt-28">
      <div className="w-96 px-7 py-10 bg-white border rounded drop-shadow-md">
        <h4 className="text-2xl mb-7">SignUp</h4>
        <form onSubmit={handleSignup}>
        <input
            type="text"
            placeholder="Name"
            className="input-box"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />  
          <input
            type="email"
            placeholder="Email"
            className="input-box"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <PasswordInput value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required/>
            <div className="mb-4"></div>
           <PasswordInput value={newPassword} onChange={(e) => setNewPassword(e.target.value)} placeholder="Confirm Password" required/>

            {error && <p className="text-red-500 text-sm pb-1">{error}</p>}
          <button className="btn-primary mt-4">SignUp</button>
          <p className="text-sm text-center mt-2">Already have an account?<Link to={"/login "} className="text-[#2B85FF] cursor-pointer underline" >Login</Link></p>
        </form>
      </div>
    </div>
    )
}

Signup.propTypes = {
  onSignup: PropTypes.func.isRequired,
}

export default Signup;