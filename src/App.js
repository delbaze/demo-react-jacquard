// import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

//module bundler

function App() {
  const [inputText, setInputText] = useState("");
  const [lists, setList] = useState([]);

  const handleChange = (e) => {
    setInputText(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setList([...lists, inputText]);
    setInputText("");
  };
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label>Add a wilder</label>
        <input onChange={handleChange} value={inputText} />
        <button>Envoyer</button>
      </form>

      {lists.length === 0 ? (
        <p>La liste des Wilders est vide</p>
      ) : (
        <ul>
          My list:
          {lists.map((list, index) => (
            <li key={index}>{list}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
