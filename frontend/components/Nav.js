import Link from 'next/link'
import styled from 'styled-components'
import { useCart } from '../lib/cartState'
import CartCount from './CartCount'
import SingOut from './SignOut'
import { useUser } from './User'

const NavStyle = styled.ul`
    display: flex;
    justify-self: end;
    margin: 0;
    padding: 0;
    font-size: 2rem;
    a,
    button {
        display: flex;
        align-items: center;
        position: relative;
        background: none;
        text-transform: uppercase;
        padding: 1rem 3rem;
        font-weight: 900;
        font-size: 1em;
        border: 0;
        cursor: pointer;
        color: rgb(9, 0, 124);
        padding: 1rem 3rem;
        @media (max-width: 1000px) {
            font-size: 15px;
            padding: 0 10px;
        }
    }

    @media (max-width: 1300px) {
        width: 100%;
        justify-content: center;
        font-size: 1.5rem;
    }
`
export default function Nav() {
    const user = useUser()
    const {toggleCart} = useCart()
    
    return (
        <NavStyle>
            <Link href='/products'>Products</Link>
            {user && (
                <>
                    <Link href='/sell '>Sell</Link>
                    <Link href='/orders'>Orders</Link>
                    <Link href='/account '>Account</Link>
                    <SingOut />
                    <button onClick={toggleCart}>My cart
                        <CartCount count={user.cart.reduce((tally, cartItem) => 
                        tally + cartItem.quantity, 0 )}></CartCount></button>
                </>
            )}
            {!user && <Link href='/signin'>Singin</Link>}
        </NavStyle>
    )
}
