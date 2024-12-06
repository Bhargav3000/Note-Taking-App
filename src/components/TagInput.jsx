import PropTypes from "prop-types";
import { useState } from "react";
import { MdClose } from "react-icons/md";
import { MdAdd } from "react-icons/md";
function TagInput({ tags, setTags }) {
  const [inputValue, setInputValue] = useState("");

  function handleRemoveTag(tag) {
    setTags(tags.filter((x) => x !== tag));
  }
  function addNewTags(e) {
    setInputValue(e.target.value);
  }

  function handleKeyDown(e) {
    if (e.key == "Enter") {
      addNewTag();
    }
  }

  function addNewTag() {
    if (inputValue.trim() != "") {
      setTags([...tags, inputValue.trim()]);
      setInputValue("");
    }
  }

  return (
    <div>
      {tags?.length > 0 && (
        <div className="flex items-center gap-2 flex-wrap mt-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="flex items-center gap-2 text-sm text-slate-900 bg-slate-100 px-3 py-1 rounded"
            >
              #{tag}
              <button
                onClick={() => {
                  handleRemoveTag(tag);
                }}
              >
                <MdClose />
              </button>
            </span>
          ))}
        </div>
      )}
      <div className="flex items-center gap-4 mt-3">
        <input
          type="text"
          value={inputValue}
          className="text-sm bg-transparent border px-3 py-2 rounded outline-none"
          placeholder="Add Tags"
          onChange={addNewTags}
          onKeyDown={handleKeyDown}
        />
        <button
          className="w-8 h-8 flex items-center justify-center rounded border border-blue-700 hover:bg-blue-700"
          onClick={() => {
            addNewTag();
          }}
        >
          <MdAdd className="text-2xl text-blue-700 hover:text-white" />
        </button>
      </div>
    </div>
  );
}

TagInput.propTypes = {
  tags: PropTypes.array.isRequired,
  setTags: PropTypes.func,
};

export default TagInput;
