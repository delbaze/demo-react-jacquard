// import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Accueil from "./pages/Accueil";
import Formulaire from "./pages/Formulaire";
import Liste from "./components/Liste";

//module bundler

function App() {
  return (
    <div
      className="App"
    >
      <Routes>
        <Route path="/" element={<Accueil />}>
          <Route index element={<Liste />} />
          <Route path="create-or-edit" element={<Formulaire />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
