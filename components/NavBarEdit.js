import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import Button from 'react-native-button';

const NavBarEdit = () => {
  const [activeButton, setActiveButton] = useState({
    personal: false,
    security: false,
    others: true,
  });
  return (
    <View style={styles.container}>
      <Button
        onPress={() =>
          setActiveButton({
            personal: true,
            security: false,
            others: false,
          })
        }
        style={StyleSheet.flatten([
          styles.tab,
          activeButton.personal && styles.active,
        ])}
        containerStyle={StyleSheet.flatten([
          styles.tabContainer,
          activeButton.personal && styles.activeContainer,
        ])}>
        Personal
      </Button>
      <Button
        onPress={() =>
          setActiveButton({
            personal: false,
            security: true,
            others: false,
          })
        }
        style={StyleSheet.flatten([
          styles.tab,
          activeButton.security && styles.active,
        ])}
        containerStyle={StyleSheet.flatten([
          styles.tabContainer,
          activeButton.security && styles.activeContainer,
        ])}>
        Security
      </Button>
      <Button
        onPress={() =>
          setActiveButton({
            personal: false,
            security: false,
            others: true,
          })
        }
        style={StyleSheet.flatten([
          styles.tab,
          activeButton.others && styles.active,
        ])}
        containerStyle={StyleSheet.flatten([
          styles.tabContainer,
          activeButton.others && styles.activeContainer,
        ])}>
        Others
      </Button>
    </View>
  );
};

export default NavBarEdit;

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
    marginBottom: 16,
    alignItems: 'center',
    justifyContent: 'space-around',
    borderWidth: 1,
    borderColor: '#eaeefd',
    borderRadius: 8,
    flexDirection: 'row',
  },
  tab: {
    borderRadius: 5,
    fontSize: 14,
    color: '#777',
  },
  tabContainer: {
    marginTop: 8,
    marginBottom: 8,
    paddingTop: 2,
    paddingBottom: 2,
    width: '33.3%',
    borderRightWidth: 1,
    borderRightColor: '#eaeefd',
    backgroundColor: '#fff',
  },
  active: {
    color: 'white',
  },
  activeContainer: {
    marginTop: 0,
    marginBottom: 0,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 8,
    backgroundColor: '#274fed',
  },
});
