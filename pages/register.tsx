import React, { FormEvent, useEffect, useState } from "react";
import { Alert, Button, Container, Form } from "react-bootstrap";
import useForm from "../hooks/useForm";
import Link from "next/link";
import { NextPage } from "next";
import firebase from "../firebase";

import { useRouter } from "next/dist/client/router";
import Loading from "../components/Loading";
import { useAuthState } from "react-firebase-hooks/auth";
import { route } from "next/dist/server/router";
interface RegisterState {
  id?: string;
  name: string;
  lastname: string;
  email: string;
  password?: string;
  confirmPassword?: string;
}

const Register: NextPage = () => {
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState(null);
  const [user, userLoading, error] = useAuthState(firebase.auth());
  const router = useRouter();
  useEffect(() => {
    console.log(user);
    
    if (user) {
      router.push("/");
    }
  },[]);
  const {
    register,
    formState: { email, confirmPassword, name, lastname, password },
  } = useForm<RegisterState>({
    name: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handlerSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      setLoading(true);
      const auth = await firebase.auth();
      const credencial = await auth.createUserWithEmailAndPassword(
        email,
        password as string
      );

      const { user } = credencial;
      await user?.updateProfile({
        displayName: `${name} ${lastname}`,
        photoURL: null,
      });
      const id = user?.uid as string;
      await router.push("/profile");
    } catch (error: any) {
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
          <h1 className="display-4">Register</h1>
          {errors && <Alert variant="danger">{errors}</Alert>}
          <Form onSubmit={handlerSubmit}>
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter name"
                name="name"
                value={name}
                required
                onChange={register}
              />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="lastname">
              <Form.Label>Lastname</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter lastname"
                name="lastname"
                value={lastname}
                required
                onChange={register}
              />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="email"
                value={email}
                required
                onChange={register}
              />
              <Form.Text className="text-muted">
                We&apos;ll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter password"
                name="password"
                value={password}
                required
                onChange={register}
              />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicconfirmPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter confirm password"
                name="confirmPassword"
                value={confirmPassword}
                required
                onChange={register}
              />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>
            <Button variant="primary" type="submit">
              Register
            </Button>
          </Form>
          <div className="mt-3">
            <Link href="/login">
              <a className="text-decoration-none">
                Already have an account? click here to sign in
              </a>
            </Link>
          </div>
        </section>
      )}
    </Container>
  );
};

export default Register;
