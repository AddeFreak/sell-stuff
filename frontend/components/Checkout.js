import { CardElement, Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import styled from 'styled-components'

const CheckoutFormStyles = styled.form`
    display: grid;
    gap: 1rem;
    padding: 1rem;
    font-weight: 100;
`
const CheckoutButton = styled.button`
    display: inline-block;
    padding: 1rem;
    font-weight: 100;
    border: 1px;
    border-radius: 3px;
    font-size: 2rem;
    color: white;
    background-color: rgb(9, 0, 124);
    `
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_KEY)

function handleSubmit(e) {
   e.preventDefault()
 }
export function Checkout() {
    return (
        <Elements stripe={stripePromise}>
            <CheckoutFormStyles onSubmit={handleSubmit}>
          <CardElement />
          <CheckoutButton>Pay</CheckoutButton>
            </CheckoutFormStyles>
        </Elements>
    )
}
