import { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header';

function App() {
  // State variables for holding date and time
  const [date, setDate] = useState(new Date());

  // Update date every second
  useEffect(() => {
    const intervalID = setInterval(() => {
      setDate(new Date());
    }, 1000);

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(intervalID);
  }, []); // Empty dependency array ensures the effect runs only once

  return (
    <body>
      <Header />
      <h1>Primeiro Projeto React no SENAI</h1>
      <div style={{margin: "auto", width: "50%", textAlign: "center", paddingTop: "100px"}} id="divTime">
        <h1>React no navegador usando o transpilador Babel</h1>
        <br />
        <h2>Data Atual: {date.getDate()} / {date.getMonth() + 1} / {date.getFullYear()}</h2>
        <h2>Data Atual: {date.toLocaleDateString()}</h2>
        <h2>Horário Atual: {date.toLocaleTimeString()}</h2>
        <h2>Cronômetro em segundos: {60 - date.getSeconds()}</h2>
      </div>
    </body>
  );
}

export default App;
