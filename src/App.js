import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from './components/NavBar'
import Banner from './components/Banner'


function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
    </div>
  );
}

export default App;
