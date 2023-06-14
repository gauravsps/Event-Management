import Signup from "@/app/(auth)/signup/page";
import Login from "../../(auth)/login/page";

export default async function Admin() {
    return <div>
        <Login />
        <Signup />
    </div>
}