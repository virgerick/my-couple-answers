import type { NextPage } from "next";
import useAppSetting from "../hooks/useAppSetting";

const Home: NextPage = (props) => {
  const appSetting = useAppSetting();
  return (
    <div >
      <main >
        <h1>{appSetting.name}</h1>
        <p >{appSetting.descripcion}</p>
      </main>
    </div>
  );
};

export default Home;
