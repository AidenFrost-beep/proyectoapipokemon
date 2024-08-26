import React from 'react'
import { useState } from "react";
import { useFetch } from "../useFetch";
import { Form } from '../components/Form';
import { Card } from '../components/Card';

export const Home = () => {
  const [start, setStart] = useState('');
  const [end, setEnd] = useState('');
  const [range, setRange] = useState({ start: null, end: null });

  const { data, loading, error } = useFetch(range.start, range.end);

  const handleSubmit = (e) => {
    e.preventDefault();
    const startNum = parseInt(start, 10);
    const endNum = parseInt(end, 10);

    if (startNum && endNum && startNum <= endNum) {
      setRange({ start: startNum, end: endNum });
    } else {
      alert("Por favor, ingrese un rango válido.");
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <Form
          start={start}
          end={end}
          setStart={setStart}
          setEnd={setEnd}
          handleSubmit={handleSubmit}
        />
      </header>
      <div className="container pt-4">
      {loading && <p>Cargando...</p>}
        <div className="row justify-content-center">
          {data.map((pokemon, index) => (
            <Card key={index} pokemon={pokemon} />
          ))}
        </div>
      </div>
    </div>
  );
}
