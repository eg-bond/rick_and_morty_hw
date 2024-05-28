import { Link } from 'react-router-dom'
import locations from '../assets/location.json'

function Item({ name, to }: { name: string; to: string }) {
  return (
    <div>
      <Link to={`${to}`}>{name}</Link>
    </div>
  )
}

function Locations() {
  return (
    <div>
      {locations.map(item => (
        <Item key={item.id} name={item.name} to={item.id.toString()} />
      ))}
    </div>
  )
}

export default Locations
