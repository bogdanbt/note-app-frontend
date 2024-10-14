import React, { useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import ProfileInfo from "../Cards/ProfileInfo";
import { useNavigate } from "react-router-dom";

const Navbar = ({ userInfo, onSearchNote, handleClearSearch }) => {
    const isToken = localStorage.getItem("token");

    const [searchQuery, setSearchQuery] = useState("");

    const navigate = useNavigate();

    const onLogout = () => {
        localStorage.clear();
        navigate("/login");
    };

    const handleSearch = () => {
        if (searchQuery) {
            onSearchNote(searchQuery);
        }
    };

    const onClearSearch = () => {
        handleClearSearch();
        setSearchQuery("");
    };

    return (
        <nav className="navbar navbar-light bg-white shadow-sm py-2 px-4">
            <h2 className="navbar-brand text-dark mb-0">Notes</h2>

            {isToken && (
                <div className="d-flex align-items-center gap-3">
                    <SearchBar
                        value={searchQuery}
                        onChange={({ target }) => {
                            setSearchQuery(target.value);
                        }}
                        handleSearch={handleSearch}
                        onClearSearch={onClearSearch}
                    />

                    <ProfileInfo userInfo={userInfo} onLogout={onLogout} />
                </div>
            )}
        </nav>
    );
};

export default Navbar;
