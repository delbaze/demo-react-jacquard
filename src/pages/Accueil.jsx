import { Link, Outlet } from "react-router-dom";

function Accueil() {
  return (
    <div>
      <nav>
        <Link to={"/"}>Liste</Link>
        <Link to={"/create-or-edit"}>Formulaire</Link>
        {/* <Link to={"/"}>Liste</Link>
        <Link to={"/create-or-edit"}>Formulaire</Link> */}
      </nav>
      Accueil
      <Outlet />
    </div>
  );
}

export default Accueil;
