import React, { useState } from 'react';
import Logo from './Logo';
import MenuToggle from './MenuToggle';
import NavbarContainer from './NavbarContainer';
import MenuLinks from './MenuLinks';
import { Box } from '@chakra-ui/react';
import Search from './Search';

const Header = props => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Box bg={['#3E5577', '#3E5577', 'transparent', 'transparent']}>
      <NavbarContainer {...props}>
        <Logo w="100px" />
        <Search/>
        <MenuToggle toggle={() => setIsOpen(!isOpen)} isOpen={isOpen} />
        <MenuLinks isOpen={isOpen} />
      </NavbarContainer>
    </Box>
  );
};

export default Header;
