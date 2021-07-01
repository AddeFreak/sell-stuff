import { useQuery } from '@apollo/client'
import gql from 'graphql-tag'
import Head from 'next/head'
import Link from 'next/link'
import styled from 'styled-components'
import ErrorMessage from './ErrorMessage'
import {perPage} from '../config'

const PaginationStyles = styled.div`
    text-align: center;
    display: inline-grid;
    grid-template-columns: repeat(4, auto);
    align-items: stretch;
    justify-content: center;
    align-content: center;
    margin: 2rem 0;
    border: 1px solid grey;
    border-radius: 10px;
    & > * {
        margin: 0;
        padding: 15px 30px;
        border-right: 1px solid grey;
        &:last-child {
            border-right: 0;
        }
    }
    a {
        color: black;
    }
    a[aria-disabled='true'] {
        color: grey;
        pointer-events: none;
    }
    @media (max-width: 320px) {
        font-size: 10px;
        padding: 0 10px;
        border: none;
    }
    @media (max-width: 700px) {
        font-size: 10px;
        padding: 0;
    }
`
const CenterDiv = styled.div`
    display: flex;
    align-items: center; 
    justify-content: center; 
    
`
export const PAGINATION_QUERY = gql`
query {
  _allProductsMeta {
    count
  }
}
`
export default function Pagination({ page }) {
  const { error, loading, data } = useQuery(PAGINATION_QUERY)
  if (loading) return 'Loading...';
  if (error) return <ErrorMessage error={error} />;
  const { count } = data._allProductsMeta;
  const pageCount = Math.ceil(count / perPage);
    return (
        <CenterDiv>
            <PaginationStyles>
                <Head>
                    <title>Sell Stuff - Page {page} of </title>
                </Head>
                <Link href={`/products/${page - 1}`}>
                    <a aria-disabled={page <= 1}>← Prev</a>
                </Link>
                <p>
                    Page {page} of {pageCount}
                </p>
                <p>{count} Items Total</p>
                <Link href={`/products/${page + 1}`}>
                    <a aria-disabled={page >= pageCount}>Next →</a>
                </Link>
            </PaginationStyles>
        </CenterDiv>
    )
}