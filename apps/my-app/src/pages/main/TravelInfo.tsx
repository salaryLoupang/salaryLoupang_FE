import React from 'react';
import { dehydrate, QueryClient, useQuery } from '@tanstack/react-query';

import { Content } from 'components/Content';

import { getTravel } from 'api/requesTravel';

export async function getStaticProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(['travel'], getTravel);

  return {
    props: {
      dehydrateState: dehydrate(queryClient),
    },
  };
}

const TravelInfo = () => {
  const { data: { data } = {} } = useQuery(['travel'], getTravel);

  return (
    <Content
      title="여행 어디까지 가볼까?"
      img={data?.imgUrl}
      contentTitle={data?.title}
    >
      {data?.description}
    </Content>
  );
};

export default TravelInfo;
