import React from 'react';

export const Form = ({ start, end, setStart, setEnd, handleSubmit }) => {
  return (
    <form className="row m-3" onSubmit={handleSubmit}>
      <input
        className="col-md form-control"
        type="number"
        placeholder="Inicio"
        value={start}
        onChange={(e) => setStart(e.target.value)}
      />
      <input
        className="col-md form-control"
        type="number"
        placeholder="Fin"
        value={end}
        onChange={(e) => setEnd(e.target.value)}
      />
      <button className="col-md btn btn-danger" type="submit">Obtener Pokémon</button>
    </form>
  );
}


