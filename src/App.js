import { useState } from 'react';
import './App.css';
import AllGuns from './components/AllGuns/AllGuns';
import Navbar from './components/Navbar/Navbar';

function App() {
  const [count, setCount] = useState(0);
  const countIncrease = () => {
    setCount(count + 1);
  }
  return (
    <div>
      <Navbar count={count}></Navbar>
      <AllGuns countIncrease={countIncrease}></AllGuns>
    </div>
  )
}

export default App;
