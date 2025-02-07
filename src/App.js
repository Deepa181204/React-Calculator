/*import logo from './logo.svg';
import './App.css';
import Signup from './components/SignUp';
import 
{BrowserRouter as Router,Routes,Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
      <nav/>
      <Routes>
        <Route path="/SignUp" element={<Signup/>}/>
      </Routes>
      </Router>
      
    </div>
  );
}
export default App;*/


import React, { useState } from "react";
import "./App.css"; // Optional: you can add your CSS styles here

const App = () => {
  // State to hold the current input and the result
  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);

  // Function to handle button click
  const handleClick = (value) => {
    setInput(input + value);
  };

  // Function to handle the calculation of the expression
  const handleCalculate = () => {
    try {
      // Use JavaScript's eval function to evaluate the input expression
      setResult(eval(input));
    } catch (error) {
      setResult("Error");
    }
  };

  // Function to handle clearing the input and result
  const handleClear = () => {
    setInput("");
    setResult(null);
  };

  // Function to handle the backspace functionality
  const handleBackspace = () => {
    setInput(input.slice(0, -1));
  };

  return (
    <div className="calculator">
       <h1>React Calculator</h1>
      <div className="calculator-display">
        <div className="input">{input || "0"}</div>
        <div className="result">{result !== null ? `= ${result}` : ""}</div>
      </div>
      <div className="calculator-buttons">
        <button onClick={() => handleClick("1")}>1</button>
        <button onClick={() => handleClick("2")}>2</button>
        <button onClick={() => handleClick("3")}>3</button>
        <button onClick={() => handleClick("+")}>+</button>

        <button onClick={() => handleClick("4")}>4</button>
        <button onClick={() => handleClick("5")}>5</button>
        <button onClick={() => handleClick("6")}>6</button>
        <button onClick={() => handleClick("-")}>-</button>

        <button onClick={() => handleClick("7")}>7</button>
        <button onClick={() => handleClick("8")}>8</button>
        <button onClick={() => handleClick("9")}>9</button>
        <button onClick={() => handleClick("*")}>*</button>

        <button onClick={() => handleClick("0")}>0</button>
        <button onClick={handleClear}>C</button>
        <button onClick={handleBackspace}>←</button>
        <button onClick={() => handleClick("/")}>/</button>

        <button onClick={handleCalculate}>=</button>
      </div>
    </div>
  );
};

export default App;
