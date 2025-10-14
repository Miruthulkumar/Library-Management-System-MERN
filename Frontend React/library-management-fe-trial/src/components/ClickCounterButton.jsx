import { useState } from "react";

const ClickCounterButton = () => {
  const [inccount, incsetCount] = useState(0);
  const [deccount, decsetCount] = useState(0);
  return (
    <div className="headers">
      <button
        style={{ backgroundColor: "#781D42" }}
        onClick={() => incsetCount(inccount + 1)}
      >
        Incremented Count: {inccount}
      </button>
      <button
        style={{ backgroundColor: "#781D42" }}
        onClick={() => decsetCount(deccount - 1)}
      >
        Decremented Count: {deccount}
      </button>
    </div>
  );
};

export default ClickCounterButton;
