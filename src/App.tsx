import React, { useCallback, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import ChildArea from "./ChildArea";
import InlineStyle from "./components/InlineStyle";
import CssModules from "./components/CssModules";
import StyledJsx from "./components/StyledJsx";
import StyledComponent from "./components/StyledComponent";
import Emotion from "./components/Emotion";

function App() {
  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);
  const onChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };
  const onClickOpen = () => {
    setOpen(!open);
  };
  const onClickClose = useCallback(() => setOpen(false), [setOpen]);
  return (
    <div className="App">
      <input type="text" value={text} onChange={onChangeText} />
      <button onClick={onClickOpen}>表示</button>
      <ChildArea open={open} onClickClose={onClickClose} />
      <InlineStyle />
      <CssModules />
      <StyledJsx />
      <StyledComponent />
      <Emotion />
    </div>
  );
}

export default App;
