import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1>FutureTube</h1>
        < input type="search" placeholder="Search" />      
      </header>
      <main>
        <nav>
          <ul>
            <li>Início</li>
            <li>Em alta</li>
            <li>Inscrições</li>
            <li>Biblioteca</li>
            <li>Histórico</li>
          </ul>
        </nav>
        <section>
         <article> <img src= {require("./thumb1.png")} /> <p> Video 1 </p> </article>
         <article> <img src= {require("./thumb2.png")} /> <p> Video 2 </p> </article>
         <article> <img src= {require("./thumb3.png")} /> <p> Video 3 </p> </article>
         <article> <img src= {require("./thumb4.png")} /> <p> Video 4 </p> </article>
         <article> <img src= {require("./thumb5.png")} /> <p> Video 5 </p> </article>
         <article> <img src= {require("./thumb6.png")} /> <p> Video 6 </p> </article>
         <article> <img src= {require("./thumb7.png")} /> <p> Video 7 </p> </article>
         <article> <img src= {require("./thumb8.png")} /> <p> Video 8 </p> </article>      
        </section>
      </main>
      <footer>
        © 2019 FutureTube Inc. | all rights reserved
      </footer>
    </div>
  );
}

export default App;
