import './App.css';
import { Clock } from './components/Clock';
import { ItemHandler } from './components/ItemHandler';
import { ShyBall } from './components/ShyBall';

function App() {
  return (
    <div className="App">
      <div className='clock-item-handler-container'>
        <Clock />
        <ItemHandler />
      </div>
      <ShyBall />
    </div>
  );
}

export default App;
