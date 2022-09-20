import React from 'react';
import Main from '../components/Main';
import Routes from '../routers/Routes';
import { GlobalStyle } from '../Styles/Style';
import '@babel/polyfill'

const App = () => {
  return (
    <Main>
      <GlobalStyle/>
      <Routes />
    </Main>
  );
};

export default App;
