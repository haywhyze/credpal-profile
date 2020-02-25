import React from 'react';
import {StyleSheet, View, Text, TextInput, Picker} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import IconFA from 'react-native-vector-icons/FontAwesome';

const Input = ({
  label,
  icon,
  size,
  picker,
  textInput,
  placeholder,
  pickerItems,
  datePicker,
}) => {
  return (
    <View style={StyleSheet.flatten([styles.container, {width: `${size}%`}])}>
      {icon === 'venus-mars' || icon === 'life-ring' ? (
        <IconFA name={icon} size={16} color="rgba(100,100,100,.5)" />
      ) : (
        <Icon name={icon} size={16} color="rgba(100,100,100,.5)" />
      )}
      <View style={styles.textContainer}>
        <Text style={styles.label}>{label}</Text>
        {textInput && (
          <TextInput placeholder={placeholder} style={styles.textInput} />
        )}
        {picker && (
          <Picker
            selectedValue={pickerItems[0].value}
            style={[styles.picker, {width: size * 3 + 12}]}>
            {pickerItems.map((item, index) => (
              <Picker.Item
                key={`${item.value + item.index}`}
                label={item.label}
                value={item.value}
              />
            ))}
          </Picker>
        )}
        {datePicker && (
          <Picker
            selectedValue={new Date()}
            style={[styles.picker, {width: size * 3 + 12}]}>
            <Picker.Item
              label={new Date().toLocaleDateString('us-EN')}
              value={new Date()}
            />
          </Picker>
        )}
      </View>
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    borderBottomColor: 'rgba(100,100,100,.2)',
    borderBottomWidth: 1,
    paddingBottom: 8,
    paddingTop: 8,
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginBottom: 16,
  },
  textContainer: {
    flexDirection: 'column',
    marginLeft: 8,
  },
  label: {
    color: '#274fed',
    fontSize: 10,
    paddingBottom: 4,
  },
  textInput: {
    height: 16,
    padding: 0,
  },
  picker: {
    height: 20,
    width: 170,
  },

});
