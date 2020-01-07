import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createGlobalStyle } from "styled-components";
import App from "./containers/App";
import { createStore } from "redux";
import rootReducer from "./reducers";

const GlobalStyle = createGlobalStyle`
  .App {
    background-color: #282c34;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
    text-align: center;
  }

  input, button {
    border-radius:20px;
    text-align:center;  
  }

  ul {   
    padding-inline-start:0;   
    list-style-type:none; 
  }
  section input{
    width:240px;
  }

  section button{
    width:60px;
  }

  li {
    width:300px;   
    background-color:khaki;
    border-bottom: 1px solid black;
    color:black;
    text-align:left;
    padding:0.2em;
  }

  li button {
    background-color:khaki;
    color:red
  }
`;

const store = createStore(rootReducer);

render(
  <Provider store={store}>
    <GlobalStyle />
    <App />
  </Provider>,
  document.getElementById("root")
);
