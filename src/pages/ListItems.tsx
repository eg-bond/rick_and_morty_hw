import { useEffect, useState } from 'react'
import { Link, useOutletContext } from 'react-router-dom'

type ItemT = {
  id: number
  name: string
  created: string
}

type SortingTypeT = 'ASC' | 'DESC'
// { items }: { items: ItemT[] }
function ListItems() {
  const { items } = useOutletContext()
  const [list, setList] = useState(items)

  function sort(type: SortingTypeT) {
    const sorted = [...items].sort((a, b) => {
      const dateA = Number(new Date(a.created))
      const dateB = Number(new Date(b.created))
      return type === 'ASC' ? dateA - dateB : dateB - dateA
    })
    setList(sorted)
  }

  useEffect(() => {
    setList(items)
  }, [items])

  return (
    <div>
      <button onClick={() => sort('DESC')}>Сортировать по убыванию</button>
      <button onClick={() => sort('ASC')}>Сортировать по возрастанию</button>
      {list.map(item => (
        <Item key={item.id} name={item.name} to={item.id.toString()} />
      ))}
    </div>
  )
}

function Item({ name, to }: { name: string; to: string }) {
  return (
    <div>
      <Link to={`${to}`}>{name}</Link>
    </div>
  )
}

export default ListItems
