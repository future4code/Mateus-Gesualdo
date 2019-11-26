import React from 'react';
import './SmallCard.css';

function SmallCard(props) {
  return (
    <div className="SmallCard">
     	<img className="SmallCard" src={props.imagem} alt="indisponível" />
     	<span><strong>{props.legenda}</strong></span>
    	<span>{props.valor}</span>
    </div>
  )
}

export default SmallCard;
