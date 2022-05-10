// Styling - todo

import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink
} from "react-router-dom";

function App() {
  return (
    <Router>
        <ul className="header">
          <li><NavLink exact="true" to="/">Home</NavLink></li>
          <li><NavLink to="/users">Users</NavLink></li>
        </ul>

        <div className="content">
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/users" element={<Users />}/>
            <Route path="/*" element={<NotFoundPage/>} />
          </Routes>
        </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

function NotFoundPage() {
  return <h2>Not Found</h2>
}

export default App;
