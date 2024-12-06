import { FaMagnifyingGlass } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import PropTypes from "prop-types";

function Search({ value, handleChange, handleClick, clearSearch}) {
  
  return (
    <div className="flex items-center px-4 w-40 sm:w-60 md:w-80 bg-slate-100 rounded-md">
      <input
        className="outline-0 text-xm w-full bg-transparent  py-[11px]"
        type="text"
        value={value}
        onChange={handleChange}
        placeholder="Search Notes"
      />
      {value && (
        <IoMdClose
          className="text-xl  text-slate-500 cursor-pointer hover:text-black mr-3"
          onClick={clearSearch}
        />
      )}
      
      <FaMagnifyingGlass
        className="h-5 w-6 gap-1 text-xl text-slate-500 cursor-pointer hover:text-black mr-3"
        onClick={handleClick}
      />
    </div>
  );
}

Search.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired,
  clearSearch: PropTypes.func.isRequired,
};

export default Search;
