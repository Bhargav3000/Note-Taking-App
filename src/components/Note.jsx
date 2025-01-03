import PropTypes from "prop-types";
import { MdCreate, MdDelete, MdOutlinePushPin } from "react-icons/md";

const Note = ({
  title,
  date,
  isPinned,
  onPinNote,
  content,
  tags,
  onEdit,
  onDelete,
}) => {
  return (
    <div className="p-4 bg-white border rounded hover:shadow-xl transition-all ease-in-out">
      <div className="flex items-center justify-between">
        <div>
          <h6 className="text-sm font-medium">{title}</h6>
          <span className="text-xs text-gray-600 ">{date}</span>
        </div>
        <MdOutlinePushPin
          className={`icon-btn ${
            isPinned ? "text-slate-950" : "text-slate-400"
          }`}
          onClick={onPinNote}
        />
      </div>
      <p className="text-xs text-slate-600 mt-2">{content?.slice(0, 60)}</p>
      <div className="flex items-center justify-between mt-2">
        <div className="text-xs text-slate-500">{tags}</div>
        <div className="flex items-center gap-2">
          <MdCreate className="icon-btn hover:text-blue-600" onClick={onEdit} />
          <MdDelete
            className="icon-btn hover:text-red-600"
            onClick={onDelete}
          />
        </div>
      </div>
    </div>
  );
};

Note.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  isPinned: PropTypes.bool.isRequired,
  onPinNote: PropTypes.func.isRequired,
  content: PropTypes.string.isRequired,
  tags: PropTypes.string,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Note;
