import React from 'react';
import { Box, Container, Flex, SimpleGrid, useDisclosure } from '@chakra-ui/react';
import { FaGithub, FaYoutube } from 'react-icons/fa';

import BookMarkModal from './BookMarkModal';
import Card from './Card';

const CardList = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cardData = [
    {
      color: '#714E4E',
      heading: 'Github',
      title: 'flutter',
      link: 'https://nodejs.org/en/docs/',
      icon: <FaGithub color="black" />,
    },
    {
      color: '#8BA101',
      heading: 'Youtube',
      title: 'flutter',
      link: 'https://nodejs.org/en/docs/',
      icon: <FaYoutube color="black" />,
    },
    {
      color: '#714E4E',
      heading: 'Github',
      title: 'flutter',
      link: 'https://nodejs.org/en/docs/',
      icon: <FaGithub color="black" />,
    },
    {
      color: '#BE53A7',
      heading: 'Javascript',
      title: 'Closures',
      link: 'https://nodejs.org/en/docs/',
      icon: <FaGithub color="black" />,
    },
  ];

  return (
    <Container maxW="container.xl">
      <SimpleGrid columns={3} spacingX="20px" spacingY="20px">
        {cardData.map((card, i) => {
          return (
            <Card
              onOpen={onOpen}
              color={card.color}
              heading={card.heading}
              title={card.title}
              link={card.link}
              icon={card.icon}
            />
          );
        })}
      </SimpleGrid>
      <BookMarkModal isOpen={isOpen} onClose={onClose} />
    </Container>
  );
};

export default CardList;
