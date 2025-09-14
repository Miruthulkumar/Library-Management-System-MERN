function Misc() {
  const studentDetails = 
    {
      name: "Miruthul kumar M",
      dept: "ECE",
      Regno: "133",
    }
  ;

const deptfullname = `${studentDetails.dept} [Electronics and Coummunication Engineering]`;

  return (
    //external css
    <div class="headers">
      <a href="https://github.com/Miruthulkumar">
        <h1 class="name">Miruthul</h1>
      </a>
      <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_inline_layout">
        <h1 style={{ color: "orange", textDecoration: "underline" }}>
          This is an example for inline css
        </h1>
      </a>
      
      <h1>Name:{studentDetails.name}</h1>
      <h1>Department:{studentDetails.dept}</h1>
      <h1>Reg No:{studentDetails.Regno}</h1>
      <h1>Department Full Name : {deptfullname}</h1>
    </div>
  );
}

export default Misc;
