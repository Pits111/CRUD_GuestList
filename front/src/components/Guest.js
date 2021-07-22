import "./List.css"

const Guest = ({ name, age, id, deletesGuests }) => {
  return (
    <div>
      <div classname="guest">
        <p>
          {name} <bn/>
          ({age})
        </p>
        <button onClick = {() => deleteGuests(id)} className="delete-button">Delete</button>
      </div>
      </div>
  );
};

export default Guest;