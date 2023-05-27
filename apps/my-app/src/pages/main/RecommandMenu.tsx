import React from 'react';
import { dehydrate, QueryClient, useQuery } from '@tanstack/react-query';

import { Content } from 'components/Content';

import { getMenu } from 'api/requestMenu';

// export async function getStaticProps() {
//   const queryClient = new QueryClient();

//   await queryClient.prefetchQuery(['menu'], getMenu);

//   return {
//     props: {
//       dehydrateState: dehydrate(queryClient),
//     },
//   };
// }

const RecommandMenu = () => {
  const { data: { data = {} } = {} } = useQuery(['menu'], getMenu);

  return (
    <Content
      title="점심에 뭐 먹을까?"
      img={data?.imgUrl}
      contentTitle={data?.title}
    >
      {data?.description}
    </Content>
  );
};

export default RecommandMenu;
