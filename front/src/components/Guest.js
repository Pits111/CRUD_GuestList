import "./List.css"

const Guest = ({ name, age, id, deleteGuest }) => {
  return (
    <div>
      <div classname="guest">
        <p>
          {name} <bn/>
          ({age})
        </p>
        <button onClick = {() => deleteGuest(id)} className="delete-button">Delete</button>
      </div>
      </div>
  );
};

export default Guest;