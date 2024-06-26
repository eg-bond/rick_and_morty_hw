import { Outlet } from 'react-router-dom';
import { useDataFromApi } from '@/hooks/useDataFromApi';
import { useEffect, useState } from 'react';
import { AppRoutes } from '@/types/routesTypes';

interface DataPagesOutletProps {
  apiURL: string;
  route: AppRoutes;
}

const INITIAL_PAGE = 1;

export function DataPagesOutlet({ apiURL, route }: DataPagesOutletProps) {
  const [pageNumber, setPageNumber] = useState(INITIAL_PAGE);

  useEffect(() => {
    setPageNumber(INITIAL_PAGE);
  }, [apiURL]);

  const { data, loading, hasMore } = useDataFromApi(apiURL, pageNumber);

  return <Outlet context={{ data, loading, route, hasMore, setPageNumber }} />;
}
