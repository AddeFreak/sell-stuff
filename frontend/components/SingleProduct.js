import { useQuery } from '@apollo/client'
import gql from 'graphql-tag'
import Head from 'next/head'
import styled from 'styled-components'
import ErrorMessage from './ErrorMessage'

const ProductStyle = styled.div`
    display: grid;
    grid-auto-columns: 1fr;
    grid-auto-flow: column;
    max-width: 1000px;
    gap: 2rem;
    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`

export const SINGLE_PRODUCT_QUERY = gql`
    query SINGLE_PRODUCT_QUERY($id: ID!) {
        Product(where: { id: $id }) {
            name
            price
            description
            id
            picture {
              image {
                publicUrlTransformed
              }
            }
        }
    }
`
export default function SingleProduct({ id }) {
  const { data, loading, error } = useQuery(SINGLE_PRODUCT_QUERY, {
    variables: {
        id: id
      }
    })
    if (loading) return <p>Loading...</p>
    if (error) return <ErrorMessage error={error}/>
    return (
        <ProductStyle>
            <Head>
                <title>Sell Stuff | {data.Product.name}</title>
        </Head>
        <img
                        src={data.Product.picture.image.publicUrlTransformed}
                        alt={data.Product.name}
                    />
            <div>
                <h3>{data.Product.name}</h3>
                <p>{data.Product.description}</p>
            </div>
        </ProductStyle>
    )
}
