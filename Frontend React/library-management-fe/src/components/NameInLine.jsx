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
];

function NameInLine() {
  const nameInLine = `${studentDetails[0].name} is an ${studentDetails[0].dept} student and his Register no is ${studentDetails[0].Regno}`;
  return <h1 class="headers">{nameInLine}</h1>;
}

export default NameInLine;