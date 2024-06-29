import { useEffect, useState } from 'react';
import { useLocation, useOutletContext } from 'react-router-dom';
import { DataItem } from './DataItem';
import { useLastNodeRef } from '@/hooks/useLastNodeRef';
import { Flex, Loader } from '@mantine/core';
import { SortingMenu } from '@/components/SortingMenu';
import type { DataPagesOutletContextT } from '@/types/dataPagesTypes';
import { ScrollToTop } from '@/components/ScrollToTop/ScrollToTop';

export function ListData() {
  const { data, loading, hasMore, setPageNumber } =
    useOutletContext<DataPagesOutletContextT>();
  const [list, setList] = useState(data);
  const location = useLocation();

  // infinity scroll
  const LAST_NODE_INDEX = 15;
  const lastNodeRef = useLastNodeRef({ loading, hasMore, setPageNumber });

  // updates list than new data comes
  useEffect(() => {
    setList(data);
  }, [data]);

  return (
    <div>
      <ScrollToTop />
      <SortingMenu setList={setList} data={data} />

      <Flex
        justify='space-between'
        columnGap={'sm'}
        align='flex-start'
        direction='row'
        wrap='wrap'>
        {list.map((item, i) => (
          <DataItem
            item={item}
            isLastNode={i > list.length - LAST_NODE_INDEX}
            lastNodeRef={lastNodeRef}
            pathname={location.pathname}
            key={item.id}
          />
        ))}
      </Flex>

      {loading && (
        <Flex justify='center' align='center'>
          <Loader color='blue' size={50} />
        </Flex>
      )}
    </div>
  );
}
