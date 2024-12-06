import Search from "./Search";
import { useState } from "react";
import UserProfile from "./UserProfile";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const [value, setValue] = useState("");

  const navigate = useNavigate();
  function handleClick() {}

  function clearSearch() {
    setValue("");
  }

  function onLogout() {
    navigate("/login");
  }

  return (
    <div className="bg-white flex items-center justify-between px-4 py-3 shadow-xl">
      <Link to={"/"}>
        <h1 className="text-xl md:text-3xl font-medium text-black py-2">
          <span className="text-slate-500">Notes</span>
          <span className="text-slate-900"> App</span>
        </h1>
      </Link>
      <Search
        value={value}
        handleChange={(event) => setValue(event.target.value)}
        handleClick={handleClick}
        clearSearch={clearSearch}
      />
      <div className="flex items-center gap-4">
        <UserProfile onLogout={onLogout} />
      </div>
    </div>
  );
}

export default Navbar;
