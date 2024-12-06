import PropTypes from "prop-types";
import { FaRegEye } from "react-icons/fa";
import { useState } from "react";
import { FaRegEyeSlash } from "react-icons/fa6";

function PasswordInput({ value, onChange, placeholder }) {
  const [isShow, setIsShow] = useState(false);

  return (
    <div className="flex items-center border-[1.5px] rounded bg-transparent px-5">
      <input
        type={isShow ? "text" : "password"}
        placeholder={placeholder || "Password"}
        className="w-full text-sm bg-transparent py-3 mr-3 rounded outline-none"
        value={value}
        onChange={onChange}
      />
      {isShow ? (
        <FaRegEye size={20} className="text-primary cursor-pointer" onClick={() => setIsShow(!isShow)}/>
      ) : (
        <FaRegEyeSlash size={20} className="text-slate-400 cursor-pointer" onClick={() => setIsShow(!isShow)}/>
      )}
    </div>
  );
}

PasswordInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default PasswordInput;
