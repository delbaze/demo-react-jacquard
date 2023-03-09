// import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import List from "./components/List";

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

  const handleDelete = (e) => {
    const index = e.target.dataset.index;
    let newList = [...lists]; //copie de ma liste avec laquelle je peux bosser
    newList.splice(index, 1);
    setList(newList);
  };
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label>Add a wilder</label>
        <input onChange={handleChange} value={inputText} />
        <button>Envoyer</button>
      </form>

      <List lists={lists} handleDelete={handleDelete} />

      {/* {lists.length === 0 ? (
        <p>La liste des Wilders est vide</p>
      ) : (

      )} */}
    </div>
  );
}

export default App;
