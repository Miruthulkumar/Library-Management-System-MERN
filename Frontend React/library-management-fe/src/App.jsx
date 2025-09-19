// import { useState } from "react";
import "./App.css";
import StudentTable from "./components/StudentTabel";
import NameInLine from "./components/NameInLine";
import FruitsList from "./components/FruitsList";
import ClickCounterButton from "./components/ClickCounterButton";
import CountArray from "./components/CountArray";
import User from "./components/User";
import Namelist from "./components/NameList";

function App() {
  return (
    <>
      <NameInLine />

      <FruitsList />

      <Namelist />

      <StudentTable />

      <ClickCounterButton />

      {/* <CountArray/> */}

      {/* <User/> */}

      {/* <Misc/> */}
    </>
  );
}

export default App;
