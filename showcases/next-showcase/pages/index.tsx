import type { NextPage } from "next";
import Head from "next/head";
import { DBButton, DBIcon } from "../output/src";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Next</h1>
        <div style={{ display: "flex", gap: "4px", alignItems: "center" }}>
          <DBButton variant="primary">Test</DBButton>
          <DBButton text="Test" icon="account" />
          <DBIcon icon="account" />
        </div>
      </main>
    </div>
  );
};

export default Home;
