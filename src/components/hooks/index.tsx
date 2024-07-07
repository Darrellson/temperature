import { useState } from "react";

const useTemperature = () => {
  const [temperature, setTemperature] = useState(0);

  const increaseTemperature = () => {
    setTemperature((prevTemp) => prevTemp + 1);
  };

  const decreaseTemperature = () => {
    setTemperature((prevTemp) => prevTemp - 1);
  };

  return {
    temperature,
    increaseTemperature,
    decreaseTemperature,
  };
};

export default useTemperature;
