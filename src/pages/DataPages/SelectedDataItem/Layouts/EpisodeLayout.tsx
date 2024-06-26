import { Link } from 'react-router-dom';
import { AppRoutes } from '@/types/routesTypes';
import type { EpisodeDataT } from '@/types/dataPagesTypes';

interface EpisodeLayoutProps {
  episode: EpisodeDataT;
  route: AppRoutes.Episodes;
}

function EpisodeLayout({ episode, route }: EpisodeLayoutProps) {
  return (
    <>
      <div>
        <p>Название серии: {episode.name}</p>
        <p>Дата выхода серии: {episode.air_date}</p>
        <p>Код эпизода: {episode.episode}</p>
      </div>
      <Link to={`/${route}`}>Вернуться к выбору эпизода</Link>
    </>
  );
}

export default EpisodeLayout;
