
import React from "react";
import "./Nots.css";

function NoteCard({
  note,
  index,
  onViewPDF,
  onDownloadPDF,
}) {
  if (!note) return null;

  const title = note.title || note.name || "Untitled Note";
  const semester = note.semester || "N/A";
  const subject = note.subject || note.name || "N/A";
  const pdf = note.pdf || note.completeNotes || null;

  return (
    <div
      className="note-card"
      style={{
        animationDelay: `${index * 0.05}s`,
      }}
    >
      <div className="note-card-glow"></div>

      <div className="note-title">
        {title}
      </div>

      <div className="note-meta">
        <div className="meta-item">
          <strong>Semester</strong>
          <span className="meta-badge badge-semester">
            {semester}
          </span>
        </div>

        <div className="meta-item">
          <strong>Subject</strong>
          <span className="meta-badge badge-subject">
            {subject}
          </span>
        </div>
      </div>

      <div className="note-actions">
        <button
          className="action-btn btn-view"
          onClick={() => {
            if (onViewPDF && pdf) {
              onViewPDF(pdf);
            }
          }}
          disabled={!pdf}
        >
          View PDF
        </button>

        {pdf && (
          <button
            className="action-btn btn-download"
            onClick={() => {
              if (onDownloadPDF) {
                onDownloadPDF(pdf, title);
              }
            }}
          >
            Download
          </button>
        )}
      </div>
    </div>
  );
}

export default NoteCard;

