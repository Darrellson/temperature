import React from "react";
import "../styles/box/index.css";

type TemperatureDisplayProps = {
  temperature: number;
}

const TemperatureDisplay: React.FC<TemperatureDisplayProps> = ({
  temperature,
}) => {
  const getCircleColor = () => {
    if (temperature > 0) {
      return "#FF6347";
    } else if (temperature < 0) {
      return "#1E90FF";
    } else {
      return "#D3D3D3";
    }
  };

  return (
    <div
      className="temperature-circle"
      style={{ backgroundColor: getCircleColor() }}
    >
      <span className="temperature-value">{temperature}°C</span>
    </div>
  );
};

export default TemperatureDisplay;
