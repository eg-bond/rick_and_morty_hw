import { useEffect, useState } from 'react';
import { useOutletContext, useSearchParams } from 'react-router-dom';
import { SortingTypes, SortingTypesT, sort } from '@/helpers';
import s from './listData.module.css';
import type { AllPossibleDataArraysT, DataPagesOutletContextT } from '@/types';
import { DataItem } from './DataItem';
import { useLastNodeRef } from '@/hooks/useLastNodeRef';

export function ListData() {
  const { data, loading, hasMore, setPageNumber } =
    useOutletContext<DataPagesOutletContextT>();
  const [searchParams, setSearchParams] = useSearchParams();
  const [list, setList] = useState(data);

  // infinity scroll
  const LAST_NODE_INDEX = 10;
  const lastNodeRef = useLastNodeRef({ loading, hasMore, setPageNumber });

  function handleSorting(type: SortingTypesT) {
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
      const sorted = sort(searchParams.get('sort') as SortingTypesT, data);
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

      {list.map((item, i) => (
        <DataItem
          item={item}
          isLastNode={i > list.length - LAST_NODE_INDEX}
          lastNodeRef={lastNodeRef}
          key={item.id}
        />
      ))}
    </div>
  );
}
