// Header.js
import React, { useState } from 'react';
import Navigation from './Navigation';

const Header = () => {
  const [selectedPage, setSelectedPage] = useState('');

  return (
    <header>
      <Navigation selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
    </header>
  );
};

export default Header;
