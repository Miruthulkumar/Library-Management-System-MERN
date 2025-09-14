 const studentDetails = [
    {
      name: "Miruthul kumar M",
      dept: "ECE",
      Regno: "133",
    },
    {
      name: "Harshan kumar M",
      dept: "MECH",
      Regno: "100",
    },
    {
      name: "Dinesh S",
      dept: "AIML",
      Regno: "016",
    },
    {
      name: "Sanjai Magilan",
      dept: "ECE",
      Regno: "189",
    },
    {
      name: "Kamalesh",
      dept: "ECE",
      Regno: "099",
    },
    {
      name:"Rohit",
      dept:"CSE",
      Regno:"091"
    }
  ];

  function StudentTable(){
    return(
        <table className="headers" border={1} align="center">
          <caption style={{ fontWeight: "bold" }}>Table of Studets</caption>
          <thead>
            <th>Name</th>
            <th>Department</th>
            <th>RegN0</th>
          </thead>
          <tbody>
            {studentDetails.map((name, index) => {
              return (
                <tr key={index}>
                  <td>{name.name}</td>
                  <td>{name.dept}</td>
                  <td>{name.Regno}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
    )
  }
  
export default StudentTable;