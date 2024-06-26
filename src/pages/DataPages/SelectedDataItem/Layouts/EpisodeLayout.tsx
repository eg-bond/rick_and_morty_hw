import { Link } from 'react-router-dom';
import type { AppRoutes, EpisodeDataT } from '../../../../types';

function EpisodeLayout({
  episode,
  route,
}: {
  episode: EpisodeDataT;
  route: AppRoutes.Episodes;
}) {
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
