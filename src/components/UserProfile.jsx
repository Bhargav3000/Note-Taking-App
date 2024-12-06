import PropTypes from "prop-types";
import { getInitials } from "../utils/helper";

function UserProfile({ onLogout }) {
  return (
    <div className="flex items-center gap-4">
      <div className="w-12 h-12 flex items-center justify-center px-6 py-3 rounded-full font-medium text-slate-950 bg-slate-100">
       {getInitials("Robert patt")}
      </div>

      <div className="flex items-center hover:">
        <p className="font-medium text-lg">Robert</p>
      </div>
      <button
        className="text-sm bg-red-600 p-2 rounded-lg hover:opacity-80 text-white"
        onClick={onLogout}
      >
        Logout
      </button>
    </div>
  );
}
UserProfile.propTypes = {
  onLogout: PropTypes.func.isRequired,
};
export default UserProfile;
