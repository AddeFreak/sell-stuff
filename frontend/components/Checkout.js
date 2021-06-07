import { CardElement, Elements, useElements, useStripe } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import nProgress from 'nprogress'
import { useState } from 'react'
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

function CheckoutForm() {
 const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const stripe = useStripe();
  const elements = useElements();
  function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)
    nProgress.start()
  }
    return (
      
        <CheckoutFormStyles onSubmit={handleSubmit}>
          <CardElement />
          <CheckoutButton>Pay</CheckoutButton>
        </CheckoutFormStyles>
    
    )
}
function Checkout() {
  return (
    <Elements stripe={stripePromise} >
      <CheckoutForm/>
     </Elements >
  )
    
  }

export {Checkout}
