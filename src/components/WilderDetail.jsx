import "./WilderDetails.css"
import Languages from "./Languages";
export default function WilderDetail({
  wilder: { first_name, last_name, email, note },
}) {
  // const {first_name, last_name, email}  = wilder;
  return (
    <div className="card">
      <p>{first_name}</p>
      <p>{last_name}</p>
      <p>{email}</p>
      <Languages notes={note}/>
    </div>
  );
}
