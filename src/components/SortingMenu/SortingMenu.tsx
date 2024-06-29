import { AllPossibleDataArraysT } from '@/types/dataPagesTypes';
import { SortingTypes, sort } from '@/utils/sort';
import { Menu, Button } from '@mantine/core';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const menuItems = [
  { text: 'По возрастанию', sortType: SortingTypes.ASC },
  { text: 'По убыванию', sortType: SortingTypes.DESC },
];

interface SortingMenuProps {
  setList: React.Dispatch<React.SetStateAction<AllPossibleDataArraysT>>;
  data: AllPossibleDataArraysT;
}

export function SortingMenu({ setList, data }: SortingMenuProps) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [targetText, setTargetText] = useState(menuItems[0].text);
  const [opened, setOpened] = useState(false);

  function handleChange(type: SortingTypes) {
    //@ts-ignore
    setSearchParams(prev => ({ ...prev, sort: type }));
    setOpened(false);
  }

  // sets proper targetText than searchParams changed
  useEffect(() => {
    const sortParam = searchParams.get('sort');
    if (sortParam === null || sortParam === SortingTypes.ASC) {
      setTargetText(menuItems[0].text);
    } else {
      setTargetText(menuItems[1].text);
    }
  }, [searchParams]);

  // sorts list if 'sort' query parameter exists
  useEffect(() => {
    if (searchParams.get('sort') !== null) {
      const sorted = sort(searchParams.get('sort') as SortingTypes, data);
      setList(sorted as AllPossibleDataArraysT);
    }
  }, [searchParams]);

  return (
    <Menu opened={opened} onChange={setOpened} shadow='md' width={200}>
      <Menu.Target>
        <Button>{targetText}</Button>
      </Menu.Target>

      <Menu.Dropdown ml={'0.7rem'}>
        {menuItems.map(item => (
          <Menu.Item
            key={item.sortType}
            onClick={() => handleChange(item.sortType)}>
            {item.text}
          </Menu.Item>
        ))}
      </Menu.Dropdown>
    </Menu>
  );
}
