import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

type ItemT = {
  id: number
  name: string
  created: string
}

type SortingTypeT = 'ASC' | 'DESC'

function ListItems({ items }: { items: ItemT[] }) {
  const [list, setList] = useState(items)

  function sort(type: SortingTypeT) {
    const sorted = [...items].sort((a, b) => {
      const dateA = new Date(a.created)
      const dateB = new Date(b.created)
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
