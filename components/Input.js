import React, { useState } from "react";
import { StyleSheet, View, Text, Picker } from "react-native";
// import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import DateTimePicker from "@react-native-community/datetimepicker";

const Input = ({ label, icon, size, datePicker }) => {
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;

    setDate(currentDate);
    setShow(Platform.OS === "ios" ? true : false);
  };

  const showMode = currentMode => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    console.log('object')
    showMode("date");
  };

  return (
    <View style={StyleSheet.flatten([styles.container, { width: `${size}%` }])}>
      {/* <FontAwesomeIcon color="rgba(100,100,100,.4)" icon={icon} /> */}
      <View style={styles.textContainer}>
        <Text style={styles.label}>{label}</Text>
        {datePicker && (
          <Picker
            selectedValue={new Date(date).toLocaleDateString("us-EN", {
              year: "numeric",
              month: "long",
              day: "numeric"
            })}
            // style={{ height: 50, width: 100 }}
            onClick={showDatepicker}
            // onValueChange={}
          ></Picker>
        )}
        {datePicker && show && (
          <DateTimePicker
            testID="dateTimePicker"
            timeZoneOffsetInMinutes={0}
            value={date}
            mode={mode}
            is24Hour={true}
            display="default"
            onChange={onChange}
          />
        )}
        {/* <Text>Text</Text> */}
      </View>
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    borderBottomColor: "rgba(100,100,100,.2)",
    borderBottomWidth: 1,
    paddingBottom: 8,
    paddingTop: 8,
    flexDirection: "row",
    alignItems: "flex-end",
    marginBottom: 16
  },
  textContainer: {
    flexDirection: "column",
    marginLeft: 8
  },
  label: {
    color: "#274fed",
    fontSize: 7.5
  }
});
