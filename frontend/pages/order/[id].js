import { useQuery } from '@apollo/client'
import gql from 'graphql-tag'
import styled from 'styled-components'
import ErrorMessage from '../../components/ErrorMessage'
import Head from 'next/head'
import moneyFormat from '../../lib/moneyFormat'

const OrderStyles = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    border: 1px solid rgb(246, 247, 247);
    box-shadow: 0 12px 24px 0 rgba(0, 0, 0, 0.09);
    padding: 2rem;
    border-top: 10px solid #305a72;
    & > p {
        display: grid;
        grid-template-columns: 1fr 5fr;
        margin: 0;
        border-bottom: 1px solid rgb(246, 247, 247);
        span {
            padding: 1rem;
            &:first-child {
                font-weight: 900;
                text-align: right;
            }
        }
    }
    .order-item {
        border-bottom: 1px solid grey;
        display: grid;
        grid-template-columns: 300px 1fr;
        align-items: center;
        grid-gap: 2rem;
        margin: 2rem 0;
        padding-bottom: 2rem;
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
        @media (max-width: 425px) {
            display: inline-block;
            padding: 2rem;

            img {
                width: 50%;
                height: 50%;
                object-fit: cover;
            }
        }
    }
    @media (max-width: 768px) {
        display: inline-block;
        padding: 2rem;
        /* max-width: 300px; */
        img {
            width: 50%;
            height: 50%;
            object-fit: cover;
        }
        span {
            padding: 1rem;
            
            &:first-child {
                font-weight: 100;
                font-size: small;
                text-align: right;
            }
        }
    }
`

const SINGLE_ORDER_QUERY = gql`
 query SINGLE_ORDER_QUERY($id: ID!) {
   order: Order(where: {id : $id}) {
     id
     charge
     total
     user {
       id
     }
     items {
       id
       name
       description
       price
       quantity
       picture {
           image {
           publicUrlTransformed
         }
       }
     }
   }
 }
`
export default function SingleOrderPage({ query }) {
    const { data, error, loading } = useQuery(SINGLE_ORDER_QUERY, {
        variables: { id: query.id },
    })
    if (loading) return <p>Loading...</p>
    if (error) return <ErrorMessage error={error} />
    const { order } = data
  return (
      <OrderStyles>
          <Head>
              <title>Sell Stuff - {order.id}</title>
          </Head>
          <p>
              <span>Order Id:</span>
              <span>{order.id}</span>
          </p>
          <p>
              <span>Charge:</span>
              <span>{order.charge}</span>
          </p>
          <p>
              <span>Order Total:</span>
              <span>{moneyFormat(order.total)}</span>
          </p>
          <p>
              <span>ItemCount:</span>
              <span>{order.items.length}</span>
      </p>
      <div className="items">
        {order.items.map(item => (
          <div className="order-item" key={item.id}>
            <img src={item.picture.image.publicUrlTransformed}
              alt={item.title} />
            <div className="item-details">
              <h2>{item.name}</h2>
              <p>Quantity: {item.quantity}</p>
              <p>Each: {moneyFormat(item.price)}</p>
              <p>Sub Total: {moneyFormat(item.price * item.quantity)}</p>
              <p>{item.description}</p>
            </div>
         </div>
        ))}
      </div>
      </OrderStyles>
  )
}
