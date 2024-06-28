import { useNavigate } from 'react-router-dom';
import type { AllPossibleDataT } from '@/types/dataPagesTypes';
import { Card, Image, Text, Button, Group } from '@mantine/core';
import s from './listData.module.css';
import episodesLogo from '@/assets/images/episodes_logo.png';
import locationsLogo from '@/assets/images/locations_logo.png';
import { Pathnames } from '@/types/routesTypes';

interface DataItemProps {
  item: AllPossibleDataT;
  isLastNode: boolean;
  lastNodeRef: (node: HTMLDivElement | null) => void;
  pathname: Pathnames;
}

export function DataItem({
  item,
  isLastNode,
  lastNodeRef,
  pathname,
}: DataItemProps) {
  const navigate = useNavigate();

  const imgSrc = (pathname: Pathnames) => {
    if (pathname === Pathnames.Episodes) return episodesLogo;
    if (pathname === Pathnames.Locations) return locationsLogo;
    return item.image;
  };

  return (
    <div className={s.item} ref={isLastNode ? lastNodeRef : undefined}>
      <Card
        style={{ width: 360 }}
        shadow='sm'
        padding='lg'
        radius='md'
        withBorder>
        <Card.Section>
          <Image
            fit='fill'
            src={imgSrc(pathname)}
            height={300}
            width={100}
            alt={item.name}
          />
        </Card.Section>

        <Group justify='space-between' mt='md' mb='xs'>
          <Text fw={500}>{item.name}</Text>
        </Group>

        <Button
          onClick={() => navigate(pathname + '/' + item.id)}
          color='blue'
          fullWidth
          mt='md'
          radius='md'>
          Подробнее
        </Button>
      </Card>
    </div>
  );
}
