import React from 'react';
import {StyleSheet, View, Button} from 'react-native';

const ButtonComponent = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Button
        title="Next"
        color="#274fed"
        onPress={() => navigation.navigate('Edit')}
      />
    </View>
  );
};

export default ButtonComponent;

const styles = StyleSheet.create({
  container: {
    paddingTop: 16,
    paddingBottom: 16,
  },
});
