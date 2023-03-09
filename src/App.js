// import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import List from "./components/List";

//module bundler

function App() {
  const [inputText, setInputText] = useState("");
  const [lists, setList] = useState([]);
  const [editing, setEditing] = useState(null);

  const handleChange = (e) => {
    setInputText(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    let list = [...lists];
    if (editing) {
      list[editing] = inputText;
    } else {
      list = [...lists, inputText];
    }
    setList(list);
    setInputText("");
    setEditing(null);
  };

  const handleDelete = (e) => {
    const index = e.target.dataset.index;
    let newList = [...lists]; //copie de ma liste avec laquelle je peux bosser
    newList.splice(index, 1);
    setList(newList);
  };
  const handleUpdate = (e) => {
    const index = e.target.dataset.index;
    if (editing == index) {
      setEditing(null);
      setInputText("");
    } else {
      setEditing(index);
      setInputText(lists[index]);
    }
  };
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label>Add a wilder</label>
        <input onChange={handleChange} value={inputText} />
        <button>{editing ? "Mettre à jour" : "Envoyer"}</button>
      </form>

      <List
        lists={lists}
        handleDelete={handleDelete}
        handleUpdate={handleUpdate}
        editing={editing}
      />

      {/* {lists.length === 0 ? (
        <p>La liste des Wilders est vide</p>
      ) : (

      )} */}
    </div>
  );
}

export default App;
