import { SortingTypes } from '@/utils/sort';
import { Menu, Button } from '@mantine/core';
import { useState } from 'react';
import { SetURLSearchParams } from 'react-router-dom';

const menuItems = [
  { text: 'По возрастанию', sortType: SortingTypes.ASC },
  { text: 'По убыванию', sortType: SortingTypes.DESC },
];

interface SortingMenuProps {
  setSearchParams: SetURLSearchParams;
}

export function SortingMenu({ setSearchParams }: SortingMenuProps) {
  const [targetText, setTargetText] = useState(menuItems[0].text);
  const [opened, setOpened] = useState(false);

  function handleChange(type: SortingTypes, title: string) {
    //@ts-ignore
    setSearchParams(prev => ({ ...prev, sort: type }));
    setTargetText(title);
    setOpened(false);
  }

  return (
    <Menu opened={opened} onChange={setOpened} shadow='md' width={200}>
      <Menu.Target>
        <Button>{targetText}</Button>
      </Menu.Target>

      <Menu.Dropdown>
        {menuItems.map(item => (
          <Menu.Item
            key={item.sortType}
            onClick={() => handleChange(item.sortType, item.text)}>
            {item.text}
          </Menu.Item>
        ))}
      </Menu.Dropdown>
    </Menu>
  );
}
