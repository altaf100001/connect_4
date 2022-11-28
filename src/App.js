// import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [activeIndex, setActiveIndex] = useState(3);

  const [arr, setArr] = useState(new Array(6).fill(new Array(7).fill(0)));

  const onHover = (elId) => {
    console.log(elId);
    setActiveIndex(elId);
  };

  const onAdd = () => {
   
  };

  return (
    <div className="App">
      <div className="container">
        <div className="position_wrapper">
          {arr[0].map((_, idx) => (
            <div
            
              onMouseEnter={() => onHover(idx)}
              onClick={() => onAdd()}
              className={`position_box ${
                idx === activeIndex ? "position_box_active" : ""
              }`}
            >
              <div
                className={`ball_position ${
                  idx === activeIndex ? "ball_position_active" : ""
                }`}
              ></div>
            </div>
          ))}
        </div>

        {arr.map((rows, idx) => (
          <div className="rows">
            {rows.map((box, boxId) => {
              const isBallPresent = box !== 0;

              return (
                <div
                  className={`box ${
                    isBallPresent ? "box_active" : "box_inactive"
                  }`}
                >
                  <div
                    className={`ball ${
                      isBallPresent ? "ball_active" : "ball_inactive"
                    }`}
                  ></div>
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
