import { Link } from 'react-router-dom';
import type { AppRoutes, LocationDataT } from '@/types';

interface LocationLayoutProps {
  location: LocationDataT;
  route: AppRoutes.Locations;
}

function LocationLayout({ location, route }: LocationLayoutProps) {
  return (
    <>
      <div>
        <p>Название: {location.name}</p>
        <p>Тип: {location.type}</p>
        <p>Измерение: {location.dimension}</p>
      </div>
      <Link to={`/${route}`}>Вернуться к выбору локации</Link>
    </>
  );
}

export default LocationLayout;
