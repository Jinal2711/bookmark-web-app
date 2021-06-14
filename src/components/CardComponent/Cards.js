import React from 'react';
import {
  Box,
  Flex,
  Spacer,
  useDisclosure,
  VStack,
} from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';
import Card from './Card';
import { FaGithub, FaYoutube } from 'react-icons/fa';
import BookMarkModal from './BookMarkModal';
import CardEdit from './CardEdit';

const Cards = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
    <Flex justify="space-around" mt="50px">
      <Box w="30%" borderWidth="1px" borderRadius="lg" overflow="hidden">
        <Box bg="red.400" p={4}>
          <Flex>
            <Box>Github</Box>
            <Spacer />
            <Box>
              <AddIcon
                mr="2"
                cursor="pointer"
                onClick={onOpen}
              />
              <CardEdit/>
            </Box>
          </Flex>
        </Box>
        <Box p={2}>
          <VStack align="stretch">
            <Card
              title="Flutter"
              link="https://nodejs.org/en/docs/"
              icon={<FaGithub color="black" />}
            />
            <Card
              title="Node.js"
              link="https://nodejs.org/en/docs/"
              icon={<FaGithub color="black" />}
            />
            <Card
              title="Node.js"
              link="https://nodejs.org/en/docs/"
              icon={<FaGithub color="black" />}
            />
          </VStack>
        </Box>
      </Box>

      <Box w="30%" borderWidth="1px" borderRadius="lg" overflow="hidden">
        <Box bg="#6D6BBD" color="white" p={4}>
          <Flex>
            <Box>Youtube</Box>
            <Spacer />
            <Box>
              <AddIcon />
            </Box>
          </Flex>
        </Box>
        <Box p={2}>
          <VStack align="stretch">
            <Card
              title="Node.js"
              link="https://nodejs.org/en/docs/"
              icon={<FaYoutube color="red" />}
            />
            <Card
              title="Flutter"
              link="https://nodejs.org/en/docs/"
              icon={<FaYoutube color="red" />}
            />
            <Card
              title="CSS"
              link="https://nodejs.org/en/docs/"
              icon={<FaYoutube color="red" />}
            />
            <Card
              title="HTML"
              link="https://nodejs.org/en/docs/"
              icon={<FaYoutube color="red" />}
            />
            <Card
              title="Node.js"
              link="https://nodejs.org/en/docs/"
              icon={<FaYoutube color="red" />}
            />
            <Card
              title="Node.js"
              link="https://nodejs.org/en/docs/"
              icon={<FaYoutube color="red" />}
            />
            <Card
              title="Node.js"
              link="https://nodejs.org/en/docs/"
              icon={<FaYoutube color="red" />}
            />
            <Card
              title="Node.js"
              link="https://nodejs.org/en/docs/"
              icon={<FaYoutube color="red" />}
            />
          </VStack>
        </Box>
      </Box>

      <Box w="30%" borderWidth="1px" borderRadius="lg" overflow="hidden">
        <Box bg="#BE53A7" color="white" p={4}>
          <Flex>
            <Box>Javascript</Box>
            <Spacer />
            <Box>
              <AddIcon />
            </Box>
          </Flex>
        </Box>
        <Box p={2}>
          <VStack align="stretch">
            <Card title="Node.js" link="https://nodejs.org/en/docs/" />
            <Card title="Node.js" link="https://nodejs.org/en/docs/" />
            <Card title="Node.js" link="https://nodejs.org/en/docs/" />
          </VStack>
        </Box>
      </Box>
    </Flex>
    <BookMarkModal isOpen={isOpen} onClose={onClose}/>
    </>
  );
};

export default Cards;
