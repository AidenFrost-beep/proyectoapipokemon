import { useState } from "react";
import { useFetch } from "./useFetch";
import './App.css';

function App() {
  const [start, setStart] = useState('');
  const [end, setEnd] = useState('');
  const [range, setRange] = useState({ start: null, end: null });

  const { data, loading, error } = useFetch(range.start, range.end);

  const handleSubmit = (e) => {
    e.preventDefault();
    //transforma los valores en integer
    const startNum = parseInt(start, 10);
    const endNum = parseInt(end, 10);
    //
    if (startNum && endNum && startNum <= endNum) {
      setRange({ start: startNum, end: endNum });
    } else {
      alert("Por favor, ingrese un rango válido.");
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={handleSubmit}>
          <input
            type="number"
            placeholder="Inicio"
            value={start}
            onChange={(e) => setStart(e.target.value)}
          />
          <input
            type="number"
            placeholder="Fin"
            value={end}
            onChange={(e) => setEnd(e.target.value)}
          />
          <button type="submit">Obtener Pokémon</button>
        </form>

        {loading && <p>Cargando...</p>}
        
        <ul>
          {data.map((pokemon, index) => (
            <li key={index}>
              <h3>Nombre del Pokémon: {pokemon.name}</h3>
              <p>Tipo de Pokémon:</p>
              <ul>
                {pokemon.types.map((typeInfo, typeIndex) => (
                  <li key={typeIndex}>{typeInfo.type.name}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;