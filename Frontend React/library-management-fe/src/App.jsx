// import { useState } from "react";
import "./App.css";
import StudentTable from "./components/StudentTabel";
import NameInLine from "./components/NameInLine";
import FruitsList from "./components/FruitsList";
import ClickCounterButton from "./components/ClickCounterButton";
import Misc from "./components/Misc";

function App() {
  return (
    <>
      <NameInLine />

      <FruitsList />

      <StudentTable />

      <ClickCounterButton />

      <Misc/>
    </>
  );
}

export default App;
