import { useMutation, useQuery } from "@apollo/client"
import gql from "graphql-tag"
import  Router  from "next/router"
import styled from "styled-components"
import useForm from "../lib/useForm"


import { SINGLE_PRODUCT_QUERY } from './SingleProduct'

const FormStyle = styled.form`
    display: flex;
    justify-content: center;
    box-shadow: 1px 1px 25px rgba(0, 0, 0, 0.35);
    border-radius: 10px;
    border: 6px solid #305a72;

    input,
    textarea {
        width: 100%;
        padding: 16px 8px;
        margin: 8px 0;
        display: inline-block;
        border: 1px solid #ccc;
        box-sizing: border-box;
    }
    button {
        width: auto;
        color: white;
        border: 0;
        font-size: 2rem;
        font-weight: 600;
        padding: 0.5rem 1.2rem;
        background-color: #305a72;
    }
    .formcontainer {
        text-align: left;
        margin: 24px 50px 12px;
    }
    .container {
        padding: 16px 0;
        text-align: left;
    }
    fieldset {
        border: none;
    }
    @media screen and (max-width: 300px) {
        span.psw {
            display: block;
            float: none;
        }
    }
`

const UPDATE_PRODUCT_MUTATION = gql`
    mutation UPDATE_PRODUCT_MUTATION(
        $id: ID!
     
        $name: String
        $description: String
        $price: Int
      
    ) {
        updateProduct(
            id: $id
            data: {
                name: $name
                description: $description
                price: $price
            }
        ) {
            id
            name
            description
            price
            
        }
        
        
    }
`

export default function UpdateProduct({id}) {
  const { data, error, loading } = useQuery(SINGLE_PRODUCT_QUERY,
    { variables: { id: id } })
  const { formData, handleInputChange, resetForm } = useForm(data?.Product)
  const [updateProduct, mutationResponse] = useMutation(
      UPDATE_PRODUCT_MUTATION,
      {
          variables: {
          id,
           
              name: formData.name,
            description: formData.description,
            price: formData.price,
              }
             
          },
      
  )

    if (loading) return <p>Loading...</p>
    if (error) return <p>{error.message}</p>
  return (
      <FormStyle
          onSubmit={async (e) => {
              e.preventDefault()
              const res = await updateProduct()

          }}
      >
          {/* //Disable fieldset when uploading (aria-busy) 
            DisplayError*/}
          <fieldset disabled={mutationResponse.loading}>
              <div className='formcontainer'>
                  <div className='container'>
                   
                      <label htmlFor='name'>
                          <strong>Name</strong>
                          <input
                              type='text'
                              name='name'
                              id='name'
                              placeholder='Name'
                              value={formData.name}
                              onChange={handleInputChange}
                          />
                      </label>
                      <label htmlFor='price'>
                          <strong>Price</strong>
                          <input
                              type='number'
                              name='price'
                              value={formData.price}
                              placeholder='Price'
                              onChange={handleInputChange}
                          />
                      </label>
                      <label htmlFor='description'>
                          <strong>Description</strong>
                          <textarea
                              id='description'
                              name='description'
                              value={formData.description}
                              placeholder='Description'
                              onChange={handleInputChange}
                          />
                      </label>
                  </div>
                  <button type='submit'>Update Product</button>
              </div>
          </fieldset>
      </FormStyle>
  )
}
