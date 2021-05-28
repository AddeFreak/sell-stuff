import Link from 'next/link';
import styled from 'styled-components';
import moneyFormat from '../lib/moneyFormat';

const ProductStyles = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    grid-gap: 1rem;
    border: 1px solid #e2e2e2;
    border-radius: 0.5rem;
    position: relative;
    display: flex;
    flex-direction: column;

    img {
        width: 100%;
        height: 400px;
        object-fit: contain;
    }
    p {
        line-height: 2;
        font-weight: 300;
        padding: 0 2.5rem;
        font-size: 1.5rem;
    }
    .edit {
        text-align: end;
    }
`
const ProductTextStyle = styled.h2`
    position: absolute;
    bottom: -7px;
    left: -7px;
    background-color: black;
    color: white;
    margin: 0rem;
    font-size: 1.25rem;
    padding: 1rem;
    a {
        display: inline;
        font-size: 4rem;
        text-align: center;
        color: white;
        padding: 0 1rem;
        font-size: 4rem;
        font-weight: normal;
        letter-spacing: -3.5px;
        line-height: 1em;
    }
    
`
const ProductPriceStyle = styled.h3`
    position: absolute;
    background-color: black;
    color: white;
    margin: 0rem;
    font-size: 2rem;
    display: inline-block;
    line-height: 1.3;
    top: -4px;
    right: -4px;
    color: white;
    padding: 1rem;
`
const ParaStyle = styled.p`
    text-align: center;
`
export default function Product({ product }) {
  return (
    <>
      <ProductStyles>
        <img
          src={product?.picture?.image?.publicUrlTransformed}
          alt={product.name}
        />
        <ProductTextStyle>
          <Link href={`/product/${product.id}`}>{product.name}</Link>
        </ProductTextStyle>
        <ProductPriceStyle>{moneyFormat(product.price)}</ProductPriceStyle>
        <ParaStyle>{product.description}</ParaStyle>
        <div className="edit"><Link href={{
          pathname: 'update',
          query: {
            id: product.id,
          },
        }}>Edit</Link></div>
      </ProductStyles> 
    </>
  );
}
