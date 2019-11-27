import React from 'react';
import logo from './logo.svg';
import BigCard from './componentes/BigCard/BigCard.js';
import SmallCard from './componentes/SmallCard/SmallCard.js';
import ImageButton from './componentes/ImageButton/ImageButton.js';
import PageSection from './componentes/PageSection/PageSection.js';
import Mentoria from './componentes/Mentoria/Mentoria.js';
import './App.css';

function App() {
  return (
    <div className="App">
    	<PageSection titulo="Dados Pessoais">
			<BigCard titulo="Mateus Gesualdo" imagem={require('./imagens/foto.png')} texto="Sou aluno da Future4" /> 
			<SmallCard legenda="Email: " imagem={require('./imagens/icone-email.png')} valor="mateusgcs99@gmail.com"  />     
			<SmallCard legenda="Endereço: " imagem={require('./imagens/icone-endereco.png')} valor="BH , MG , Brasil"  />     
			<ImageButton imagem={require('./imagens/mais.png')} valor="Ver mais"/>
		</PageSection>
		<PageSection titulo="Minhas Redes Sociais">
			<ImageButton imagem={require('./imagens/icone-linkedin.png')} valor="LinkedIn"/>
			<ImageButton imagem={require('./imagens/icone-instagram.png')} valor="Instagram"/>
			<ImageButton imagem={require('./imagens/icone-facebook.png')} valor="Facebook"/>
		</PageSection>
		<PageSection titulo="Minhas Ferramentas">
			<ImageButton imagem={require('./imagens/icone-github.png')} valor="GitHub"/>
			<ImageButton imagem={require('./imagens/icone-react.png')} valor="React JS"/>
		</PageSection>
		<PageSection titulo="Área de Mentoria">
			<Mentoria />
		</PageSection>
    </div>
  );
}

export default App;
