import firebase from "firebase";
import { useRouter } from "next/dist/client/router";
import React, { Key, useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import Loading from "../../components/Loading";
import useForm from "../../hooks/useForm";
import { IForm } from "../../models/IForm";
import { Repository } from "../../repository";
import Register from "../register";

function Form() {
  const [user, userLoding, UserError] = useAuthState(firebase.auth());
  const [forms, setForms] = useState<IForm[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<any>();
  const router = useRouter();
  const { register, formState } = useForm<IForm>({ userId: user?.uid });
  const { id, name, questions } = formState;
  const repository = new Repository<IForm>("forms");

  useEffect(() => {
    const run = async () => user&& await getForms();
    run();
    return () => {};
  }, [user]);
  const getForms = async () => {
    try {
      setLoading(true);
      if( !user?.uid)return setError("Something went wrong.");
      const formulario = await repository.getWhere("userId", "==", user?.uid);
      setForms(formulario);
    } catch (error: any) {
      setError(error.name);
    } finally {
      setLoading(false);
    }
  };
  const onHandlerSubmit = async (e: any) => {
    try {
      setLoading(true);
      setError(null);
      e.preventDefault();
      if (!name || name?.length <= 0) {
        return setError("Name can not be empty.");
      }
      if (!user) {
        return setError("user can not be empty.");
      }
      register({target:{name:"userId",value:user?.uid}})
      await repository.insertAsync(formState);
      await getForms();
      alert("Success");
    } catch (error: any) {
      setError(error.toString());
    } finally {
      setLoading(false);
    }
  };
  return (
    <Container>
      {loading || userLoding ? (
        <Loading />
      ) : (
        <>
          {error && (
            <div className="alert alert-danger" role="alert">
              {error}
            </div>
          )}
          {UserError && (
            <div className="alert alert-danger" role="alert">
              {UserError}
            </div>
          )}
          <form onSubmit={onHandlerSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <div className="d-flex">
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="form-control"
                  value={name?.toString()}
                  onInput={register}
                  placeholder="Name"
                />{" "}
                <button className="btn btn-primary mx-2" type="submit">
                  {id ? "Update" : "Add"}
                </button>
              </div>
            </div>
          </form>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Nombre</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {forms.map((form: IForm, i: Key | null | undefined) => (
                <tr key={i}>
                  <th scope="row">{Number(i) + 1}</th>
                  <td>{form.name}</td>
                  <td className="d-felx d-flex justify-content-end">
                    <button className="btn btn-warning mx-2">Edit</button>
                    <button className="btn btn-danger">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </Container>
  );
}

export default Form;
