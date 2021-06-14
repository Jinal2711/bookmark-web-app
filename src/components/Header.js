import React from 'react';
import {
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  Text,
  InputGroup,
  Input,
  InputRightElement,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Avatar,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, SearchIcon } from '@chakra-ui/icons';

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box px={4} pt={6}>
      <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
        <IconButton
          size={'md'}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label={'Open Menu'}
          display={{ md: 'none' }}
          onClick={isOpen ? onClose : onOpen}
        />
        <HStack spacing={8} alignItems={'center'}>
          <Box>
            <Text
              fontWeight="700"
              fontSize="30px"
              lineHeight="150%"
              letterSpacing="0.05em"
              textAlign="right"
            >
              Bookmark
              <Text color="#5096FF" as="span">
                Hub
              </Text>
            </Text>
          </Box>
        </HStack>
        <InputGroup width="50%">
          <Input type="tel" placeholder="Search" />
          <InputRightElement
            pointerEvents="none"
            children={<SearchIcon color="#5096FF" />}
          />
        </InputGroup>

        <Menu>
          <MenuButton
            as={Button}
            rightIcon={
              <Avatar
                name="Dan Abrahmov"
                src="https://bit.ly/dan-abramov"
                size="sm"
              />
            }
            variant="ghost"
          >
            Your Cats
          </MenuButton>
          <MenuList>
            <MenuItem>
              <Text>Logout</Text>
            </MenuItem>
          </MenuList>
        </Menu>
      </Flex>
    </Box>
  );
};

export default Header;
