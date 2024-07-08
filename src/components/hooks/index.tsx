import { useState } from "react";

/**
 * Custom React hook for managing temperature state.
 * Provides functions to increase and decrease the temperature.
 * @returns {{
 *   temperature: number,
 *   increaseTemperature: () => void,
 *   decreaseTemperature: () => void
 * }}
 */
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
