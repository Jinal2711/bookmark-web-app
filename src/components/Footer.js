import React from 'react';
import { Box, HStack, Spacer, Stack, Text } from '@chakra-ui/react';
import { FaInstagram, FaTwitter, FaFacebook } from 'react-icons/fa';
import AddCategory from './AddCategory/AddCategory';

const Footer = () => {
  return (
    <>
      <AddCategory align="right" mb="-20px"/>
      <Box
        as="footer"
        role="contentinfo"
        mx="auto"
        // px={{ base: '4', md: '8' }}
        bg="#5096FF"
        padding="5"
        bottom="0"
        position="fixed"
        w={'100%'}
      >
        <HStack>
          <Text fontSize="sm">
            &copy; {new Date().getFullYear()} Envelope, Inc. All rights
            reserved.
          </Text>
          <Spacer />
          <Stack
            direction="row"
            spacing="4"
            align="center"
            justify="space-between"
          >
            <FaTwitter />
            <FaInstagram />
            <FaFacebook />
          </Stack>
        </HStack>
      </Box>
    </>
  );
};

export default Footer;
