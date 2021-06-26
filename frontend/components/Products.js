import { useQuery } from '@apollo/client'
import gql from'graphql-tag'
import styled from 'styled-components'
import { perPage } from '../config'
import Product from './Product'

export const ALL_PRODUCTS_QUERY = gql`
query ALL_PRODUCTS_QUERY($skip: Int = 0, $first: Int){
  allProducts(first: $first, skip: $skip ) {
    id
    name
    price
    description
    picture {
      id
      image {
        publicUrlTransformed
      }
    }
  }
}
` 
const ProductsStyle = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 50px;
    @media (max-width: 425px) {
        font-size: 10px;
        padding: 0 10px;
        grid-template-columns: repeat(1, 1fr);
    }
`
export default function Products({ page }) {
  const { data, error, loading } = useQuery(ALL_PRODUCTS_QUERY, {
    variables: {
      skip: page * perPage - perPage,
      first: perPage
      }
    })
    console.log(data, error, loading)
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;
    return (
        <div>
          <ProductsStyle>
          {data.allProducts.map(product => (
                 <Product key={product.id} product={product} />
             ))}
             </ProductsStyle>
        </div>
    )
}