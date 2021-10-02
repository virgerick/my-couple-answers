import firebase from "firebase";
import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollection } from "react-firebase-hooks/firestore";
import useForm from "../hooks/useForm";

interface FormState {
  vote?: string;
}
function Form() {
  const [user, loading, error] = useAuthState(firebase.auth());
  const db = firebase.firestore();
  const { register, formState } = useForm<FormState>({ vote: "" });
  const { vote } = formState;
  const [forms, formsLoading, formsError] = useCollection(
    firebase.firestore().collection("votes"),
    {}
  );
  if (!formsLoading && forms) {
    
 forms.docs.map(doc=>console.log(doc.data() as FormState))
  
  }
  // index.tsx
  const addVoteDocument = async () => {
    await db.collection("votes").doc(user?.uid).set({
      vote,
    });
  };

  return (
    <Container>
      <h1>Hello from Form</h1>
      <input type="text" name="vote" onChange={register} />
      <button onClick={addVoteDocument}>add </button>
    </Container>
  );
}

export default Form;
