import { useEffect, useState } from 'react';
import {
  useLocation,
  useOutletContext,
  useSearchParams,
} from 'react-router-dom';
import { SortingTypes, sort } from '@/utils/sort';
import { DataItem } from './DataItem';
import { useLastNodeRef } from '@/hooks/useLastNodeRef';
import { Flex } from '@mantine/core';
import { SortingMenu } from '@/component/SortingMenu';
import type {
  AllPossibleDataArraysT,
  DataPagesOutletContextT,
} from '@/types/dataPagesTypes';

export function ListData() {
  const { data, loading, hasMore, setPageNumber } =
    useOutletContext<DataPagesOutletContextT>();
  const [searchParams, setSearchParams] = useSearchParams();
  const [list, setList] = useState(data);
  const location = useLocation();

  // infinity scroll
  const LAST_NODE_INDEX = 15;
  const lastNodeRef = useLastNodeRef({ loading, hasMore, setPageNumber });

  // updates list than new data comes
  useEffect(() => {
    setList(data);
  }, [data]);

  // sorts list if 'sort' query parameter exists
  useEffect(() => {
    if (searchParams.get('sort') !== null) {
      const sorted = sort(searchParams.get('sort') as SortingTypes, data);
      setList(sorted as AllPossibleDataArraysT);
    }
  }, [searchParams]);
  return (
    <div>
      <SortingMenu setSearchParams={setSearchParams} />

      {loading && <div>...Loading data</div>}

      <Flex
        gap='lg'
        justify='space-between'
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
    </div>
  );
}
