import React from 'react';
import {
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
} from '@chakra-ui/react';
import { DragHandleIcon } from '@chakra-ui/icons';

const CardEdit = () => {
  return (
    <Menu isLazy>
      <MenuButton>
        <DragHandleIcon cursor="pointer" />
      </MenuButton>
      <MenuList>
        <MenuItem>Edit</MenuItem>
        <MenuDivider />
        <MenuItem>Delete</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default CardEdit;
