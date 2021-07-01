import { useQuery } from '@apollo/client'
import gql from 'graphql-tag'
import styled from 'styled-components'
import ErrorMessage from '../components/ErrorMessage'
import Head from 'next/head'
import moneyFormat from '../lib/moneyFormat'
import Link from 'next/link'

const OrderUl = styled.ul`
display: grid;
grid-template-columns: repeat(3, 1fr);
grid-gap: 4rem;
`
const OrderItemStyles = styled.li`
    box-shadow: 0 12px 24px 0 rgba(0, 0, 0, 0.09);
    list-style: none;
    padding: 2rem;
    border: 1px solid rgb(246, 247, 247);
    h2 {
        border-bottom: 2px solid red;
        margin-top: 0;
        margin-bottom: 2rem;
        padding-bottom: 2rem;
    }
    .images {
        display: grid;
        grid-gap: 10px;
        grid-template-columns: repeat(auto-fit, minmax(0, 1fr));
        margin-top: 1rem;
        img {
            height: 200px;
            object-fit: cover;
            width: 100%;
        }
    }
    .order-meta {
        display: grid;
        grid-template-rows: repeat(auto-fit, minmax(20px, 1fr));
        display: grid;
        grid-gap: 1rem;
        text-align: center;
        & > * {
            margin: 0;
            background: rgba(0, 0, 0, 0.03);
            padding: 1rem 0;
        }
        strong {
            display: block;
            margin-bottom: 1rem;
        }
    }
`
const USER_ORDERS_QUERY = gql`
    query USER_ORDERS_QUERY {
        allOrders {
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
function countOrderItems(order) {
  return order.items.reduce((tally, item) => tally + item.quantity, 0)
}
export default function OrdersPage() {
    const { data, error, loading } = useQuery(USER_ORDERS_QUERY)
    if (loading) return <p>Loading...</p>
    if (error) return <ErrorMessage error={error} />
    const { allOrders } = data
    return (
        <div>
            <Head>
                <title>Your orders</title>
            </Head>
            <h2>You have {allOrders.length} orders.</h2>
            <OrderUl>
                {allOrders.map((order) => (
                    <OrderItemStyles>
                        <Link href={`/order/${order.id}`}>
                            <a>
                                <div className='order-meta'>
                                    <p>
                                        {countOrderItems(order)} Item
                                        {order.items.length === 1 ? '' : 's'}
                                    </p>
                                    <p>
                                        {order.items.length} Product
                                        {order.items.length === 1 ? '' : 's'}
                                    </p>
                                    <p>{moneyFormat(order.total)}</p>
                                </div>
                                <div className='images'>
                                    {order.items.map((item) => (
                                        <img
                                            key={item.id}
                                            src={
                                                item.picture?.image
                                                    ?.publicUrlTransformed
                                            }
                                            alt={item.name}
                                        />
                                    ))}
                                </div>
                            </a>
                        </Link>
                    </OrderItemStyles>
                ))}
            </OrderUl>
        </div>
    )
}
