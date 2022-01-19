import Head from 'next/head';
import Cookies from 'cookies';
export default function Home({ env }) {
  env = JSON.parse(env);
  return (
    <div>
      <Head>
        <title>Demo</title>
      </Head>

      <main className="bg-slate-800 min-h-screen text-slate-200 p-2 overflow-scroll">
        <div className="w-11/12 h-full">
          Process.env:
          <pre className="max-w-fit">{JSON.stringify(env, null, 4)}</pre>
        </div>
      </main>
    </div>
  );
}

export async function getServerSideProps(ctx) {
  const setter = new Cookies(ctx.req, ctx.res);

  const domain = process.env.VERCEL_URL;
  const vercelEnv = process.env.VERCEL_ENV;
  console.log({ domain, vercelEnv });

  setter.set('auth', true, { domain });

  const env = JSON.stringify(process.env);
  return {
    props: {
      env,
    },
  };
}
