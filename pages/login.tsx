import { NextPage } from "next";
import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import React, { useState } from "react";
import { Form, Button, Container, Alert } from "react-bootstrap";
import Loading from "../components/Loading";
import firebase from "../firebase";
interface LoginState {
  email: string;
  password: string;
  rememberMe?: boolean;
}
const Login: NextPage = () => {
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<string>("");
  const router = useRouter();
  const [loginForm, setLoginForm] = useState<LoginState>({
    email: "",
    password: "",
  });
  const { email, password, rememberMe } = loginForm;
  const handleOnSubmit = async (e: any) => {
    e.preventDefault();
    try {
      setLoading(true);
      const auth = firebase?.auth();
      const userCredential = await auth.signInWithEmailAndPassword(
        email,
        password
      );
      router.push("/");
    } catch (error: any) {
      console.log(error);
      if (error.code==="auth/user-not-found") {
        return setErrors("invalid credentials");
      }
        setErrors(error.message);
      
    } finally {
      setLoading(false);
    }
  };
  return (
    <Container>
      {loading ? (
        <Loading />
      ) : (
        <section>
          <h1 className="display-4">Login</h1>
          {errors && <Alert variant="danger">{errors}</Alert>}
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

            <Button variant="primary" type="submit">
              Iniciar Session
            </Button>
          </Form>
          <div className="mt-3">
            <Link href="/register">
              <a className="link-primary">Do not have an account?</a>
            </Link>
          </div>
        </section>
      )}
    </Container>
  );
};
export default Login;
