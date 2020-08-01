import React, { useState } from "react";
import "./App.css";
import  ReactMarkdown  from "react-markdown";
// const ReactMarkdown = require('react-markdown')

export default function App() {
  const [markdown, setMarkdown] = useState("Markdown goes here");
  function handleChange(e) {
    setMarkdown(e.target.value);
  }
  return (
    <div className="app">
      <textarea onChange={handleChange} value={markdown} />

      <ReactMarkdown className="preview" source={markdown} />
    </div>
  );
}
