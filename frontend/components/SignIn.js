import { useMutation } from '@apollo/client'
import gql from 'graphql-tag'
import Router from 'next/router'
import styled from 'styled-components'
import useForm from '../lib/useForm'
import ErrorMessage from './ErrorMessage'
import { CURRENT_USER_QUERY } from './User'

const SIGNIN_MUTATION = gql`
    mutation SIGNIN_MUTATION($email: String!, $password: String!) {
        authenticateUserWithPassword(email: $email, password: $password) {
            ... on UserAuthenticationWithPasswordSuccess {
                item {
                    id
                    email
                    name
                }
            }
            ... on UserAuthenticationWithPasswordFailure {
                code
                message
            }
        }
    }
`

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
export default function SignIn() {
    const { formData, handleInputChange, resetForm } = useForm({
        email: '',
        password: '',
    })
    const [singin, { error, loading }] = useMutation(SIGNIN_MUTATION, {
        variables: formData,
        refetchQueries: [{ query: CURRENT_USER_QUERY }],
    })
    return (
        <FormStyle
            method='POST'
            onSubmit={async (e) => {
                e.preventDefault()
                const res = await singin()
                console.log(res)
                Router.push({
                    pathname: `/products/`,
                })
            }}
        >
            <ErrorMessage error={error} />
            <fieldset>
                <h2>Sign In To Your Account</h2>
                <label htmlFor='email'>
                    Email
                    <input
                        type='email'
                        name='email'
                        placeholder='Your email address'
                        autoComplete='email'
                        value={formData.email}
                        onChange={handleInputChange}
                    />
                </label>
                <label htmlFor='password'>
                    Password
                    <input
                        type='password'
                        name='password'
                        placeholder='Password'
                        autoComplete='password'
                        value={formData.password}
                        onChange={handleInputChange}
                    />
                </label>
                <button type='submit'> Sign In! </button>
            </fieldset>
        </FormStyle>
    )
}
