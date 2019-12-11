import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
    display:flex;
    justify-content: space-between
` 
  
export default class Usuarios extends React.Component {
    constructor(props){
        super(props)
        this.state = {email:''}
    }
     
    render(){
        return(
            <div>
    
                <h2>Usuários Cadastrados:</h2>
    
                {
                    this.props.cadastros.map(
                        cadastro => (
                                                           
                            <Div key={cadastro.id} >

                                {cadastro.name}

                                <button 
                                    id={cadastro.id} 
                                    onClick={ev => {this.props.apagar(ev.target.id)} }
                                >
                                    x
                                </button>

                            </Div>
                           
                        )
                    )
                }
            </div>
        )
    }
    
}// && this.mostrarEmail(cadastro.id)