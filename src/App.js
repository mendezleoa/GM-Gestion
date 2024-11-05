import './App.css';
import Componente from './componente.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='border-4 border-green-500/100'>
          <Componente numero={1} />
          <Componente numero={2} />
        </div>
      </header>
    </div>
  );
}

export default App;
