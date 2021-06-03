import { useMutation } from '@apollo/client'
import gql from 'graphql-tag'
import styled from 'styled-components'
import { CURRENT_USER_QUERY } from './User'

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
          /* refetchQueries: [{ query: CURRENT_USER_QUERY }], */
           update: evict,
        }
    )
    return (
        <RemoveButtonStyle
            onClick={removeFromCart}
            disabled={loading}
            type='button'
        >
            X
        </RemoveButtonStyle>
    )
}
