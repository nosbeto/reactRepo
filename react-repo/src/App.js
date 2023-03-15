import "./App.css";
import NavBar from "./components/NavBar";
import HomeWrapper from "./components/HomeWrapper";
import ProjectWrapper from "./components/ProjectWrapper";
import ContactMeWrapper from "./components/ContactMeWrapper";
import { useState } from "react";
import Project from "./components/Project";
import "./index.css"

function App() {
  const [isActive, setIsActive] = useState('Home');
  const renderPage = () => {
    switch (isActive) {
      case "Home":
      return <HomeWrapper/>
      break;
      case "Project":
        return <ProjectWrapper/>
      break;
      case "ContactMe":
        return <ContactMeWrapper/>
      break;
    }}
    const handlePageChange = (isActive) => setIsActive(isActive)
    return (
      <div>
        <NavBar handlePageChange={handlePageChange} isActive={isActive}/>
        {renderPage()}
      </div>
    );
}

export default App;
