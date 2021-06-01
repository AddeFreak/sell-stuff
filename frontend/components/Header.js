import Link from 'next/link'
import styled from 'styled-components'
import Nav from './Nav'
import Cart from './Cart'

const Logo = styled.h1`
    margin-left: 2rem;
    position: relative;
    background: pink;
    padding: 1rem;
    a {
        text-decoration: none;
        padding: 1rem;
    }
`
const StyledHeader = styled.header`
    .navbar {
        display: grid;
        grid-template-columns: auto 1fr;
        justify-content: space-between;
        align-items: center;
        border-bottom: 4px solid black;
    }
    .subnav {
        display: grid;
        grid-template-columns: auto 1fr;
        border-bottom: 1px solid black;
        p {
            margin-left: 1rem;
        }
    }
`

export default function Header() {
    return (
        <StyledHeader>
            <div className='navbar'>
                <Logo>
                    <Link href='/'>SELL STUFF</Link>
          </Logo>
          <Nav />
            </div>
            <div className='subnav'>
                <p>Search</p>
            </div>
           <Cart/>
        </StyledHeader>
    )
}
