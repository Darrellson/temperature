import './components/styles/index/index.css';
import TemperatureDisplay from './components/loading/TemperatureDisplay';
import TemperatureButtons from './components/buttons/TemperatureButtons';
import useTemperature from './components/hooks/index';

const App: React.FC = () => {
  const { temperature, increaseTemperature, decreaseTemperature } = useTemperature();

  return (
    <div className="app">
      <div className="temperature-box">
        <TemperatureDisplay temperature={temperature} />
        <TemperatureButtons onIncrease={increaseTemperature} onDecrease={decreaseTemperature} />
      </div>
    </div>
  );
};

export default App;