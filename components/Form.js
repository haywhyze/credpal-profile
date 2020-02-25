import React from 'react';
import {StyleSheet, View} from 'react-native';

import Input from './Input';

const Form = () => {
  return (
    <View style={styles.container}>
      <Input size={50} label="Date of Birth" datePicker icon="calendar" />
      <Input
        size={40}
        label="Gender"
        picker
        pickerItems={[
          {label: 'Male', value: 'male'},
          {label: 'Female', value: 'female'},
          {label: 'Other', value: 'other'},
        ]}
        icon="venus-mars"
      />
      <Input
        size={95}
        label="Residential Address"
        textInput
        icon="home"
        placeholder="25, Odenike Street, Yaba, Lagos"
      />
      <Input
        size={50}
        label="Education Level"
        picker
        pickerItems={[
          {label: 'High School', value: 'highschool'},
          {label: 'Some College', value: 'somecollege'},
          {label: 'Undergraduate', value: 'undergraduate'},
          {label: 'Graduate', value: 'graduate'},
          {label: 'Postgraduate', value: 'postgraduate'},
        ]}
        icon="graduation-cap"
      />
      <Input
        size={40}
        label="Nationality"
        picker
        pickerItems={[
          {label: 'Nigeria', value: 'nigeria'},
          {label: 'Ghana', value: 'ghana'},
          {label: 'Others', value: 'others'},
        ]}
        icon="flag"
      />
      <Input
        size={50}
        label="Employment Status"
        picker
        pickerItems={[
          {label: 'Non-Employed', value: 'nonemployed'},
          {label: 'Self-Employed', value: 'selfemployed'},
          {label: 'Employed', value: 'employed'},
        ]}
        icon="suitcase"
      />
      <Input
        size={40}
        label="Marital Status"
        picker
        pickerItems={[
          {label: 'Single', value: 'single'},
          {label: 'Married', value: 'married'},
          {label: 'Divorced', value: 'divorced'},
        ]}
        icon="life-ring"
      />
      <Input
        size={50}
        label="Guarantor's Name"
        textInput
        icon="user"
        placeholder="Yusuf Abdulkarim"
      />
      <Input
        size={40}
        label="Relationship"
        picker
        pickerItems={[
          {label: 'Sibling', value: 'sibling'},
          {label: 'Parent', value: 'parent'},
          {label: 'Others', value: 'others'},
        ]}
        icon="link"
      />
      <Input
        size={50}
        label="Guarantor's Address"
        textInput
        icon="home"
        placeholder="Yaba, Lagos"
      />
      <Input
        size={40}
        label="Guarantor's Contact Number"
        textInput
        icon="phone"
        placeholder="0803 196 1496"
      />
    </View>
  );
};

export default Form;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
});
