import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import AllBeersPage from "./pages/AllBeersPage";
import RandomBeerPage from "./pages/RandomBeerPage";
import BeerDetailsPage from "./pages/BeerDetailsPage";
import AddBeerPage from "./pages/AddBeerPage";
import Navbar from "./components/Navbar"


function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="heroHeading">
        <h1>React IronBeers</h1>
      </div> 
        <Routes>
          <Route path='/' element={< HomePage/>} />
          <Route path='/beers' element={< AllBeersPage/>} />
          <Route path='/random-beer' element={< RandomBeerPage/>} />
          <Route path='/new-beer' element={< AddBeerPage/>} />
          <Route path='/beers/:beerId' element={< BeerDetailsPage/>} />
          <Route path="*" element={<h2>404 Page</h2>} />
        </Routes>
          
        
    </div>
  );
}

export default App;
