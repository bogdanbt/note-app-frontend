import React from "react";

const EmptyCard = ({ imgSrc, message }) => {
    return (
        <div className="d-flex flex-column align-items-center justify-content-center mt-5">
            <img src={imgSrc} alt="No notes" className="w-50" />

            <p
                className="text-center text-muted fw-medium mt-4"
                style={{ width: "50%" }}
            >
                {message}
            </p>
        </div>
    );
};

export default EmptyCard;
