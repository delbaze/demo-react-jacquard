import { useEffect } from "react";
function Liste() {
  useEffect(() => {
    // fetch("http://localhost:4000/wilder/list")
    // .then((response) => response.json())
    // .then((data) => {
    //   console.log(data);
    // });
    const controller = new AbortController();
    const signal = controller.signal;
    const recupData = async () => {
      let response = await fetch("http://localhost:4000/wilder/list", {
        signal,
      });
      let data = await response.json();
      console.log("DATA", data);
    };
    recupData();

    return () => controller.abort();
  }, []);
  return <div>Liste</div>;
}

export default Liste;
