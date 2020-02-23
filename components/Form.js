import React from "react";
import { View, Text } from "react-native";

import Input from './Input';
import Button from './Button';

const Form = () => {
  return (
    <View>
      <Input label="Date of Birth" />
      <Input label="Gender" />
      <Input label="Residential Address" />
      <Input label="Education Level" />
      <Input label="Nationality" />
      <Input label="Employment Status" />
      <Input label="Marital Status" />
      <Input label="Guarantor's Name" />
      <Input label="Relationship" />
      <Input label="Guarantor's Address" />
      <Input label="Guarantor's Contact Number" />
      <Button />
      <Text>Your data is secure.</Text>
    </View>
  );
};

export default Form;
