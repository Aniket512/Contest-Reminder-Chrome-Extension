import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { NavBar } from "./components/navbar";
import { Home } from "./components/Home/home";

function App() {
  return (
    <div className="App">
        <NavBar />
        <Home/>
    </div>
  );
}

export default App;
