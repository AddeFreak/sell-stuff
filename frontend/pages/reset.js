import RequestReset from "../components/RequestReset"
import ResetPassword from "../components/ResetPassword"

export default function ResetPage({ query }) {
  if (!query?.token) {
    return <div>
      <p>You must supply a token</p>
      <RequestReset/>
      </div>
  }
  return <div>
    <p>Reset your password </p>
    <ResetPassword token={query.token} />
  </div>
}