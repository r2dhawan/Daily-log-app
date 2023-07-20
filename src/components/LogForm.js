// LogForm.js
import React, { useState } from "react";

const LogForm = ({ addLog }) => {
  const [activity, setActivity] = useState("");
  const [progress, setProgress] = useState("");
  const [issue, setIssue] = useState("");
  const [photo, setPhoto] = useState(null);
  const [location, setLocation] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    setPhoto(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const log = {
      activity,
      progress,
      issue,
      photo,
      location,
      timestamp: new Date().toISOString(),
    };
    addLog(log);
    setActivity("");
    setProgress("");
    setIssue("");
    setPhoto(null);
    setLocation("");
    setIsSubmitted(true);
  };

  const handleAlertClose = () => {
    setIsSubmitted(false);
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4 p-3 bg-light rounded">
      <h3>Construction Daily Log</h3>
      <div className="form-group">
        <label>Activity:</label>
        <input
          type="text"
          className="form-control"
          value={activity}
          onChange={(e) => setActivity(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Progress:</label>
        <textarea
          className="form-control"
          value={progress}
          onChange={(e) => setProgress(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Issue:</label>
        <textarea
          className="form-control"
          value={issue}
          onChange={(e) => setIssue(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Photo:</label>
        <input
          type="file"
          className="form-control-file"
          accept="image/*"
          onChange={handlePhotoChange}
        />
      </div>
      <div className="form-group">
        <label>Location:</label>
        <input
          type="text"
          className="form-control"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>

      {isSubmitted && (
        <div className="alert alert-success mt-3" role="alert">
          Information sent successfully!
          <button type="button" className="close" onClick={handleAlertClose}>
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
      )}
    </form>
  );
};

export default LogForm;
