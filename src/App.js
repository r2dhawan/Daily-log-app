// App.js
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LogForm from "./components/LogForm";
import LogList from "./components/LogList";
import Login from "./components/Login";

const App = () => {
  const [logs, setLogs] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const addLog = (log) => {
    setLogs((prevLogs) => [...prevLogs, log]);
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <Router>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <nav className="navbar navbar-expand navbar-light bg-light">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <Link to="/" className="nav-link">
                    Dashboard
                  </Link>
                </li>
                {isLoggedIn ? (
                  <React.Fragment>
                    <li className="nav-item">
                      <Link to="/log" className="nav-link">
                        Add Log
                      </Link>
                    </li>
                    <li className="nav-item">
                      <button
                        className="btn btn-link nav-link"
                        onClick={handleLogout}
                      >
                        Logout
                      </button>
                    </li>
                  </React.Fragment>
                ) : (
                  <li className="nav-item">
                    <Link to="/login" className="nav-link">
                      Login
                    </Link>
                  </li>
                )}
              </ul>
            </nav>
          </div>
          <div className="col-md-12 mt-4">
            {/* Display the dashboard message */}
            <div className="alert alert-info" role="alert">
              <h4 className="alert-heading">
                Welcome to Construction Daily Log
              </h4>
              <p>
                This website allows construction workers to log their daily
                activities, progress, and issues encountered on the job site.
              </p>
              <hr />
              <p className="mb-0">
                Please log in to add and view your daily logs.
              </p>
            </div>
            {/* Routes */}
            <Routes>
              <Route
                path="/"
                element={
                  isLoggedIn ? (
                    <h2>Welcome to the Dashboard</h2>
                  ) : (
                    <Login handleLogin={handleLogin} />
                  )
                }
              />
              <Route
                path="/login"
                element={<Login handleLogin={handleLogin} />}
              />
              <Route
                path="/log"
                element={
                  isLoggedIn ? (
                    <LogForm addLog={addLog} />
                  ) : (
                    <h2>Please log in to add a log.</h2>
                  )
                }
              />
            </Routes>
            {isLoggedIn && <LogList logs={logs} />}
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
