import Guest from "./Guest";

const Table2 = ({ data }) => {
  return (
    <div>
      
      {data.map((guest) => (
        <Item key={data.id} name={guest.name} quantity={guest.age}/>
      ))}
      <div className="horizontal-line"></div>
    </div>
  );
};

export default Table2;
