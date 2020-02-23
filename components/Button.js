import React from "react";
import { StyleSheet, View, Button, Alert } from "react-native";

const ButtonComponent = () => {
  return (
    <View style={styles.container}>
      <Button
        title="Next"
        color="#274fed"
        onPress={() => Alert.alert("Simple Button pressed")}
      />
    </View>
  );
};

export default ButtonComponent;

const styles = StyleSheet.create({
  container: {
    paddingTop: 16,
    paddingBottom: 16,
  }
});
