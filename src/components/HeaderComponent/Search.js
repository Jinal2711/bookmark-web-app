import { SearchIcon } from '@chakra-ui/icons';
import { Input, InputGroup, InputRightElement } from '@chakra-ui/react';
import React from 'react';

const Search = () => {
  return (
    <InputGroup width="50%">
      <Input type="tel" placeholder="Search" />
      <InputRightElement
        pointerEvents="none"
        children={<SearchIcon color="#5096FF" />}
      />
    </InputGroup>
  );
};

export default Search;
