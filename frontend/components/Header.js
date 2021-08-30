import Link from 'next/link'
import styled from 'styled-components'
import Nav from './Nav'
import Cart from './Cart'
import { useState } from 'react'
import { useCart } from '../lib/cartState'
import Search from './Search'

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
    }
    .subnav {
        p {
            margin-left: 1rem;
        }
    }
`
const MenuLabel = styled.label`

    @media (max-width: 425px) {
        background-color: #b6edc8;
        position: fixed;
        top: 1.5rem;
        right: 1.5rem;
        border-radius: 50%;
        height: 7rem;
        width: 7rem;
        cursor: pointer;
        z-index: 9;
        box-shadow: 0 1rem 3rem rgba(182, 237, 200, 0.3);
        text-align: center;
    }
    @media (min-width: 768px) {
        display: none;
    }
`
const Icon = styled.span`
    @media (max-width: 425px) {
        position: relative;
        background-color: ${(props) =>
            props.clicked ? 'transparent' : 'black'};
        width: 3rem;
        height: 2px;
        display: inline-block;
        margin-top: 3.5rem;
        transition: all 0.3s;
        &::before,
        &::after {
            content: '';
            background-color: black;
            width: 3rem;
            height: 2px;
            display: inline-block;
            position: absolute;
            left: 0;
            transition: all 0.3s;
        }
        &::before {
            top: ${(props) => (props.clicked ? '0' : '-0.8rem')};
            transform: ${(props) =>
                props.clicked ? 'rotate(135deg)' : 'rotate(0)'};
        }
        &::after {
            top: ${(props) => (props.clicked ? '0' : '0.8rem')};
            transform: ${(props) =>
                props.clicked ? 'rotate(-135deg)' : 'rotate(0)'};
        }
    }
`
export default function Header() {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => setIsOpen(!isOpen)
    const { cartOpen, toggleCart } = useCart()
    return (
        <StyledHeader open={isOpen}>
            <div className='navbar'>
                <Logo>
                    <Link href='/'>SELL STUFF</Link>
                </Logo>
                <Nav />
            </div>
            <div className='subnav'>
                <Search></Search>
            </div>
            {!cartOpen && (
                 <MenuLabel onClick={toggle}>
                <Icon clicked={isOpen}>&nbsp;</Icon>
            </MenuLabel>
            )}
            
            <Cart />
        </StyledHeader>
    )
}
