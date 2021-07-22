import "./Table.css";

const Guest = ({ name, age }) => {
  return (
    <div>
      <div className="horizontal-line"></div>
      <div className="item">
        <p>
          {name} <bn/>
          ({age})
        </p>
        <button className="delete-button">Delete</button>
      </div>
    </div>
  );
};

export default Guest;