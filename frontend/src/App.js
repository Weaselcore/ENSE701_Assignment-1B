// Styling - todo

import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink
} from "react-router-dom";

import SubmitForm from "./components/SubmitForm";
import Articles from "./pages/Articles";

function App() {
  return (
    <Router>
        <ul className="header">
          <li><NavLink exact="true" to="/">Home</NavLink></li>
          <li><NavLink to="/users">Users</NavLink></li>
          <li><NavLink to="/articles">Articles</NavLink></li>
          <li><NavLink to="/submitarticle">Submit Article</NavLink></li>
        </ul>

        <div className="content">
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/users" element={<Users />}/>
            <Route path="/articles" element={<Articles/>}/>
            <Route path="/submitarticle" element={<SubmitForm/>}/>
            <Route path="/*" element={<NotFoundPage/>}/>
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
