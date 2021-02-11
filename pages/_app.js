import { createGlobalStyle, ThemeProvider } from 'styled-components'
import db from '../db.json'
import Head from 'next/head'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    display:flex;
    flex-direction:column;
    font-family: 'sans-serif';
    color: ${({theme}) => theme.colors.contrastText};
  }
  html, body {
    min-height:100vh;
  }
  #__next {
    flex: 1;
    display: flex;
    flex-direction:column;
  }
`
const theme = db.theme;

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Quiz Anime Bleach #AluraQuiz</title>
        <link rel="icon" type="image/png" href="https://img.pngio.com/kon-png-13-png-image-kon-png-997_946.png" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300&display=swap" rel="stylesheet" />
      </Head>
      
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
