import Head from 'next/head';

export default function Home({ env }) {
  console.log('env: ', env);
  return (
    <div>
      <Head>
        <title>Demo</title>
      </Head>

      <main className="bg-slate-800 min-h-screen text-slate-200 p-2">
        Env variables: <pre>{JSON.stringify(env, 2, null)}</pre>
      </main>
    </div>
  );
}

export async function getStaticProps() {
  // Call an external API endpoint to get posts
  const envs = JSON.stringify(process.env);
  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      env,
    },
  };
}
