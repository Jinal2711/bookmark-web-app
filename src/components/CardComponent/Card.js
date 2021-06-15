import React from 'react';
import { Box, Flex, Spacer, VStack } from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';
import BookMarkLinks from './BookMarkLinks';
import CardEdit from './CardEdit';

const Card = ({onOpen, color, heading, title, link, icon}) => {
  return (
    <Box borderRadius="lg" overflow="hidden" mt={4}>
      <Box bg={color} p={3} color="white">
        <Flex>
          <Box fontWeight="600">{heading}</Box>
          <Spacer />
          <Box>
            <AddIcon mr="2" cursor="pointer" onClick={onOpen} />
            <CardEdit />
          </Box>
        </Flex>
      </Box>
      <Box p={2}>
        <VStack align="stretch">
          <BookMarkLinks
            title={title}
            link={link}
            icon={icon}
          />
          <BookMarkLinks
            title={title}
            link={link}
            icon={icon}
          />
          <BookMarkLinks
            title={title}
            link={link}
            icon={icon}
          />
        </VStack>
      </Box>
    </Box>
  );
};

export default Card;
