import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { loginUser } from "../api/api";
export default function Login() {
  const [loginFormData, setLoginFormData] = React.useState({
    email: "",
    password: "",
  });
  const [status, setStatus] = React.useState("idle");
  const [error, setError] = React.useState<Error | null>();

  const location = useLocation();
  function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();
    setError(null);
    setStatus("submitting");

    loginUser(loginFormData)
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setStatus("idle");
      });
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setLoginFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  return (
    <div className='login-container'>
      <h1>Sign in to your account</h1>
      {error && <h3 className='login-error'>{error.message}</h3>}
      {location.state?.message ? <h3>Please log in first</h3> : ""}
      <form onSubmit={handleSubmit} className='login-form'>
        <input
          name='email'
          onChange={handleChange}
          type='email'
          placeholder='Email address'
          value={loginFormData.email}
        />
        <input
          name='password'
          onChange={handleChange}
          type='password'
          placeholder='Password'
          value={loginFormData.password}
        />
        <button disabled={status === "submitting"}>
          {status === "submitting" ? "Logging in..." : "Log in"}
        </button>
      </form>
    </div>
  );
}
