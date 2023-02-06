import React from "react";
import logo from "./logo.svg";
import "./App.css";
import MuiTyphorapy from "./components/MuiTyphorapy";
import MuiButton from "./components/MuiButton";
import MuiTextField from "./components/MuiTextField";
import { MuiSelect } from "./components/MuiSelect";
import { MUIRadioButton } from "./components/MUIRadioButton";
import { MuiCheckbox } from "./components/MuiCheckbox";

function App() {
  return (
    <div className="App">
      {/* <MuiTyphorapy/> */}
      {/* <MuiButton /> */}
      {/* <MuiTextField /> */}
      {/* <MuiSelect /> */}
      {/* <MUIRadioButton /> */}
      <MuiCheckbox />
    </div>
  );
}

export default App;
