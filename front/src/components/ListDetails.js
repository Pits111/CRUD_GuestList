import Guest from "./Guest";

const ListDetails = ({ data, deleteGuests }) => {
  return (
    <div>
      {data.map((guest) => (
        <Guest key={data.id} id={guest.id} name={guest.name} age={guest.age} deleteGuests={deleteGuests}/>
      ))}
    </div>
  );
};

export default ListDetails;
