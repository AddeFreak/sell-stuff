import styled from "styled-components"
import { useCart } from "../lib/cartState"
import moneyFormat from "../lib/moneyFormat"
import CartItem from "./CartItem" 
import { Checkout } from "./Checkout"
import { useUser } from "./User"

const CartStyle = styled.div`
    transform: translateX(100%);
    transition: all 0.3s;
    position: fixed;
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
const CloseButtonStyle = styled.button`
   border: none;
        display: inline-block;
        position: absolute;
        background-color: pink;
        top: 2rem;
        right: 4rem;
`
function totalPrice(cart) {
    return cart.reduce((tally, cartItem) => {
        if (!cartItem.product) return tally
        return tally + cartItem.quantity * cartItem.product.price
    }, 0)
}
export default function Cart() {
  const cartStuff = useUser()
  const {cartOpen, toggleCart} = useCart()
  if (!cartStuff) return null
  console.log(cartStuff)
  
  return (
      <CartStyle open={cartOpen}>
          <CartNameStyle>
              {cartStuff.name}'s Cart
              <div className='buttisch'>
                  <CloseButtonStyle type='button' onClick={toggleCart}>
                      X
                  </CloseButtonStyle>
              </div>
          </CartNameStyle>

          <ul>
              {cartStuff.cart.map((cartItem) => (
                  <CartItem key={cartItem.id} cartItem={cartItem} />
              ))}
          </ul>
      <p>{moneyFormat(totalPrice(cartStuff.cart))}</p>
      <Checkout/>
      </CartStyle>
  )
} 