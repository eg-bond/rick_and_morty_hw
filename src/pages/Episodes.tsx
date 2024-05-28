import { Link } from 'react-router-dom'
import episodes from '../assets/episode.json'

function Item({ name, to }: { name: string; to: string }) {
  return (
    <div>
      <Link to={`${to}`}>{name}</Link>
    </div>
  )
}

function Episodes() {
  return (
    <div>
      {episodes.map(item => (
        <Item name={item.name} to={item.id.toString()} />
      ))}
    </div>
  )
}

export default Episodes
