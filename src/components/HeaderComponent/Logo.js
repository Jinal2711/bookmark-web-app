import { Flex, Text } from '@chakra-ui/react';
import React from 'react';

const Logo = () => {
  return (
    <Flex justify="end">
      <Text
        fontWeight="700"
        fontSize="30px"
        lineHeight="150%"
        letterSpacing="0.05em"
      >
        Bookmark
        <Text color="#5096FF" as="span">
          Hub
        </Text>
      </Text>
    </Flex>
  );
};

export default Logo;
