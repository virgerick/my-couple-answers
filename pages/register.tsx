import React from "react";
import { Button, Container, Form } from "react-bootstrap";
import useForm from "../hooks/useForm";
import Link from "next/link";
import { NextPage } from "next";


interface RegisterState {
  name: string;
  lastname: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const Register: NextPage = () => {
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
  return (
    <Container>
      <h1>Register</h1>
      <Form>
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
    </Container>
  );
};

export default Register;
