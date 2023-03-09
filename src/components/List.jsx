import styles from "./List.module.css";

function List({ lists, handleDelete, handleUpdate, editing }) {
  //   const handleDelete = (e) => {
  //     const index = e.target.dataset.index;
  //     let newList = [...lists]; //copie de ma liste avec laquelle je peux bosser
  //     newList.splice(index, 1);
  //     setList(newList);
  //   };
  return (
    <>
      {lists.length === 0 ? (
        "Il n'y a pas de wilders"
      ) : (
        <ul>
          My list:
          {lists.map((value, index) => (
            <li  key={index}>
              {/* <li className="superToto" key={index}> */}
              {value}{" "}
              <button data-index={index} onClick={handleDelete}>
                Remove
              </button>
              <button
                data-index={index}
                className={editing == index ? 'editing' : null}
                onClick={handleUpdate}
              >
                {editing == index ? "Annuler" : "Edit"}
              </button>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default List;
