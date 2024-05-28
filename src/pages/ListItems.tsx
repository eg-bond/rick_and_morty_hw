import { Link } from 'react-router-dom'

type ItemT = {
  id: number
  name: string
}

function ListItems({ items }: { items: ItemT[] }) {
  return (
    <div>
      {items.map(item => (
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
