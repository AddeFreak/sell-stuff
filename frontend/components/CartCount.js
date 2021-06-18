import styled from 'styled-components'

const Dot = styled.div`
    background: pink;
    color: rgb(9, 0, 124);
    border-radius: 50%;
    padding: 0.5rem;
    line-height: 2rem;
    min-width: 3rem;
    margin-left: 1rem;
`

export default function CartCount({ count }) {
  return <Dot>{count}</Dot>
}