function List({ lists, setList }) {
  const handleDelete = (e) => {
    const index = e.target.dataset.index;
    let newList = [...lists]; //copie de ma liste avec laquelle je peux bosser
    newList.splice(index, 1);
    setList(newList);
  };
  return (
    <>
      {lists.length === 0 ? (
        "Il n'y a pas de wilders"
      ) : (
        <ul>
          My list:
          {lists.map((value, index) => (
            <li key={index}>
              {value}{" "}
              <button data-index={index} onClick={handleDelete}>
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default List;
