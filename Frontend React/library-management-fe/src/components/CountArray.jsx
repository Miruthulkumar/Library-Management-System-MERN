import { useState } from "react";

const CountArray = () => {
  //function dhan idhu just variable la epty function use pani panirkom
  const [count, setCount] = useState([]);

  const addNumber = () => {
    //function dhan idhu just variable la epty function use pani panirkom
    setCount([...count, count.length + 1]);
  };

  const subNumber = () => {
    count.pop();
    setCount([...count]);
  };

  return (
    <div class="headers">
      <button onClick={addNumber}>Add Number in List</button>
      <button onClick={subNumber}>Subtract Number from List</button>

      <ul>
        {count.map((num, index) => (
          <h3 style={{ display: "inline" }} key={index}>
            {num}{" "}
          </h3>
        ))}
      </ul>
    </div>
  );
};

export default CountArray;
