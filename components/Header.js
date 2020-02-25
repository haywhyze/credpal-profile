import React from 'react';
import {View} from 'react-native';

import TopBar from './TopBar';
import NavBar from './NavBar';
import Title from './Title';

const Header = () => {
  return (
    <View>
      <TopBar />
      <NavBar />
      <Title />
    </View>
  );
};

export default Header;
