import React, { useEffect } from "react";
import { MdDeleteOutline } from "react-icons/md";
import { LuCheck } from "react-icons/lu";

const Toast = ({ isShown, message, type, onClose }) => {
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            onClose();
        }, 3000);

        return () => {
            clearTimeout(timeoutId);
        };
    }, [onClose]);

    return (
        <div
            className={`position-absolute top-20 end-0 transition-opacity ${
                isShown ? "opacity-100" : "opacity-0"
            }`}
            style={{ right: "1.5rem", top: "5rem" }}
        >
            <div
                className={`d-flex align-items-center bg-white border shadow rounded-md position-relative ${
                    type === "delete"
                        ? "border-start border-danger"
                        : "border-start border-success"
                }`}
                style={{ minWidth: "200px" }}
            >
                <div
                    className={`d-flex align-items-center justify-content-center rounded-circle me-3 ${
                        type === "delete"
                            ? "bg-danger-subtle"
                            : "bg-success-subtle"
                    }`}
                    style={{ width: "40px", height: "40px" }}
                >
                    {type === "delete" ? (
                        <MdDeleteOutline className="text-danger" />
                    ) : (
                        <LuCheck className="text-success" />
                    )}
                </div>

                <p className="mb-0">{message}</p>
            </div>
        </div>
    );
};

export default Toast;
