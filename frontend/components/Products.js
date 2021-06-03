import { useQuery } from '@apollo/client'
import gql from'graphql-tag'
import styled from 'styled-components'
import Product from './Product'

export const ALL_PRODUCTS_QUERY = gql`
query ALL_PRODUCTS_QUERY{
  allProducts {
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
export default function Products() {
    const {data, error, loading} = useQuery(ALL_PRODUCTS_QUERY)
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