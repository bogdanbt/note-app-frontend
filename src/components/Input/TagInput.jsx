import React, { useState } from "react";
import { MdAdd, MdClose } from "react-icons/md";

const TagInput = ({ tags, setTags }) => {
    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const addNewTag = () => {
        if (inputValue.trim() !== "") {
            setTags([...tags, inputValue.trim()]);
            setInputValue("");
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            addNewTag();
        }
    };

    const handleRemoveTag = (tagToRemove) => {
        setTags(tags.filter((tag) => tag !== tagToRemove));
    };

    return (
        <div>
            {tags.length > 0 && (
                <div className="d-flex align-items-center gap-2 flex-wrap mt-2">
                    {tags.map((tag, index) => (
                        <span
                            key={index}
                            className="badge bg-light text-dark d-flex align-items-center gap-2"
                        >
                            # {tag}
                            <button
                                onClick={() => handleRemoveTag(tag)}
                                className="btn btn-sm p-0 text-danger"
                            >
                                <MdClose />
                            </button>
                        </span>
                    ))}
                </div>
            )}

            <div className="d-flex align-items-center gap-3 mt-3">
                <input
                    type="text"
                    value={inputValue}
                    className="form-control"
                    onChange={handleInputChange}
                    onKeyDown={handleKeyDown}
                    placeholder="Add tags"
                />

                <button
                    className="btn btn-outline-primary d-flex align-items-center justify-content-center p-2"
                    onClick={addNewTag}
                >
                    <MdAdd className="fs-4" />
                </button>
            </div>
        </div>
    );
};

export default TagInput;
