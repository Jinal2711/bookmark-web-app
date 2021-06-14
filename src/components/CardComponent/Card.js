import React, { useState } from 'react';
import { Box, Flex, Heading, HStack, Spacer, Text } from '@chakra-ui/react';
import { EditIcon, CopyIcon, DeleteIcon } from '@chakra-ui/icons';

const Card = ({ title, link, icon, ...rest }) => {
  const [isHover, setIsHover] = useState(false);
  return (
    <Box
      p={5}
      shadow="sm"
      {...rest}
      borderRadius="md"
      border="1px solid rgb(247 247 247)"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <Flex>
        <Box>
          <Heading fontSize="20px" fontWeight="500">
            {title}
          </Heading>
          <Box as="a" color="#5096FF" href="#" fontWeight="bold">
            <HStack>
              {icon}
              <Text>{link}</Text>
            </HStack>
          </Box>
        </Box>
        <Spacer />

        {isHover && (
          <Box>
            <EditIcon mr="2" cursor="pointer" />
            <CopyIcon mr="2" cursor="pointer" />
            <DeleteIcon cursor="pointer" />
          </Box>
        )}
      </Flex>
    </Box>
  );
};

export default Card;
