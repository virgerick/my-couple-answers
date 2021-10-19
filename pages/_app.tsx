import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import { Provider } from "react-redux";
import { store } from "../app/store";

import "../styles/main.scss";

function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}
export default App;
