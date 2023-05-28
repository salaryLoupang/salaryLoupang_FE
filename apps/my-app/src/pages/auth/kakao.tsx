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
      const { data = {} } = await postLogin({ code: authCode });

      localStorage.setItem('accessToken', data.accessToken);
      localStorage.setItem('refreshToken', data.refreshToken);

      if (data.signupFlag) {
        router.push({
          pathname: '/signup',
        });
        return;
      }

      router.push({
        pathname: '/main',
      });
    } catch (e) {
      console.log(e);
      router.push({
        pathname: '/',
      });
    }
  }, [router]);

  React.useEffect(() => {
    callback();
  }, [router]);

  return null;
};

export default Kakao;
