import styled, { createGlobalStyle } from 'styled-components'
import Header from './Header'

const GlobalStyles = createGlobalStyle`
body {
   
    width: 100%;
padding: 0;
margin: 0;
font-size: 1.5rem;
font-family: monospace, Courier, ;
}
html {
    
  box-sizing: border-box;
  font-size: 10px;
  font-family: monospace,'Courier New', Courier;
}
*, *:before, *:after {
  box-sizing: inherit;
}
a {
    text-decoration: none;
    color: rgb(9,0,124)
   }
   button {font-family: monospace,'Courier New', Courier;}
`
const PageStyle = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    padding: 2rem;
`
export default function Pages({ children }) {
    return (
        <div>
            <GlobalStyles />
            <Header />
            <PageStyle>{children}</PageStyle>
        </div>
    )
}
