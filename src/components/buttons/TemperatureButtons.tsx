import React from "react";
import "../styles/buttons/index.css";

type TemperatureButtonsProps = {
  onIncrease: () => void;
  onDecrease: () => void;
}

const TemperatureButtons: React.FC<TemperatureButtonsProps> = ({
  onIncrease,
  onDecrease,
}) => {
  return (
    <div className="buttons">
      <button onClick={onIncrease}>+</button>
      <button onClick={onDecrease}>-</button>
    </div>
  );
};

export default TemperatureButtons;
