import styled from "styled-components"
import { useCart } from "../lib/cartState"
import moneyFormat from "../lib/moneyFormat"
import CartItem from "./CartItem" 
import { Checkout } from "./Checkout"
import { useUser } from "./User"

const CartStyle = styled.div`
    position: fixed;
    transform: translateX(100%);
    transition: all 0.3s;
    height: 100%;
    z-index: 5;
    width: 40%;
    background: white;
    top: 0;
    right: 0;
    min-width: 500px;
    box-shadow: 0 0 10px 3px rgba(0, 0, 0, 0.2);
    display: grid;
    grid-template-rows: auto 1fr;
    ${(props) => props.open && `transform: translateX(0);`};
    ul {
        list-style: none;
        overflow: scroll;
        overflow-x: hidden;
    }
    p {
        margin-left: 0.5rem;
    }
    .para {
        margin-left: 3rem;
        font-size: 2.5rem;
    }
    @media (max-width: 425px) {
        min-width: 100vw;

        grid-template-rows: auto 1fr;
        .cartlist {
            position: relative;
            margin-top: 15px;
            min-height: 50vh;
            min-width: 80vw;
            left: -90px;
        }
        ul {
          

            padding: 0;
            
        }
    }
`
const CartNameStyle = styled.h3`
    background-color: rgb(9, 0, 124);
    border-radius: 3px;
    color: white;
    padding: 2rem;
    margin: 1rem;
    display: inline-block;
    font-size: 3rem;
    font-weight: 400;
`
const CloseButtonStyle = styled.button`
    border: none;
    display: inline-block;
    position: absolute;
    background-color: pink;
    border-radius: 3px;
    top: 2rem;
    right: 3rem;
   /*  @media (max-width: 768px) {
        background-color: white;
        position: absolute;
        top: 1.5rem;
        right: 1.5rem;
        border-radius: 50%;
        height: 7rem;
        width: 7rem;
        cursor: pointer;
        z-index: 11;
        box-shadow: 0 1rem 3rem rgba(182, 237, 200, 0.3);
        text-align: center;
    } */
`
function totalPrice(cart) {
    return cart.reduce((tally, cartItem) => {
        if (!cartItem.product) return tally
        return tally + cartItem.quantity * cartItem.product.price
    }, 0)
}
export default function Cart({ cartItem }) {
  const cartStuff = useUser()
  const {cartOpen, toggleCart} = useCart()
  if (!cartStuff) return null
  
  
  return (
      <CartStyle open={cartOpen}>
          <CartNameStyle>
              {cartStuff.name}'s Cart
              
                  <CloseButtonStyle type='button' onClick={toggleCart}>
                      X
                  </CloseButtonStyle>
             
          </CartNameStyle>

          <ul className="cartlist">
              {cartStuff.cart.map((cartItem) => (
                  <CartItem key={cartItem.id} cartItem={cartItem} />
              ))}
          </ul>
      <p className="para"><em>Total {moneyFormat(totalPrice(cartStuff.cart))}</em></p>
      <Checkout/>
      </CartStyle>
  )
} 