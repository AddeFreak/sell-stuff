import { useUser } from "../components/User";
export default function AccountPage() {
  const me = useUser();
  return (
    <div>
      <p>Hello {me.name}! This page is under construction.</p>
    </div>
  );
}
