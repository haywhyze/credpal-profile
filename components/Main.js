import React from "react";
import { StyleSheet, View } from "react-native";

import Form from './Form';

const Main = () => {
  return (
    <View style={styles.container}>
      <Form />
    </View>
  );
};

export default Main;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start'
  }
});