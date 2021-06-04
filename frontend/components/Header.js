import Link from 'next/link'
import styled from 'styled-components'
import Nav from './Nav'
import Cart from './Cart'
import { useState } from 'react'

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
    @media (max-width: 425px) {
        ul {
            transform: translateX(-100%);
            position: fixed;
            box-shadow: 0 0 10px 3px rgba(0, 0, 0, 0.2);
            height: 100%;
            z-index: 5;
            width: 40%;
            background: white;
            top: 0;
            left: 0;
            display: grid;
            ${(props) => props.open && `transform: translateX(0);`};
        }
        .cartlist {
            transform: translateX(50%);
        }
        .hamburger {
            right: 2rem;
            top: 2.5rem;
            /* transform: translate(-50%, -50%); */
            position: absolute;
            width: 50px;
        }
        .hamburger:before,
        .hamburger:after,
        .hamburger div {
            background: rgb(9, 0, 124);
            content: '';
            display: block;
            height: 6px;
            border-radius: 3px;
            margin: 7px 0;
            transition: 0.5s;
        }
         .hamburger:hover:before {
            transform: translateY(12px) rotate(135deg);
        }
        .hamburger:hover:after {
            transform: translateY(-12px) rotate(-135deg);
        }
        .hamburger:hover div {
            transform: scale(0);
        } 
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
   const [isOpen, setIsOpen] = useState(false)
   const toggle = () => setIsOpen(!isOpen)
    
    return (
        <StyledHeader open={isOpen}>
            <div className='navbar'>
                <Logo>
                    <Link href='/'>SELL STUFF</Link>
                </Logo>
                <Nav />
            </div>
            <div onClick={toggle} className='hamburger'>
                <div onClick={toggle}></div>
            </div>
            <div className='subnav'>
                <p></p>
            </div>
            <Cart />
        </StyledHeader>
    )
}
