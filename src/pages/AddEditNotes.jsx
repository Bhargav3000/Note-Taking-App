import { MdClose } from "react-icons/md";
import PropTypes from "prop-types";
import { useState } from "react";
import TagInput from "../components/TagInput";

const AddEditNotes = ({ onClose, type, noteData }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState([]);
  const [error, setError] = useState(null);

  const handleAddNote = async () => {
    if (!title) {
      setError("Please Enter Title");
      return;
    }
    if (!content) {
      setError("Please Enter Content");
      return;
    }
    setError("");

    if (type === "edit") {
      editNote();
    } else {
      addNewNote();
    }
  };

  const editNote = async () => {};

  const addNewNote = async () => {};

  return (
    <div className="relative">
      AddEditNotes
      <button
        className="w-10 h-10 rounded-full flex items-center justify-center absolute -top-3 -right-3 hover:bg-slate-50"
        onClick={onClose}
      >
        <MdClose className="text-xl text-slate-500" />
      </button>
      <div className="flex flex-col gap-2">
        <label className="input-label uppercase">Title</label>
        <input
          type="text"
          className="text-slate-950 text-2xl outline-none"
          placeholder="Enter Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="flex flex-col gap-2 mt-4">
        <label className="input-label uppercase">content</label>
        <textarea
          name=""
          id=""
          className="text-sm text-slate-950 outline-none p-2 bg-slate-50 rounded"
          placeholder="Enter content"
          value={content}
          onChange={({ target }) => setContent(target.value)}
          rows={10}
        />
      </div>
      <div>
        <label className="input-label uppercase">Tags</label>
        <TagInput tags={tags} setTags={setTags} />
      </div>
      {error && <p className="text-red-500 text-xs  pt-4">{error}</p>}
      <button
        className="btn-primary mt-4 font-medium p-3"
        onClick={handleAddNote}
      >
        Add
      </button>
    </div>
  );
};

AddEditNotes.propTypes = {
  onClose: PropTypes.func,
  type: PropTypes.string,
  noteData: PropTypes.object,
};

export default AddEditNotes;
