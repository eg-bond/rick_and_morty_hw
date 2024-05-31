import { useOutletContext, useParams } from 'react-router-dom'
import { getDataItem } from '../../helpers'
import ItemLayout from '../Layouts/ItemLayout'
import type { OutletContextT } from '../../types'

function SelectedDataItem() {
  const { id } = useParams<{ id: string }>()
  const { data, url } = useOutletContext<OutletContextT>()
  const dataItem = getDataItem(data, id)

  if (!dataItem) {
    return null
  }

  return <ItemLayout dataItem={dataItem} url={url} />
}

export default SelectedDataItem
