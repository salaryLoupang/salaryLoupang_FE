import React from 'react';
import { useRouter } from 'next/router';

export default function Page() {
  const router = useRouter();

  React.useEffect(() => {
    router.push('/intro');
  }, [router]);
  return null;
}

Page.getLayout = function getLayout(page) {
  return page;
};
