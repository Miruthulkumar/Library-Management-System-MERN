import { useState } from "react"; 

function ClickCounterButton() {
  const [inccount, incsetCount] = useState(0);
  const [deccount, decsetCount] = useState(0);
  return (
    <div className="headers">
      <button onClick={() => incsetCount(inccount + 1)}>
        Incremented Count: {inccount}
      </button>
      <button onClick={() => decsetCount(deccount - 1)}>
        Decremented Count: {deccount}
      </button>
    </div>
  );
}

export default ClickCounterButton;
