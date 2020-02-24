import React from "react";
import { StyleSheet, View } from "react-native";

import Input from "./Input";

const Form = () => {
  

  return (
    <View style={styles.container}>
      <Input size={50} label="Date of Birth" datePicker icon="calendar" />
      <Input size={40} label="Gender" picker icon="venus-mars" />
      <Input size={95} label="Residential Address" textInput icon="home" />
      <Input size={50} label="Education Level" picker icon="graduation-cap" />
      <Input size={40} label="Nationality" picker icon="flag" />
      <Input size={50} label="Employment Status" picker icon="suitcase" />
      <Input size={40} label="Marital Status" picker icon="life-ring" />
      <Input size={50} label="Guarantor's Name" textInput icon="user" />
      <Input size={40} label="Relationship" picker icon="link" />
      <Input size={50} label="Guarantor's Address" textInput icon="home" />
      <Input
        size={40}
        label="Guarantor's Contact Number"
        textInput
        icon="phone"
      />
    </View>
  );
};

export default Form;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around"
  }
});
