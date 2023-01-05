import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from './components/NavBar'
import Home from './components/Home'


function App() {
  return (
    <BrowserRouter className="App">
      <NavBar />
      <Routes>
        <Route path='/'element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
