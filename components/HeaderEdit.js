import React from 'react';
import {View} from 'react-native';

import TopBarEdit from './TopBarEdit';
import NavBarEdit from './NavBarEdit';
import TitleEdit from './TitleEdit';

const Header = () => {
  return (
    <View>
      <TopBarEdit />
      <TitleEdit />
      <NavBarEdit />
    </View>
  );
};

export default Header;
