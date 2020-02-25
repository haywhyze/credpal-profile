import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Button from './Button';
import Icon from 'react-native-vector-icons/SimpleLineIcons';

const Footer = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Button navigation={navigation} />
      <View style={styles.textContainer}>
        <Icon name="lock" color="#888" />
        <Text style={styles.text}>Your data is secure.</Text>
      </View>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  container: {
    width: '60%',
  },
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#888',
    marginLeft: 5,
    fontSize: 12,
  },
});
