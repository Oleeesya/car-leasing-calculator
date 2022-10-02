import React from 'react';
import './App.css';
import Header from './Header';
import AppContainer from './AppContainer';
import NumberProvider from './NumberProvider';

function App() {
  return (
    <NumberProvider>
      <Header />
      <AppContainer />
    </NumberProvider>
  );
}

export default App;
