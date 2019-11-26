import React from 'react';
import './Mentoria.css';

function Mentoria(props) {
  return (
    <div className="Mentoria">
    	<input type="text" placeholder="login" />
     	<input type="text" placeholder="senha" />
     	<button>Cadastrar</button>
     	<button>Entrar</button>
    </div>
  )
}

export default Mentoria;
