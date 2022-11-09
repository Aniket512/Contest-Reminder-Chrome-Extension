   /*global chrome*/
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { NavBar } from "./components/Navbar";
import { Home } from "./components/Home/Home";
import { useEffect, useState } from "react";
import axios from "axios";
import Platform from "./components/Platform";

function App() {
  const [AllContests, setAllContests] = useState([])
  useEffect(() => {
    axios.get("https://kontests.net/api/v1/all").then((res) => {
      setAllContests(res.data);
    })
  }, []);

  return (
    <div className="App">
        <NavBar />
        <Routes>
          <Route path='/'element={<Home contests={AllContests} />} />
          <Route path='/platform' element={<Platform />} />
        </Routes>


    </div>
  );
}

export default App;
