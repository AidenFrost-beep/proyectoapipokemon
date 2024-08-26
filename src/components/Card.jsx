import React from 'react'

export const Card = ({ pokemon }) => {
  return (
    <div className="col-md-5 card m-2 p-0">
      <div className='row g-0'>
        <div className="col-md">
          <img className='img-fluid' width="100%" src={`https://img.pokemondb.net/sprites/black-white/normal/${pokemon.name}.png`} alt={pokemon.name}/>        
        </div>
        <div className="col-md-8 card-body">
          <h4 className='card-title text-capitalize'>{pokemon.name}</h4>
          <div>Altura: {pokemon.height} Peso: {pokemon.weight}</div>
          <div className='row'>
            <div className='col-6'> 
              <h6 className='mt-2'>Tipo:</h6>          
                {pokemon.types.map((typeInfo, typeIndex) => (
                  <div key={typeIndex}>- {typeInfo.type.name}</div>
                ))}
              </div> 
            <div className='col-6'>
              <h6 className='mt-2'>Habilidades:</h6>          
              {pokemon.abilities.map((abInfo, abIndex) => (
                <div key={abIndex}>- {abInfo.ability.name}</div>
              ))}
            </div> 
          </div>
        </div>
        
      </div>
    </div>
  );
}