import React from 'react'

export const Card = ({ pokemon }) => {
  return (
    <div className="col-md-5 card m-2 p-0">
      <div className='row g-0'>
      <div className="col-md-4">
      <img src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/persian.png" alt="Chikorita"/>
        </div>
        <div className="col-md-8 card-body">
          <h4 className='card-title text-capitalize'>{pokemon.name}</h4>
          <h6 className='mt-2'>Medidas(?) de Pokémon:</h6>
            <div>Altura: {pokemon.height}</div>
            <div>Peso: {pokemon.weight}</div>
          <h6 className='mt-2'>Tipo de Pokémon:</h6>          
            {pokemon.types.map((typeInfo, typeIndex) => (
              <div key={typeIndex}>- {typeInfo.type.name}</div>
            ))}
          <h6 className='mt-2'>Habilidades:</h6>          
          {pokemon.abilities.map((abInfo, abIndex) => (
            <div key={abIndex}>- {abInfo.ability.name}</div>
          ))}
        </div>
        
      </div>
    </div>
  );
}