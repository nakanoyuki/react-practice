import React, { useCallback, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import {
  Routes,
  Route,
  Link,
  NavLink,
  useResolvedPath,
  useMatch,
} from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Contact from "./routes/Contact";
import Nomatch from "./routes/Nomatch";
import Post from "./routes/Post";
import Posts from "./routes/Posts";
// import ChildArea from "./ChildArea";
// import InlineStyle from "./components/InlineStyle";
// import CssModules from "./components/CssModules";
// import StyledJsx from "./components/StyledJsx";
// import StyledComponent from "./components/StyledComponent";
// import Emotion from "./components/Emotion";

function App() {
  // const [text, setText] = useState("");
  // const [open, setOpen] = useState(false);
  // const onChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setText(e.target.value);
  // };
  // const onClickOpen = () => {
  //   setOpen(!open);
  // };
  // const onClickClose = useCallback(() => setOpen(false), [setOpen]);
  return (
    <div className="App">
      <ul>
        <li>
          <NavLink
            style={({ isActive }) => (isActive ? { color: "blue" } : undefined)}
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : undefined)}
            to="/about"
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : undefined)}
            to="/contact"
          >
            Contact
          </NavLink>
        </li>
      </ul>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact message="Hello Contact" />} />
        <Route path="/posts" element={<Posts />}>
          <Route path=":postId" element={<Post />} />
        </Route>
        <Route path="*" element={<Nomatch />} />
      </Routes>
      {/* <input type="text" value={text} onChange={onChangeText} />
      <button onClick={onClickOpen}>表示</button>
      <ChildArea open={open} onClickClose={onClickClose} />
      <InlineStyle />
      <CssModules />
      <StyledJsx />
      <StyledComponent />
      <Emotion /> */}
    </div>
  );
}

export default App;
