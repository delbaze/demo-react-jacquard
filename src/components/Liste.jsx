import { useEffect, useState } from "react";
import WilderDetail from "./WilderDetail";
function Liste() {
  const [wilderList, setWilderList] =  useState([]);
  useEffect(() => {
    // fetch("http://localhost:4000/wilder/list")
    // .then((response) => response.json())
    // .then((data) => {
    //   console.log(data);
    // });
    console.log(process.env.REACT_APP_BACK_URL);
    const controller = new AbortController();
    const signal = controller.signal;
    const recupData = async () => {
      let response = await fetch(
        `${process.env.REACT_APP_BACK_URL}/wilder/list`,
        {
          signal,
        }
      );
      let data = await response.json();
      console.log("DATA", data);
      setWilderList(data)
    };
    recupData();

    return () => controller.abort();
  }, []);
  return <div>Liste

    {wilderList && wilderList.map((wilder) => {
      return(
        <WilderDetail key={wilder.id} wilder={wilder} />
      )
    })}
  </div>;
}

export default Liste;
