import React from 'react';
import { AppProps } from 'next/app';
import Script from 'next/script';
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';

import './index.css';

declare global {
  interface Window {
    Kakao: any
  }
}

const client = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});
const MyApp: React.FC<AppProps> = ({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) => {
  const getLayout = Component.getLayout || (page => page);

  function kakaoInit() {
    window.Kakao.init('9d355839d37fbfe2655b49e440d0d303');

  }

  return (
    <>
      <Script
        src="https://developers.kakao.com/sdk/js/kakao.js"
        onLoad={kakaoInit}
      ></Script>
      <QueryClientProvider client={client}>
        <Hydrate state={pageProps.dehydratedState}>
          {getLayout(<Component {...pageProps} />)}
        </Hydrate>
      </QueryClientProvider>
    </>
  );
};

export default MyApp;
