import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Button  from './Components/Button';
import List from './Components/List'
import Create from './Components/Create';
import Toggle from './Toggle/Toggle';

function App() {
  return (
    <div className="App">
      <Toggle />
    </div>
  );
}

export default App;
