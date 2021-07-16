import styled from "styled-components"
import moneyFormat from "../lib/moneyFormat"
import RemoveFromCart from "./RemoveFromCart"

const CartItemStyle = styled.li`
    display: grid;
    grid-template-columns: auto 1fr auto;
    padding: 1rem 0;
    border-bottom: 1px solid grey;
    img {
        margin-right: 1rem;
    }
    h3,
    p, em {
        margin: 0;
        padding: 0.5rem;
    }
`

export default function CartItem({ cartItem }) {
  return (
      <CartItemStyle>
          <img
              width='100'
              src={cartItem.product.picture.image.publicUrlTransformed}
              alt={cartItem.product.name}
          />
          <div>
              <h3>{cartItem.product.name}</h3>
              <p>{moneyFormat(cartItem.product.price * cartItem.quantity)}</p>   
               <em>
                  {cartItem.quantity} * {moneyFormat(cartItem.product.price)}
                  </em>   
          </div>
          <RemoveFromCart id={cartItem.id} />
      </CartItemStyle>
  )
}