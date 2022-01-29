import Head from "next/head";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div>
      <Head>
        <title>ATL Landmarks</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main>
        <div className="m-4">
          <h1 className="text-red-700 text-2xl font-bold">ATL Landmarks</h1>
        </div>
      </main>

      <footer></footer>
    </div>
  );
}
