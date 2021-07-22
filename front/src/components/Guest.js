
const Guest = ({ name, age }) => {
  return (
    <div>
        <p>
          {name}
          ({age})
        </p>
        <button className="delete-btn">Delete</button>
      </div>
  );
};

export default Guest;