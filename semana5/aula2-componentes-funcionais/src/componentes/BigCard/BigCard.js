import React from 'react';
import './BigCard.css';

function BigCard(props) {
  return (
    <div className="BigCard">
      <h3><strong>{props.titulo}</strong></h3>
      <img className="BigCard" src={props.imagem} alt="indisponível" />
      <blockquote>{props.texto}</blockquote>
    </div>
  )
}

export default BigCard;
