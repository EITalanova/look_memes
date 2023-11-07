import Layout from "@/components/Layout/Layout";
import "@/styles/globals.scss";

// export default function App({ Component, pageProps }) {
//   return (
//   <Layout>
//       <Component {...pageProps} />
//     </Layout>
//   );
// }

const App = ({ Component, pageProps }) => (
  <Layout>
    <main>
      <Component {...pageProps} />
    </main>
  </Layout>
);

export default App;
