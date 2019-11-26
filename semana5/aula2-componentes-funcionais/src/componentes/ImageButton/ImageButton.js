import React from 'react';
import './ImageButton.css';

function ImageButton(props) {
  return (
    <div className="ImageButton">
     	<img className="ImageButton" src={props.imagem} alt="indisponível" />
     	<span>{props.valor}</span>
    </div>
  )
}

export default ImageButton;
