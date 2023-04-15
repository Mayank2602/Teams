import React from "react"; 
import Team from "./components/Team";
import Help from "./components/Help";
import { Routes, Route } from "react-router-dom"
import './App.css';
 

function App() {
   return (
    <div className="App">
     <Routes>
     <Route path='/help' element={<Help/>}/>
     <Route path='/team' element={<Team/>}/> 
     </Routes>
    </div>
   )
 
}

export default App;