import React from 'react';
import { AddIcon } from '@chakra-ui/icons';
import { Circle, Flex, useDisclosure } from '@chakra-ui/react';
import CategoryModal from './CategoryModal';

const AddCategory = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Flex
        justifyContent="flex-end"
        marginRight="20px"
        position="sticky"
        bottom="8%"
        alignSelf="flex-end"
      >
        <Circle
          size="50px"
          bg="#5096FF"
          color="white"
          textAlign="right"
          mb="20px"
          cursor="pointer"
          onClick={onOpen}
        >
          <AddIcon />
        </Circle>
      </Flex>
      <CategoryModal isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default AddCategory;
