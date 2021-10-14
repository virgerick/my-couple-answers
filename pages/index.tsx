import type { NextPage } from "next";
// Import the useAuthStateHook
import { useAuthState } from "react-firebase-hooks/auth";
import useAppSetting from "../hooks/useAppSetting";

const Home: NextPage = (props) => {
  const appSetting = useAppSetting();
  return (
    <div>
      <main>
        <h1>{appSetting.name}</h1>
        <p>{appSetting.descripcion}</p>
        <br />
      </main>
    </div>
  );
};

export default Home;
