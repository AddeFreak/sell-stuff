import { useMutation } from "@apollo/client";
import  gql  from "graphql-tag";
import styled from "styled-components";
import useForm from "../lib/useForm";
import ErrorMessage from "./ErrorMessage";


const REQUEST_RESET_MUTATION = gql`
  mutation REQUEST_RESET_MUTATION($email: String!) {
    sendUserPasswordResetLink(email: $email){
     code
     message
    }
  }
`;

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
`
export default function RequestReset() {
  const { formData, handleInputChange, resetForm } = useForm({
    email: '',
  })
  const [signup, { data, error, loading }] = useMutation(REQUEST_RESET_MUTATION, {
    variables: formData,
  })
  return (
      <FormStyle
          method='POST'
          onSubmit={async (e) => {
              e.preventDefault()
              const res = await signup()
              console.log(res)
              resetForm()
          }}
    >
      <ErrorMessage error={error}/>
          <fieldset>
        <h2>Request a Password Reset</h2>
        {data?.sendUserPasswordResetLink === null && (
          <p> Success! A link has been sent yo your email!</p>
        )}
             
              <label htmlFor='email'>
                  Your Email
                  <input
                      type='email'
                      name='email'
                      placeholder='Your email address'
                      autoComplete='email'
                      value={formData.email}
                      onChange={handleInputChange}
                  />
              </label>
             
              <button type='submit'> Reset Password</button>
          </fieldset>
      </FormStyle>
  )
 }