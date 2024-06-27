import { useEffect, useState } from 'react';
import {
  useLocation,
  useOutletContext,
  useSearchParams,
} from 'react-router-dom';
import { SortingTypes, sort } from '@/utils/sort';
import s from './listData.module.css';
import { DataItem } from './DataItem';
import { useLastNodeRef } from '@/hooks/useLastNodeRef';
import { Flex } from '@mantine/core';
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

  function handleSorting(type: SortingTypes | null) {
    //@ts-ignore
    setSearchParams(prev => ({ ...prev, sort: type }));
  }

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
      <div className={s.sort}>
        <button onClick={() => handleSorting(SortingTypes.DESC)}>
          По убыванию
        </button>
        <button onClick={() => handleSorting(SortingTypes.ASC)}>
          По возрастанию
        </button>
      </div>

      {loading && <div>...Loading data</div>}

      <Flex
        gap='lg'
        justify='center'
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
