function FruitsList() {
  const fruits = ["Apple 🍎", "Orange 🍊", "PineApple 🍍"];

  return (
    <div class="headers">
      {fruits.map((fruit, index) => (
        <h2 key={index}>{fruit}</h2>
      ))}
    </div>
  );
}

export default FruitsList;
