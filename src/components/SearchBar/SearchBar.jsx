import React from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";

const SearchBar = ({ value, onChange, handleSearch, onClearSearch }) => {
    return (
        <div className="input-group" style={{ maxWidth: "320px" }}>
            <input
                type="text"
                placeholder="Search Notes"
                className="form-control"
                value={value}
                onChange={onChange}
            />

            {value && (
                <span className="input-group-text bg-transparent border-0">
                    <IoMdClose
                        className="text-muted cursor-pointer"
                        onClick={onClearSearch}
                        style={{ cursor: "pointer" }}
                    />
                </span>
            )}

            <span className="input-group-text bg-transparent border-0">
                <FaMagnifyingGlass
                    className="text-muted"
                    onClick={handleSearch}
                    style={{ cursor: "pointer" }}
                />
            </span>
        </div>
    );
};

export default SearchBar;
