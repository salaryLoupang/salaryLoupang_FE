import React from 'react';
import { AppProps } from 'next/app';
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';

import './index.css';

const client = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});
const MyApp: React.FC<AppProps> = ({
  Component,
  pageProps: { ...pageProps },
}) => {
  const getLayout = Component.getLayout || (page => page);
  return (
    <QueryClientProvider client={client}>
      <Hydrate state={pageProps.dehydratedState}>
        {getLayout(<Component {...pageProps} />)}
      </Hydrate>
    </QueryClientProvider>
  );
};

export default MyApp;
