
import React from 'react';
import {
  Avatar,
  Box,
  Stack,
  Text,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';
import MenuItem from './MenuItem';

const MenuLinks = ({ isOpen }) => {
  return (
    <Box
      display={{ base: isOpen ? 'block' : 'none', md: 'block' }}
      flexBasis={{ base: '100%', md: 'auto' }}
    >
      <Stack
        spacing={8}
        align="center"
        justify={['center', 'space-between', 'flex-end', 'flex-end']}
        direction={['column', 'row', 'row', 'row']}
        pt={[4, 4, 0, 0]}
      >
        <MenuItem>
          <Wrap>
            <WrapItem>
              <Avatar
                size="md"
                name="Dan Abrahmov"
                src="https://bit.ly/dan-abramov"
              />
              <Text
                ml={2}
                mt={3}
                fontWeight={['bold', 'bold', '500', '500']}
                fontSize={['20px', '20px', '16px', '16px']}
              >
                Jinal Vaghasiya
              </Text>
            </WrapItem>
          </Wrap>
        </MenuItem>
        <MenuItem>
          <Text
            fontWeight={['bold', 'bold', '500', '500']}
            fontSize={['20px', '20px', '16px', '16px']}
          >
            Logout
          </Text>
        </MenuItem>
      </Stack>
    </Box>
  );
};

export default MenuLinks;
