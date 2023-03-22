import React from "react";
import {
  useNavigate,
  useLocation,
  useNavigation,
  Form,
  useActionData,
} from "react-router-dom";
import { loginUser } from "../api/api";

export async function action({ request }: any) {
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");
  try {
    const actionData = await loginUser({ email, password });
    localStorage.setItem("loggedin", "true");
    return actionData;
  } catch (error: any) {
    return { error: error.message };
  }
}

export default function Login() {
  const navigate = useNavigate();
  const actionData: any = useActionData();
  const location = useLocation();
  const from = location.state?.from || "/agent";
  const navigation = useNavigation();
  const status = navigation?.state;

  React.useEffect(() => {
    if (actionData?.token) {
      navigate(from, { replace: true });
    }
  }, [actionData]);

  return (
    <div className='login-container'>
      <h1>Sign in to your account</h1>
      {actionData?.error && <h3 className='login-error'>{actionData.error}</h3>}
      {location.state?.message ? <h3>Please log in first</h3> : ""}
      <Form action='/login' method='post' className='login-form'>
        <input name='email' type='email' placeholder='Email address' />
        <input name='password' type='password' placeholder='Password' />
        <button disabled={status === "submitting"}>
          {status === "submitting" || "loading" ? "Logging in..." : "Log in"}
        </button>
      </Form>
    </div>
  );
}
