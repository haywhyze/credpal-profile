import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

const TopBar = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        <Icon name="chevron-thin-left" size={16} />
      </Text>
      <Text style={styles.text}>Step 1 of 5</Text>
    </View>
  );
};

export default TopBar;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingBottom: 16,
  },
  text: {
    color: '#555',
  },
});
