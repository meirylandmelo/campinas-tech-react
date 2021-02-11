import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import { store } from './store'
import ToDo from './Todo';
import Users from './User'

function App() {
  return (
    <div className="App">
     <Provider store={store}>
      <ToDo />
      <Users />
     </Provider>
    </div>
  );
}

export default App;
