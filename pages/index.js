import Head from 'next/head';
import Cookies from 'cookies';
export default function Home({ env }) {
  console.log('env: ', JSON.parse(env));
  env = JSON.parse(env);
  return (
    <div>
      <Head>
        <title>Demo</title>
      </Head>

      <main className="bg-slate-800 min-h-screen text-slate-200 p-2">
        <div className="w-11/12">
          Env variables:{' '}
          <code className="max-w-fit">{JSON.stringify(env, 2, null)}</code>
        </div>
      </main>
    </div>
  );
}

export async function getServerSideProps(ctx) {
  const setter = new Cookies(ctx.req, ctx.res);
  const domain = process.env.VERCEL_URL;
  console.log({ domain });
  setter.set('auth', true, { domain });
  const env = JSON.stringify(process.env);
  return {
    props: {
      env,
    },
  };
}
