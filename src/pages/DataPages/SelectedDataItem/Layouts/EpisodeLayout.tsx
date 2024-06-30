import { Link } from 'react-router-dom';
import { AppRoutes } from '@/types/routesTypes';
import type { EpisodeDataT } from '@/types/dataPagesTypes';
import { getSeasonAndEpisode } from '@/utils/getSeasonAndEpisode';
import { Button, Table } from '@mantine/core';
import { LayoutsStyles } from '@/types/stylesTypes';

interface EpisodeLayoutProps {
  episode: EpisodeDataT;
  route: AppRoutes.Episodes;
}

function EpisodeLayout({ episode, route }: EpisodeLayoutProps) {
  const { season, ep } = getSeasonAndEpisode(episode.episode);

  return (
    <>
      <Table withColumnBorders withTableBorder>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Название серии</Table.Th>
            <Table.Th>Дата выхода серии</Table.Th>
            <Table.Th>Сезон</Table.Th>
            <Table.Th>Серия</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          <Table.Td>{episode.name}</Table.Td>
          <Table.Td>{episode.air_date}</Table.Td>
          <Table.Td>{season}</Table.Td>
          <Table.Td>{ep}</Table.Td>
        </Table.Tbody>
      </Table>

      <Button
        to={`/${route}`}
        color={LayoutsStyles.CLR}
        mt={LayoutsStyles.MT}
        component={Link}>
        Вернуться к выбору эпизода
      </Button>
    </>
  );
}

export default EpisodeLayout;
