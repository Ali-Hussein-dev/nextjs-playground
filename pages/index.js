import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Demo</title>
      </Head>

      <main>Env variables {JSON.stringify(process.env, 2, null)}</main>
    </div>
  );
}
