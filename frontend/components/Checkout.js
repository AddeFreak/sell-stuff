import { useMutation } from '@apollo/client'
import { CardElement, Elements, useElements, useStripe } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import gql from 'graphql-tag'
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
const CREATE_ORDER_MUTATION = gql`
    mutation CREATE_ORDER_MUTATION($token: String!) {
        checkout(token: $token) {
            id
            charge
            total
            items {
                id
                name
            }
        }
    }
`

 const stripeLib = loadStripe(process.env.NEXT_PUBLIC_STRIPE_KEY)

 function CheckoutForm() {
     const [error, setError] = useState()
     const [loading, setLoading] = useState(false)
     const stripe = useStripe()
     const elements = useElements()
     const [checkout, { error: graphQLError }] = useMutation(CREATE_ORDER_MUTATION)
     async function handleSubmit(e) {
         e.preventDefault()
         setLoading(true)
         console.log('And so it begins..')
         nProgress.start()
         const { error, paymentMethod } = await stripe.createPaymentMethod({
             type: 'card',
             card: elements.getElement(CardElement),
         })
         console.log(paymentMethod)
         if (error) {
             setError(error)
             nProgress.done()
             return
         }

         const order = await checkout({
             variables: {
                 token: paymentMethod.id
             }
         })
         console.log('Finished order')
         console.log(order)

         setLoading(false)
         nProgress.done()
     }

     return (
         <CheckoutFormStyles onSubmit={handleSubmit}>
             {error && <p style={{ fontSize: 12 }}>{error.message}</p>}
             {graphQLError && <p style={{ fontSize: 12 }}>{graphQLError.message}</p>}
             <CardElement />
             <CheckoutButton>Check Out Now</CheckoutButton>
         </CheckoutFormStyles>
     )
 }

function Checkout() {
   const [stripePromise, setStripePromise] = useState(() =>
       loadStripe(process.env.NEXT_PUBLIC_STRIPE_KEY)
   )
     return (
         <Elements stripe={stripeLib}>
             <CheckoutForm />
         </Elements>
     )
 }

 export { Checkout }
