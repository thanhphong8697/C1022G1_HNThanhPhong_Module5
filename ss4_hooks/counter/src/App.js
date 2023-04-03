import logo from './logo.svg';
import './App.css';
import IncreaseCountOne from './Counter1';
import IncreaseCountTwo from './Counter2';

function App() {
  return (
    <div className="container">
      <div>
      <IncreaseCountOne />
      </div>
      <div>
      <IncreaseCountTwo />
      </div>
    </div>
  );
}

export default App;
