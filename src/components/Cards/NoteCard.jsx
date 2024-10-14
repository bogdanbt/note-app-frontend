import moment from "moment";
import React from "react";
import { MdOutlinePushPin, MdCreate, MdDelete } from "react-icons/md";

const NoteCard = ({
    title,
    date,
    content,
    tags,
    isPinned,
    onEdit,
    onDelete,
    onPinNote,
}) => {
    return (
        <div className="card shadow-sm mb-4">
            <div className="card-body">
                <div className="d-flex justify-content-between align-items-center">
                    <div>
                        <h6 className="card-title">{title}</h6>
                        <span className="text-muted small">
                            {date ? moment(date).format("Do MMM YYYY") : "-"}
                        </span>
                    </div>
                    <MdOutlinePushPin
                        className={`icon-btn ${
                            isPinned ? "text-primary" : "text-secondary"
                        }`}
                        onClick={onPinNote}
                        style={{ cursor: "pointer" }}
                    />
                </div>

                <p className="card-text mt-2 text-muted small">
                    {content?.slice(0, 60)}
                    {content?.length > 60 && "..."}
                </p>

                <div className="d-flex justify-content-between align-items-center mt-3">
                    <div className="text-muted small">
                        {tags.map((item) => `#${item} `)}
                    </div>

                    <div className="d-flex gap-2">
                        <MdCreate
                            className="text-success"
                            onClick={onEdit}
                            style={{ cursor: "pointer" }}
                        />
                        <MdDelete
                            className="text-danger"
                            onClick={onDelete}
                            style={{ cursor: "pointer" }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NoteCard;
