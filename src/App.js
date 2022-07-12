import React from "react";

const App = () => {
  return (
    <div className="app-container">
      <div className="temperature-display-container">
        <div className="temperature-display">10°C </div>
      </div>
      <div className="button-container"></div>
      <button>+</button>
      <button>-</button>
    </div>
  );
};

export default App;
