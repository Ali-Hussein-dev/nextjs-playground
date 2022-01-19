import Head from 'next/head';

export default function Home() {
  console.log('env: ', process.env);
  return (
    <div>
      <Head>
        <title>Demo</title>
      </Head>

      <main className="bg-slate-800 min-h-screen text-slate-200 p-2">
        Env variables {JSON.stringify(process.env, 2, null)}
      </main>
    </div>
  );
}
