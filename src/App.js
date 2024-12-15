import './App.css';
import InteractiveBox from './components/InteractiveBox/InteractiveBox';
import { options } from './components/InteractiveBox/OptionCard';

function App() {

  return (
    <div className="App">
      <InteractiveBox options={options} />
    </div>
  );
}

export default App;
