import type { NextPage } from "next";
// Import the useAuthStateHook
import { useAuthState } from "react-firebase-hooks/auth";
import useAppSetting from "../hooks/useAppSetting";
import firebase from "../firebase";
import { Container } from "react-bootstrap";

const Home: NextPage = (props) => {
  const appSetting = useAppSetting();
  const [user, loading, error] = useAuthState(firebase.auth());
  return (
    <div>
      {loading ? (
        <Container>
          <p>loading...</p>
        </Container>
      ) : (
        <main>
          <h1>{appSetting.name}</h1>
          <p>{appSetting.descripcion}</p>
        </main>
      )}
    </div>
  );
};

export default Home;
