import React, { useState } from "react";

const App = () => {
  const [temperatureValue, setTemperatureValue] = useState(10);
  const [temperatureColor, setTemperatureColor] = useState;
  return (
    <div className="app-container">
      <div className="temperature-display-container">
        <div className="temperature-display">{temperatureValue}°C </div>
      </div>
      <div className="button-container"></div>
      <button onClick={() => setTemperatureValue(temperatureValue + 1)}>
        +
      </button>
      <button onClick={() => setTemperatureValue(temperatureValue - 1)}>
        -
      </button>
    </div>
  );
};

export default App;
