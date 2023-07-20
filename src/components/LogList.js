// LogList.js
import React from "react";

const LogList = ({ logs }) => {
  return (
    <div className="mt-4">
      <h3>Construction Daily Logs</h3>
      {logs.map((log, index) => (
        <div key={index} className="card mt-3">
          <div className="card-body">
            <h4 className="card-title">{log.activity}</h4>
            <p className="card-text">Progress: {log.progress}</p>
            <p className="card-text">Issue: {log.issue}</p>
            {log.photo && (
              <img
                src={URL.createObjectURL(log.photo)}
                alt="Log"
                className="img-fluid"
              />
            )}
            <p className="card-text">Location: {log.location}</p>
            <p className="card-text">Timestamp: {log.timestamp}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LogList;
