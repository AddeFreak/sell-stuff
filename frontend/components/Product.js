import Link from 'next/link'
import styled from 'styled-components'
import moneyFormat from '../lib/moneyFormat'
import AddToCart from './AddToCart'
import DeleteProduct from './DeleteProduct'

const ProductStyles = styled.div`
    /* display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); */
    grid-gap: 1rem;
    border: 1px solid #e2e2e2;
    border-radius: 0.5rem;
    position: relative;
    display: flex;
    flex-direction: column;

    img {
        width: 100%;
        height: 400px;
        object-fit: cover;
    }
    p {
        font-weight: 300;
        padding: 0 2.5rem;
        font-size: 1.5rem;
        text-align: center;
    }
    .buttons {
        display: grid;
        /*  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); */
        min-width: 20%;
        justify-items: end;
        border: 1px solid white;
        gap: 0.5rem;
        padding: 0.2rem;
    }
    .edit {
      a {
          color:black;
      }
      
        text-align: center;
        text-decoration: none;
        min-width: 20%;
        border-radius: 3px;
        border: 1px solid black;
        grid-row: 2 / 2;
        padding: 1rem;
        & > * {
            border: 0;
            font-size: 1rem;
        }
    }
    .delete {
        text-align: center;
        min-width: 20%;
        border-radius: 3px;
        padding: 1rem;
        border: 1px solid black;
        & > * {
            background: white;
            border: 0;
            font-size: 1rem;
        }
    }
    .add {
        text-align: center;
        min-width: 20%;
        border-radius: 3px;
        padding: 1rem;
        border: 1px solid black;
        & > * {
            background: white;
            border: 0;
            font-size: 1rem;
        }
         @media (max-width: 700px) {
        font-size: 10px;
        padding: 0 10px;
    }
    @media (max-width: 425px) {
        font-size: 10px;
        padding: 0 10px;
        display: grid;
        grid-template-columns: repeat(1, 1fr);
    }
    }
`
const ProductTextStyle = styled.h2`
    position: absolute;
    bottom: 0px;
    left: 0px;
    background-color: rgb(9, 0, 124);
    color: rgb(247, 247, 247);
    margin: 0rem;
    font-size: 1.25rem;
    padding: 1rem;
    border-radius: 3px;
    a {
        display: inline;
        font-size: 4rem;
        text-align: center;
        color: rgb(247, 247, 247);
        padding: 0 1rem;
        font-size: 4rem;
        font-weight: normal;
        letter-spacing: -3.5px;
        line-height: 1em;
    }
`
const ProductPriceStyle = styled.h3`
    position: absolute;
    background-color: rgb(9, 0, 124);
    color: white;
    margin: 0rem;
    font-size: 2rem;
    display: inline-block;
    line-height: 1.3;
    top: 0px;
    right: 0px;
    padding: 1rem;
    border-radius: 3px;
`

export default function Product({ product }) {
    return (
            <ProductStyles>
                <img
                    src={product?.picture?.image?.publicUrlTransformed}
                    alt={product.name}
                />
                <ProductTextStyle>
                    <Link href={`/product/${product.id}`}>{product.name}</Link>
                </ProductTextStyle>
                <ProductPriceStyle>
                    {moneyFormat(product.price)}
                </ProductPriceStyle>
                <p>{product.description}</p>
        <div className='buttons'>
          <div className="add"><AddToCart id={product.id}/></div> 
                    <div className='edit'>
                        <Link
                            href={{
                                pathname: '/update',
                                query: {
                                    id: product.id,
                                },
                            }}
                        >
                            Edit
                        </Link>
                    </div>
                    <div className='delete'>
                        <DeleteProduct id={product.id}>Delete</DeleteProduct>
                    </div>
                </div>
            </ProductStyles>
      )
}
