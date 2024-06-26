import axios, { Canceler } from 'axios';
import { useEffect, useState } from 'react';
import { AllPossibleDataArraysT } from '../types';

export function useDataFromApi(url: string, pageNumber: number) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState<AllPossibleDataArraysT>([]);
  const [hasMore, setHasMore] = useState(false);

  useEffect(() => {
    setData([]);
  }, [url]);

  useEffect(() => {
    setLoading(true);
    setError(false);
    let cancel: Canceler;
    axios({
      method: 'GET',
      url,
      params: { page: pageNumber },
      cancelToken: new axios.CancelToken(c => (cancel = c)),
    })
      .then(res => {
        setLoading(false);
        setData(prev => [...prev, ...res.data.results]);
        setHasMore(res.data.info.next !== null);
      })
      .catch(e => {
        if (axios.isCancel(e)) return;
        setError(true);
        console.error(e);
      });

    return () => cancel();
  }, [url, pageNumber]);

  return {
    loading,
    error,
    data,
    hasMore,
  };
}
