import ".List.css"

const Guest = ({ name, age, id, deleteGuests }) => {
  return (
    <div>
      <div classname="guest">
        <p>
          {name} <bn/>
          ({age})
        </p>
        <button onClick = {() => deleteGuest(id)} className="delte-button">Delete</button>
      </div>
      </div>
  );
};

export default Guest;