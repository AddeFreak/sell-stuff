import { useMutation } from '@apollo/client'
import gql from 'graphql-tag'
import styled from 'styled-components'


const REMOVE_FROM_CART_MUTATION = gql`
    mutation REMOVE_FROM_CART_MUTATION($id: ID!) {
        deleteCartItem(id: $id) {
            id
        }
    }
`
const RemoveButtonStyle = styled.button`
    background-color: white;
    background: none;
    border: 0;
    &:hover {
        cursor: pointer;
    }
`
function evict(cache, payload) {
  cache.evict(cache.identify(payload.data.deleteCartItem))
}
export default function RemoveFromCart({ id }) {
    const [removeFromCart, { loading }] = useMutation(
        REMOVE_FROM_CART_MUTATION,
        {
            variables: { id },
           update: evict,
        }
    )
    return (
        <RemoveButtonStyle
            onClick={removeFromCart}
            disabled={loading}
            type='button'
            title='Remove This Item from Cart'
        >
            X
        </RemoveButtonStyle>
    )
}
