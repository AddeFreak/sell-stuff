import styled, { createGlobalStyle } from 'styled-components'
import Header from './Header'
import PropTypes from 'prop-types'

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
    font-family: monospace,'Courier New', Courier, --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
*, *:before, *:after {
  box-sizing: inherit;
}
a {
    text-decoration: none;
    color: rgb(9,0,124)
   }
   button {font-family: monospace,'Courier New', Courier, --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;}
`
const PageStyle = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    padding: 2rem;
`
export default function Page({ children }) {
    return (
        <div>
            <GlobalStyles />
            <Header />
            <PageStyle>{children}</PageStyle>
        </div>
    )
}

Page.propTypes = {
    children: PropTypes.any,
}