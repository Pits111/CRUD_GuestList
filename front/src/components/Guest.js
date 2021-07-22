import "./List.css"

const Guest = ({ name, age, id, deleteGuests }) => {
  return (
    <div className="name-age-wrapper">
        <div className="name-container">
          <span>{name}</span>
        </div>
        <div className="age-container">
          <span>{age}</span>
        </div>
        
        <button onClick = {() => deleteGuests(id)} className="delete-button">Delete</button>
        <button onClick = {() => deleteGuests(id)} className="edit-button">Edit</button>
    </div>
  );
};

export default Guest;