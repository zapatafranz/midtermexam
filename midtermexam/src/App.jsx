import { useState } from 'react';
import './App.css';


const things = {
  '1': 'Being On Time',
  '2': 'Making An Effort',
  '3': 'Being High Energy',
  '4': 'Having A Positive Attitude',
  '5': 'Being Passionate',
  '6': 'Using Good Body Language',
  '7': 'Being Coachable',
  '8': 'Doing A Little Extra',
  '9': 'Being Prepared',
  '0': 'Having A Strong Work Ethic',
  NAME: 'FRANCINE ZAPATA',
  SUBJ: 'C-PCIT9',
};


function App() {
  const [display, setDisplay] = useState('10 Things That Require Zero Talent');


  const buttons = [
    '7', '8', '9',
    '4', '5', '6',
    '1', '2', '3',
    'NAME', '0', 'SUBJ',
  ];


  return (
    <div className="App">
      <div className="Calculator">
        <h1 className="Header">FRANCINE ZAPATA - IT3A</h1>


        <div className="CalcDisplay">{display}</div>


        <div className="CalcButtons">
          {buttons.map((key) => (
            <button
              key={key}
              className="CalcButton"
              onClick={() => setDisplay(things[key])}
            >
              {key}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}


export default App;