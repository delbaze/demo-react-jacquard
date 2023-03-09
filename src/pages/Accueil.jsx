import { Outlet } from "react-router-dom";

function Accueil() {
  return (
    <div>
      <nav>
        <div>super test</div>
      </nav>
      Accueil
      <Outlet />
    </div>
  );
}

export default Accueil;
