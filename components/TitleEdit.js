import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const TitleEdit = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Edit Profile</Text>
    </View>
  );
};

export default TitleEdit;

const styles = StyleSheet.create({
  container: {
    paddingBottom: 4,
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    paddingBottom: 8,
  },
});
