import React from "react";
import { View, Text } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

const Input = ({ label, icon }) => {
  return (
    <View>
      <FontAwesomeIcon icon={icon} />
      <Text>{label}</Text>
    </View>
  );
};

export default Input;
