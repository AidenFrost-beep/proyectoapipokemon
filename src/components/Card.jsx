import React from 'react'

export const Card = ({ pokemon }) => {
  return (
    <div className="col-md-5 card m-2">
      <h3>Nombre del Pokémon: {pokemon.name}</h3>
      <p>Tipo de Pokémon:</p>
      <ul>
        {pokemon.types.map((typeInfo, typeIndex) => (
          <li key={typeIndex}>{typeInfo.type.name}</li>
        ))}
      </ul>
    </div>
  );
}