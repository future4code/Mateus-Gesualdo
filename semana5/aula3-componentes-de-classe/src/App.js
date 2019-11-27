import React from 'react';
import logo from './logo.svg';
import Post from './componentes/Post/Post.js'
import './App.css';

function App() {
  return (
    <div className="App">
      <Post fotoAutor ={require('./imagens/sandy.png')} nomeAutor="Sandy Cheeks" imagemPost={require('./imagens/penguins.jpg')} />
      <Post fotoAutor ={require('./imagens/squidward.png')} nomeAutor="Squidward" imagemPost={require('./imagens/koala.jpg')} />
      <Post fotoAutor ={require('./imagens/gary.png')} nomeAutor="Gary" imagemPost={require('./imagens/jellyfish.jpg')} />
    </div>
  );
}

export default App;
