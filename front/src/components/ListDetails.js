import Guest from "./Guest";

const ListDetails = ({ data }) => {
  return (
    <div>
      
      {data.map((guest) => (
        <Guest key={data.id} name={guest.name} quantity={guest.age}/>
      ))}
      <div className="horizontal-line"></div>
    </div>
  );
};

export default ListDetails;