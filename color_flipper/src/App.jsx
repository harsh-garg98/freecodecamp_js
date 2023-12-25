import { useState } from "react";
import "./App.css";

function App() {
  const [randomiser, setRandomiser] = useState("Simple");
  const color = ["green", "red", "rgb(133,122,200)", "#f15025"];
  const hexElements = "0123456789abcdef";

  const changeColor = () => {
    const randomNumber = Math.floor(Math.random() * 4);
    const selectedColor = color[randomNumber];
    document.body.style.backgroundColor = selectedColor;
    document.querySelector(".color").textContent = selectedColor;
    console.log(randomiser);
  };

  const randomColor = () => {
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
      hexColor += hexElements[Math.floor(Math.random() * hexElements.length)];
    }
    document.body.style.backgroundColor = hexColor;
    document.querySelector(".color").textContent = hexColor;
    console.log(randomiser);
  };

  const colorChanger = () => {
    if (randomiser === "Simple") {
      changeColor();
    } else {
      randomColor();
    }
  };

  return (
    <div className="nav">
      <nav>
        <div className="nav-center">
          <div className="header wrapper">
            <h4>Color Flipper</h4>
          </div>
          <div className="nav-links wrapper">
            <a href="#" onClick={() => setRandomiser("Simple")}>
              Simple
            </a>
            <a href="#" onClick={() => setRandomiser("Hex")}>
              Hex
            </a>
          </div>
        </div>
      </nav>
      <main>
        <div className="container">
          <div>
            <h2>
              Background Color: <span className="color"></span>
            </h2>
          </div>
        </div>
        <button className="btn btn-hero" id="btn" onClick={colorChanger}>
          Click me
        </button>
      </main>
    </div>
  );
}

export default App;
