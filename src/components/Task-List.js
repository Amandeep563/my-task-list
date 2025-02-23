import { useState } from "react";

export default function Head() {
  return (
    <div>
      <TitleOfThePage />
      <Main />
    </div>
  );
}

function TitleOfThePage() {
  return <h1 className="title">My Task</h1>;
}

function Main() {
  const [newItem, setNewItem] = useState("");
  const [displayText, setDisplayText] = useState("");

  function handleClikeItems() {
    setDisplayText(newItem);
    setNewItem("");
  }
  return (
    <>
      <div className="main">
        <h3>Task List</h3>
        <input
          type="text"
          className="input-field"
          placeholder="Write somthing"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />
        <button onClick={handleClikeItems}>New Task</button>
      </div>
      <div className="items">
        <input type="checkbox" className="input" />
        <span>{displayText} </span>
      </div>
    </>
  );
}
