import { Link } from 'react-router-dom';
import { AppRoutes } from '@/types/routesTypes';
import type { EpisodeDataT } from '@/types/dataPagesTypes';
import { getSeasonAndEpisode } from '@/utils/getSeasonAndEpisode';

interface EpisodeLayoutProps {
  episode: EpisodeDataT;
  route: AppRoutes.Episodes;
}

function EpisodeLayout({ episode, route }: EpisodeLayoutProps) {
  const { season, ep } = getSeasonAndEpisode(episode.episode);

  return (
    <>
      <div>
        <p>Название серии: {episode.name}</p>
        <p>Дата выхода серии: {episode.air_date}</p>
        <p>Сезон: {season}</p>
        <p>Серия: {ep}</p>
      </div>
      <Link to={`/${route}`}>Вернуться к выбору эпизода</Link>
    </>
  );
}

export default EpisodeLayout;
