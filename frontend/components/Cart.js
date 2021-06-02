import styled from "styled-components"
import { useCart } from "../lib/cartState"
import CartItem from "./CartItem" 
import { useUser } from "./User"

const CartStyle = styled.div`
    transform: translateX(100%);
    transition: all 0.3s;
    position: fixed;
    height: 100%;
    z-index: 5;
    width: 40%;
    position: relative;
    background: white;
    position: fixed;
    height: 100%;
    top: 0;
    right: 0;
    min-width: 500px;
    box-shadow: 0 0 10px 3px rgba(0, 0, 0, 0.2);
    display: grid;
    grid-template-rows: auto 1fr;
    button {
        display: flex;
    }
    ${(props) => props.open && `transform: translateX(0);`};
    ul {
        list-style: none;
        overflow: scroll;
    }
`
const CartNameStyle = styled.h3`
    background-color: rgb(9, 0, 124);
    color: white;
    padding: 2rem;
    margin: 1rem;
    display: inline-block;
    font-size: 3rem;
    font-weight: 400;
`
export default function Cart() {
  const cartStuff = useUser()
  const {cartOpen, toggleCart} = useCart()
  if (!cartStuff) return null
  console.log(cartStuff)
  return (
      <CartStyle open={cartOpen} >
      <CartNameStyle>{cartStuff.name}'s Cart
      <button onClick={toggleCart}>X</button>
      </CartNameStyle>
      
          <ul>
             {cartStuff.cart.map((cartItem) => 
                  <CartItem key={cartItem.id} cartItem={cartItem} />
              )} 
          </ul>
      </CartStyle>
  )
} 