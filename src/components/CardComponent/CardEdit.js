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
        <MenuItem color="black">Edit</MenuItem>
        <MenuDivider />
        <MenuItem color="black">Delete</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default CardEdit;
