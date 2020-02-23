import React from "react";
import { View, Text } from "react-native";

import Input from './Input';
import Button from './Button';

const Form = () => {
  return (
    <View>
      <Input label="Date of Birth" datePicker icon="calendar" />
      <Input label="Gender" picker icon="venus-mars" />
      <Input label="Residential Address" textInput icon="home" />
      <Input label="Education Level" picker icon="graduation-cap" />
      <Input label="Nationality" picker icon="flag"/>
      <Input label="Employment Status" picker icon="suitcase" />
      <Input label="Marital Status" picker icon="life-ring" />
      <Input label="Guarantor's Name" textInput icon="user" />
      <Input label="Relationship" picker icon="link" />
      <Input label="Guarantor's Address" textInput icon="home" />
      <Input label="Guarantor's Contact Number" textInput icon="phone" />
    </View>
  );
};

export default Form;
