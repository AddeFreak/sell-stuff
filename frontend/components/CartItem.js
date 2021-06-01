import styled from "styled-components"

const CartItemStyle = styled.li`
    display: grid;
    grid-template-columns: auto 1fr;
    img {
        margin: 1rem;
    }
    
`
export default function CartItem({ cartItem }) {
  return <CartItemStyle>
    <img width="100" src={cartItem.product.picture.image.publicUrlTransformed} alt={cartItem.product.name} className="src" />
    <div>
      <h3>{cartItem.product.name}</h3>
      <p>{cartItem.product.price}</p>
    </div>
  
  </CartItemStyle>
}