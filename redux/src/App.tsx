import React from 'react';
import { Provider } from 'react-redux';
import {createStore} from 'redux'
import './App.css';
import Quantidade from './Quantidade';

interface Store {
  quantidade: number
}

const estadoInicial: Store = {
  quantidade: 0
}

function reducer(state = estadoInicial, action: any) {
  switch(action.type) {
    case 'AUMENTA_VALOR':
      return {
        quantidade: state.quantidade + 1
      };
    case 'DIMINUI_VALOR':
      return {
        quantidade: state.quantidade > 0 ? state.quantidade - 1 : state.quantidade
      };
    default:
      return state
  }
}

const store = createStore(reducer)

function App() {
  return (
    <Provider store={store}>
      <Quantidade/>
    </Provider>
  );
}

export default App;
