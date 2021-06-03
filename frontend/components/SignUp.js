import { useMutation } from "@apollo/client";
import  gql  from "graphql-tag";
import styled from "styled-components";
import useForm from "../lib/useForm";
import { CURRENT_USER_QUERY } from "./User";

const SIGNUP_MUTATION = gql`
  mutation SIGNUP_MUTATION($email: String!, $name: String!, $password: String!) {
    createUser(data: {
      email: $email,
      name: $name,
      password: $password
    }){
      id
      email
      name
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
    @media screen and (max-width: 300px) {
        span.psw {
            display: block;
            float: none;
        }
    }
`
export default function SignUp() {
  const { formData, handleInputChange, resetForm } = useForm({
    email: '',
    name: '',
    password:''
  })
  const [signup, { data, error, loading }] = useMutation(SIGNUP_MUTATION, {
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
          <fieldset>
        <h2>Sign Up For An Account</h2>
        {data?.createUser && (
          <p> You Signed up with "{data.createUser.email}".   
               You can now sign in!</p>
        )}
              <label htmlFor='name'>
                 Your Name
                  <input
                      type='name'
                      name='name'
                      placeholder='Your Name'
                      autoComplete='name'
                      value={formData.name}
                      onChange={handleInputChange}
                  />
              </label>
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
              <button type='submit'> Sign Up! </button>
          </fieldset>
      </FormStyle>
  )
 }