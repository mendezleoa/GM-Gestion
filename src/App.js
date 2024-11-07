import './App.css';
import Componente from './componente.js';

function App() {
  const presupuesto = [{
    id_: 1,
    precio: 45,
    materiales: "Mesa Roble, Pintura Aceite, Otros",
    manoObra: 23,
    ganancia: 20
  }, {
    id_: 2,
    precio: 40,
    materiales: "Mesa Blanca, Pintura Aerosol, Otros",
    manoObra: 20,
    ganancia: 20
  }]
  return (
    <div className="App">
      <header className="App-header bg-slate-800 text-slate-300">
        <div className='m-2'>
          {presupuesto.map((datospres) => (
            <Componente key={datospres.id_} presupuesto={datospres} />
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;
