// import { SessionProvider } from 'next-auth/react';

import './index.css';

export default function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}) {
  const getLayout = Component.getLayout || (page => page);

  return <Component />;
}
