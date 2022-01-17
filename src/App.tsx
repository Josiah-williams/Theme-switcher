import React from 'react';
import logo from './logo.svg';
import './App.css';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import ThemeSelector from './ThemeSelector';
import { Provider, useSelector } from 'react-redux';

import { darkTheme, lightTheme, partyTheme} from './themes';

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props: any) => props.theme.backgroundColor};
  }
`;
const SytledH1 = styled.h1`
  color: ${(props: any) => props.theme.primary};
`;
function App() {
  const theme = useSelector((state: any) => state.theme);
  return (
    <ThemeProvider theme={theme}>
    <div className="App">
       <GlobalStyle/>
      <header className="App-header">
      <SytledH1>React Themes Demo</SytledH1>
      <ThemeSelector></ThemeSelector>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
   </ThemeProvider>
  );

}

export default App;
