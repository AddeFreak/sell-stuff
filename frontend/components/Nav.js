import Link from 'next/link';
import styled from 'styled-components';

const NavStyle = styled.ul`
    display: flex;
    justify-self: end;
    margin: 0;
    padding: 0;
    font-size: 2rem;
    a {
        display: flex;
        align-items: center;
        position: relative;
        background: none;
        text-transform: uppercase;
        padding: 1rem 3rem;
        font-weight: 900;
        font-size: 1em;
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
  return (
      <NavStyle>
          <Link href='/products'>Products</Link>
          <Link href='/sell '>Sell</Link>
          <Link href='/orders'>Orders</Link>
          <Link href='/account '>Account</Link>
      </NavStyle>
  )
}
