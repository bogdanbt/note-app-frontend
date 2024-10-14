import React from "react";
import { getInitials } from "../../utils/helper";

const ProfileInfo = ({ userInfo, onLogout }) => {
    return (
        userInfo && (
            <div className="d-flex align-items-center gap-3">
                <div
                    className="d-flex justify-content-center align-items-center rounded-circle bg-light text-dark fw-bold"
                    style={{ width: "48px", height: "48px" }}
                >
                    {getInitials(userInfo ? userInfo.fullName : "")}
                </div>

                <div>
                    <p className="mb-1 small fw-bold">
                        {userInfo.fullName || ""}
                    </p>
                    <button
                        className="btn btn-link p-0 text-decoration-none text-muted small"
                        onClick={onLogout}
                    >
                        Logout
                    </button>
                </div>
            </div>
        )
    );
};

export default ProfileInfo;
