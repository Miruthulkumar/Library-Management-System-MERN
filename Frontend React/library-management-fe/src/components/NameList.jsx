const names = ["Miruthul kumar", "Harshan Kumar", "Murali", "SivaSelvi"];

const Namelist = () => {
  return (
    <div className="headers">
      {names.map((name, index) => (
        <h2 key={index}>{name}</h2>
      ))}
    </div>
  );
};

export default Namelist;
