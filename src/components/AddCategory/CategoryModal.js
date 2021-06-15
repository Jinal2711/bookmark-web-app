import React from 'react';
import {
  Circle,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Grid,
  Box,
} from '@chakra-ui/react';

import { CloseIcon } from '@chakra-ui/icons';

const CategoryModal = ({ isOpen, onClose }) => {
  const initialRef = React.useRef();
  const finalRef = React.useRef();
  const bgColors = [
    '#5096FF',
    '#BE53A7',
    '#8BA101',
    '#6D6BBD',
    '#989898',
    '#3E5577',
    '#DF7453',
    '#78CFEB',
    '#714E4E',
    '#1BC759',
  ];
 
  return (
    <Modal
      initialFocusRef={initialRef}
      finalFocusRef={finalRef}
      isOpen={isOpen}
      onClose={onClose}
    >
      <ModalOverlay />
      <ModalContent pt={3}>
        
        <Circle
          size="25px"
          bg="red.500"
          color="white"
          textAlign="right"
          mb="20px"
          cursor="pointer"
          onClick={onClose}
          position="absolute"
          top={-3}
          right={-3}
        >
          <CloseIcon fontSize="10px" fontWeight={800} />
        </Circle>
        <ModalBody pb={6}>
          <FormControl>
            <FormLabel>Name</FormLabel>
            <Input ref={initialRef} placeholder="Name" />
          </FormControl>
          <FormControl mt={4}>
            <FormLabel>Color</FormLabel>
          </FormControl>
          <Grid templateColumns={["repeat(2, 1fr)","repeat(3, 1fr)","repeat(4, 1fr)","repeat(5, 1fr)"]} gap={6}>
            {bgColors.map((color, i) => (
              <Circle
                key={i}
                size="60px"
                bg={color}
                color="white"
                textAlign="right"
                cursor="pointer"
              />
            ))}
          </Grid>
          <Box
            as="button"
            borderRadius="md"
            bg="#5096FF"
            color="white"
            px={12}
            mt={6}
            h={8}
          >
            Save
          </Box>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default CategoryModal;
