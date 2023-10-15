import './App.css';
import Home from './Home';
import Grid from './Grid';
import R1 from './R1';
import { Routes, Route } from 'react-router-dom';
import R2 from './R2';
import R3 from './R3';
import R4 from './R4';
import R5 from './R5';
import R6 from './R6';
import Tc from './Tc';
import Landing from './Landing';

function App() {
  return (
    <div className="App">
        <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/homeee" element={<Home/>}/>
        <Route path = "tc" element={<Tc/>}/>
        <Route path="bdbd" element={<R1/>}/>
        <Route path="griddd" element={<Grid />}/>
        <Route path="slpslpslp" element={<R2 />}/>
        <Route path = "emememmeo" element={<R3/>}/>
        <Route path = "dcjc" element={<R4/>}/>
        <Route path = "spbbt" element={<R5/>}/>
        <Route path = "sqrmwrmd" element={<R6/>}/>
      </Routes>
    </div>
  );
}

export default App;
