import Layout from "../../components/Layout";
import { Warning } from "../../components/Cards";

function Home() {
  return (
    <Layout>
      <main className="flex justify-center items-center min-h-screen">
        <Warning/>
      </main>
    </Layout>
  );
}

export default Home;
