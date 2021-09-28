import { NextPage } from "next";
import Link from "next/link";
import React, { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import SignInScreen from "../components/auth";
interface LoginState {
  email: string;
  password: string;
  rememberMe?: boolean;
}
const Login: NextPage = () => {
  const [loginForm, setLoginForm] = useState<LoginState>({
    email: "",
    password: "",
    rememberMe: false,
  });
  const { email, password, rememberMe } = loginForm;
  const handleOnSubmit = async (e: any) => {
    e.preventDefault();
    console.log(loginForm);
  };
  return (
    <Container>
      <h1>Login</h1>
      <Form onSubmit={handleOnSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            value={email}
            required
            onChange={(e) =>
              setLoginForm((state) => ({
                ...state,
                email: e.target.value,
              }))
            }
          />
          <Form.Text className="text-muted">
            We&apos;ll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            required
            value={password}
            minLength={6}
            onChange={(e) =>
              setLoginForm((state) => ({
                ...state,
                password: e.target.value,
              }))
            }
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            type="checkbox"
            label="Recuerda me"
            checked={rememberMe}
            onChange={(e) =>
              setLoginForm((state) => ({
                ...state,
                rememberMe: e.target.checked,
              }))
            }
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Iniciar Session
        </Button>
      </Form>
      <SignInScreen />
      <div className="mt-3">
        <Link href="/register">
          <a className="link-primary">Do not have an account?</a>
        </Link>
      </div>
    </Container>
  );
};
export default Login