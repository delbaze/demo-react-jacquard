import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; //hook permettant de gérer la navigation depuis react router dom

function Formulaire() {
  const navigation = useNavigate(); //récupération de la méthode de navigation depuis useNavigate
  const controller = new AbortController(); //permettra d'annuler la requête au déchargement du composant
  const [state, setState] = useState({
    //on déclare un état "state" qui contient un objet
    first_name: "",
    last_name: "",
    email: "",
  });
  //au changement de chaque input je vais récupérer le name depuis l'évènement, pour pouvoir atteindre dynamiquement la clé de l'objet "state"
  const handleChange = (e) => {
    setState((state) => ({ ...state, [e.target.name]: e.target.value })); //setState((state) => ({...state, first_name: e.target.value }))
    //au dessus on récupère le state dans le dernier état connu car setState, étant asynchrone, il est préférable de forcer la récupération du dernier état pour travailler avec.
  };

  //méthode appelée lors du submit du formulaire
  const handleSubmit = (e) => {
    e.preventDefault(); //on stope le comportement par défaut du formulaire à partir de l'évènement du submit, pour éviter de rafraichir la page et nous permettre de travailler de manière programmée les données
    const createWilder = async () => {
      let signal = controller.signal;
      try {
        let response = await fetch(
          `${process.env.REACT_APP_BACK_URL}/wilder/create`,
          {
            signal, //injection du signal permettant ensuite l'annulation de la requête
            method: "POST", //ne pas oublier le post ici puisque par défaut fetch est en GET
            headers: {
              "Content-Type": "application/json", //permet d'indiquer dans la requête que nous envoyons du json
            },
            body: JSON.stringify(state), //le body doit être en chaine de caractère pour fetch, d'où le JSON.stringify()
          }
        );
        let data = await response.json(); //on attend le traitement json de la réponse.
        console.log("DATA", data); // pour l'instant je ne l'affiche que dans la console, mais libre à vous de l'utiliser pour faire quelque chose avec!
        navigation("/"); //on basculer sur l'accueil si tout s'est bien passé

        // return redirect('http://localhost:3000')
      } catch (err) {
        console.log("une erreur s'est produite");
      }
    };

    createWilder();
  };

  useEffect(() => {
    return () => controller.abort();
  }, [state]);

  return (
    <div>
      <h1>Ajouter un wilder</h1>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          value={state.first_name}
          name="first_name"
        />
        <input
          onChange={handleChange}
          value={state.last_name}
          name="last_name"
        />
        <input onChange={handleChange} value={state.email} name="email" />
        <button>Valider</button>
      </form>
    </div>
  );
}
export default Formulaire;
