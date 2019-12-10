import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
    display:flex;
    justify-content: space-between
`

export default function Usuarios(props){
    return(
        <div>

            <h2>Usuários Cadastrados:</h2>

            {
                props.cadastros.map(
                    cadastro => (
                        <Div key={cadastro.id} id={cadastro.id} >
                            {cadastro.name}
                            <button onClick={ev => {props.apagar(ev.target.parentNode.id)} }>x</button>
                        </Div>
                    )
                )
            }
        </div>
    )
}