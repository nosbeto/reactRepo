import "./App.css";
import NavBar from "./components/NavBar";
import HomeWrapper from "./components/HomeWrapper";
import ProjectWrapper from "./components/ProjectWrapper";
import { useState } from "react";

function App() {
  const [isActive, setIsActive] = useState(false);
  // const handleClickActive = event => {
  //     setIsActive(current=>!current)
  // }
  const handleClickActive = () => {
    console.log("this shit works");
    return (
      <div>
        <NavBar handleClickActive={isActive} />
        <HomeWrapper handleClickActive={isActive} />
        <ProjectWrapper />
      </div>
    );
  };
}

export default App;
