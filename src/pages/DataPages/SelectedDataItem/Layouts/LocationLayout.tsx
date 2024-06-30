import { Link } from 'react-router-dom';
import { AppRoutes } from '@/types/routesTypes';
import { Button, Table } from '@mantine/core';
import type { LocationDataT } from '@/types/dataPagesTypes';
import { LayoutsStyles } from '@/types/stylesTypes';

interface LocationLayoutProps {
  location: LocationDataT;
  route: AppRoutes.Locations;
}

function LocationLayout({ location, route }: LocationLayoutProps) {
  return (
    <>
      <Table withColumnBorders withTableBorder>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Название</Table.Th>
            <Table.Th>Тип</Table.Th>
            <Table.Th>Измерение</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          <Table.Td>{location.name}</Table.Td>
          <Table.Td>{location.type}</Table.Td>
          <Table.Td>{location.dimension}</Table.Td>
        </Table.Tbody>
      </Table>

      <Button
        to={`/${route}`}
        color={LayoutsStyles.CLR}
        mt={LayoutsStyles.MT}
        component={Link}>
        Вернуться к выбору локации
      </Button>
    </>
  );
}

export default LocationLayout;
