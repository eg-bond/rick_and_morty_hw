import { useOutletContext, useParams } from 'react-router-dom';
import { getDataItem } from '@/utils/getDataItem';
import type { DataPagesOutletContextT } from '@/types/dataPagesTypes';
import ItemLayout from './Layouts/ItemLayout';

export function SelectedDataItem() {
  const { id } = useParams<{ id: string }>();
  const { data, route } = useOutletContext<DataPagesOutletContextT>();
  const dataItem = getDataItem(data, id);

  if (!dataItem) {
    return null;
  }

  return <ItemLayout dataItem={dataItem} route={route} />;
}
