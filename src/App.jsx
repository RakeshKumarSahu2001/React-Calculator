import React, { useState } from 'react';
import Display from './Components/Display.jsx';
import Button from './Components/Button.jsx';
import "bootstrap/dist/css/bootstrap.min.css";
import "../src/App.css";

function App() {
  const btns = { r1: ["AC", "%", "del", "/"], r2: ["7", "8", "9", "*"], r3: ["4", "5", "6", "-"], r4: ["1", "2", "3", "+"], r5: ["00", "0", ".", "="] };
  const [displayVal, setDisplayVal] = useState("");
  const [controller, setController] = useState(true);

  const onBtnClick = (val) => {
    if (val === "AC") {
      setDisplayVal("");
    } else if (val === "del") {
      let splitedValues = displayVal.split("");
      splitedValues.splice(splitedValues.length - 1, 1);
      splitedValues = splitedValues.join("");
      setDisplayVal(splitedValues);
    } else if (val === "=") {
      try {
        const result = eval(displayVal); 
        setDisplayVal(result.toString());
        console.log("calculated value :", result);
      } catch (error) {
        setDisplayVal("Error");
      }
    } else {
      setDisplayVal(displayVal + val);
    }
  };


  const handleController = () => {
    setController((prev) => !prev);
  };


  const handleKeyDown = (event) => {
    // console.log(event)
    if (controller === false) {
      if (event.key === "Delete") {
        setDisplayVal("");
      } else if (event.key === "Backspace") {
        let splitedValues = displayVal.split("");
        splitedValues.splice(splitedValues.length - 1, 1);
        splitedValues = splitedValues.join("");
        setDisplayVal(splitedValues);
      } else if (event.key === "Enter") {
        try {
          const result = eval(displayVal);
          setDisplayVal(result.toString());
          console.log("calculated value :", result);
        } catch (error) {
          setDisplayVal("Error");
        }
      } else {
        setDisplayVal(displayVal + event.key);
      }
    }
  }



  return (
    <div className='calculator-box'>
      <Display displayVal={displayVal} handleKeyDown={handleKeyDown} read={controller} handleController={handleController} />

      {
        controller? <div className=''>
        {
          Object.values(btns).map((row, index) => (
            <div key={index} className="row-style">
              {
                row.map((val, i) => (
                  <Button btn={val} key={i} onBtnClick={() => onBtnClick(val)} />
                ))
              }
            </div>
          ))
        }
      </div> : <div>
        <h1 className='fs-3 display-4'>Now u can use your system's key to use this calculator use delete key to erase the data from the input.</h1>
      </div>
      }
     
    </div>
  );
}

export default App;
