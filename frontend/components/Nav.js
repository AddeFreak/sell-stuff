import Link from 'next/link'
import styled from 'styled-components'
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
        color: rgb(9,0,124)
    }
    @media (max-width: 700px) {
        font-size: 10px;
        padding: 0 10px;
    }
    &:hover,
    &:focus {
        outline: none;
        &:after {
            width: calc(100% - 60px);
        }
        @media (max-width: 700px) {
            width: calc(100% - 10px);
        }
    }
`
export default function Nav() {
    const user = useUser()
    console.log(user)
    return (
        <NavStyle>
            <Link href='/products'>Products</Link>
            {user && (
                <>
                    <Link href='/sell '>Sell</Link>
                    <Link href='/orders'>Orders</Link>
                    <Link href='/account '>Account</Link>
                    <SingOut/>
                </>
            )}
            {!user && (
                <Link href="/signin">Singin</Link>
            )}
        </NavStyle>
    )
}
