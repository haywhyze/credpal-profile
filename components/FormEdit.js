import React from "react";
import { StyleSheet, View, Text, TextInput, Picker } from "react-native";

const FormEdit = () => {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Employer</Text>
        <TextInput placeholder="CredPal Limited" style={styles.textInput} />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Office Address</Text>
        <TextInput
          placeholder="75, Olonode Street, Lagos"
          style={styles.textInput}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Job Title</Text>
        <TextInput
          placeholder="Graphics & UI/UX Designer"
          style={styles.textInput}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Contract Type</Text>
        <Picker selectedValue="employed" style={styles.picker}>
          <Picker.Item label="Employed" value="employed" />
          <Picker.Item label="Non-Employed" value="nonemployed" />
          <Picker.Item label="Self-Employed" value="selfemployed" />
        </Picker>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Salary</Text>
        <TextInput placeholder="₦ 840, 000" style={styles.textInput} />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Next of Kin</Text>
        <TextInput placeholder="Yusuf Ayo" style={styles.textInput} />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Relationship</Text>
        <Picker selectedValue="single" style={styles.picker}>
          <Picker.Item label="Single" value="single" />
          <Picker.Item label="Married" value="married" />
          <Picker.Item label="Divorced" value="divorced" />
        </Picker>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Address</Text>
        <TextInput
          placeholder="75, Olonode Street, Lagos"
          style={styles.textInput}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Contact Number</Text>
        <TextInput placeholder="0803 196 1486" style={styles.textInput} />
      </View>
    </View>
  );
};

export default FormEdit;

const styles = StyleSheet.create({
  container: {
    //   flexDirection: 'row',
    //   flexWrap: 'wrap',
    //   justifyContent: 'space-between',
  },
  inputContainer: {
    borderBottomWidth: 1,
    borderBottomColor: "rgba(100,100,100,.2)",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between"
  },
  label: {
    fontWeight: "bold",
    paddingBottom: 16,
    paddingTop: 16
  },
  textInput: {
    padding: 0
  },
  picker: {
    width: 150,
    padding: 0,
  }
});
