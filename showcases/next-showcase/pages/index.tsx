import type { NextPage } from "next";
import Head from "next/head";
import { DBButton } from "../output/src";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <DBButton variant="primary">Test</DBButton>
        <DBButton text="Test" />
      </main>
    </div>
  );
};

export default Home;