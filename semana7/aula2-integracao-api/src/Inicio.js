import React from 'react';

export default class Inicio extends React.Component {
    constructor (props){
        super(props)
        this.state = { novoNome: '' , novoEmail: '' }
    }
    render(){
        return(
            <div>
                <fieldset>

                    <legend>Novo Usuário</legend>

                    {"Nome: "}

                    <input 
                        value={this.state.novoNome} 
                        onChange={
                            ev => this.setState(
                                {novoNome: ev.target.value}
                            )
                        }
                    />

                    <br/>

                    {"Email: "}

                    <input 
                        value={this.state.novoEmail} 
                        onChange={
                            ev => this.setState(
                                {novoEmail: ev.target.value}
                            )
                        }
                    />

                    <br/>

                    <button 
                        onClick={
                            () => this.props.cadastrar( this.state.novoNome, this.state.novoEmail )
                        }
                    >
                        Cadastrar
                    </button>

                </fieldset>
                
            </div>
        )
    }
} 