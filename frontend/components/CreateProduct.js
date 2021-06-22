import { useMutation } from '@apollo/client'
import gql from 'graphql-tag'
import Router from 'next/router'
import styled from 'styled-components'
import useForm from '../lib/useForm'
import ErrorMessage from './ErrorMessage'
import { ALL_PRODUCTS_QUERY } from './Products'

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
const CREATE_PRODUCT_MUTATION = gql`
    mutation CREATE_PRODUCT_MUTATION(
        $name: String!
        $description: String!
        $price: Int!
        $image: Upload
    ) {
        createProduct(
            data: {
                name: $name
                description: $description
                price: $price
                status: "AVAILABLE"
                picture: { create: { image: $image, altText: $name } }
            }
        ) {
            id
            price
            description
            name
        }
    }
`

export default function CreateProduct() {
    const { formData, handleInputChange, resetForm } = useForm({
        image: '',
        name: 'Product Name',
        price: 100,
        description: 'Product description.',
    })
    const [createProduct, { data, error, loading }] = useMutation(
        CREATE_PRODUCT_MUTATION,
        {
            variables: formData,
            refetchQueries: [{ query: ALL_PRODUCTS_QUERY }],
        }
    )

    return (
        <FormStyle
            onSubmit={async (e) => {
                e.preventDefault()
                const res = await createProduct()
                resetForm()
                /* clear file after upload */
                Router.push({
                    pathname: `/product/${res.data.createProduct.id}`,
                })
            }}
        >
            <ErrorMessage error={error}/>
            <fieldset disabled={loading}>
                <div className='formcontainer'>
                    <div className='container'>
                        <label htmlFor='image'>
                            <strong>Image</strong>
                            <input
                                required
                                type='file'
                                name='image'
                                id='image'
                                onChange={handleInputChange}
                            />
                        </label>
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
                    <button type='submit'>Add Product</button>
                </div>
            </fieldset>
        </FormStyle>
    )
}
