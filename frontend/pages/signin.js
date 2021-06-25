import styled from "styled-components";
import ResetPassword from "../components/ResetPassword";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";

const StyledSignPage = styled.div`
     display: grid;
     grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
`
export default function SignInPage() {
  return (
    <StyledSignPage>
      <SignIn/>
      <SignUp />
      <ResetPassword/>
    </StyledSignPage>
  );
}
