import Guest from "./Guest";

const ListDetails = ({ data, deleteGuest }) => {
  return (
    <div>
      {data.map((guest) => (
        <Guest key={data.id} id={guest.id} name={guest.name} age={guest.age} deleteGuest={deleteGuest}/>
      ))}
    </div>
  );
};

export default ListDetails;
