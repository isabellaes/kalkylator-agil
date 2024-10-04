import "./App.css";

function App() {
  return (
    <div className="main">
      <div className="kalkylator">
        <div className="display"></div>
        <div className="content">
          <div className="numbers">
            <div>
              <button className="number-btn">1</button>
              <button className="number-btn">2</button>
              <button className="number-btn">3</button>
            </div>
            <div>
              <button className="number-btn">4</button>
              <button className="number-btn">5</button>
              <button className="number-btn">6</button>
            </div>
            <div>
              <button className="number-btn">7</button>
              <button className="number-btn">8</button>
              <button className="number-btn">9</button>
            </div>
            <div className="flex-center">
              <button className="number-btn">0</button>
            </div>
          </div>
          <div className="operators">
            <button className="operator-btn">+</button>
            <button className="operator-btn">-</button>
            <button className="operator-btn">*</button>
            <button className="operator-btn">/</button>
            <button className="equal-btn">=</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
