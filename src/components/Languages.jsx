function Languages({notes}) {
    console.log("notes", notes);
  return <div>
    <ul>
    {notes.map((n) => (
        <li key={n.id}>{n.language.label}: {n.note}</li>
    ))}
    </ul>
  </div>;
}

export default Languages