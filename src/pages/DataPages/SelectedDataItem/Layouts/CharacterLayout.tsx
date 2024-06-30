import { Link } from 'react-router-dom';
import { AppRoutes } from '@/types/routesTypes';
import type { CharactersDataT } from '@/types/dataPagesTypes';
import { Button, Table } from '@mantine/core';
import { LayoutsStyles } from '@/types/stylesTypes';

interface CharacterLayoutProps {
  character: CharactersDataT;
  route: AppRoutes.Characters;
}

function CharacterLayout({ character, route }: CharacterLayoutProps) {
  return (
    <>
      <Table withColumnBorders withTableBorder>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Имя</Table.Th>
            <Table.Th>Статус</Table.Th>
            <Table.Th>Вид</Table.Th>
            <Table.Th>Пол</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          <Table.Td>{character.name}</Table.Td>
          <Table.Td>{character.status}</Table.Td>
          <Table.Td>{character.species}</Table.Td>
          <Table.Td>{character.gender}</Table.Td>
        </Table.Tbody>
      </Table>

      <Button
        to={`/${route}`}
        color={LayoutsStyles.CLR}
        mt={LayoutsStyles.MT}
        component={Link}>
        Вернуться к выбору персонажа
      </Button>
    </>
  );
}

export default CharacterLayout;
