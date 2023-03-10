export default function WilderDetail({
  wilder: { first_name, last_name, email },
}) {
  // const {first_name, last_name, email}  = wilder;
  return (
    <div>
      <p>{first_name}</p>
      <p>{last_name}</p>
      <p>{email}</p>
    </div>
  );
}
