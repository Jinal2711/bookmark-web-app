import React from 'react';
import { CloseIcon } from '@chakra-ui/icons';
import {
  Box,
  Circle,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
} from '@chakra-ui/react';

const BookMarkModal = ({ isOpen, onClose }) => {
  const initialRef = React.useRef();
  const finalRef = React.useRef();
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
            <FormLabel>Url</FormLabel>
            <Input />
          </FormControl>
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

export default BookMarkModal;
