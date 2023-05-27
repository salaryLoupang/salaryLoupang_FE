import React from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';

import { postLogin } from 'api/requestLogin';

const Kakao: NextPage = () => {
  const router = useRouter();

  const { code: authCode } = router.query;

  const callback = React.useCallback(async () => {
    if (!authCode) return;
    try {
      const res: any = await postLogin({ code: authCode });
    } catch (e) {
      router.push({
        pathname: '/signup',
        query: {
          code: authCode,
        },
      });
    }
  }, [router]);

  React.useEffect(() => {
    callback();
  }, [router]);

  return null;
};

export default Kakao;
