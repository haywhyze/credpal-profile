import React from 'react';
import {SafeAreaView, StyleSheet, ScrollView, View, Text} from 'react-native';

import HeaderEdit from './HeaderEdit';
import FormEdit from './FormEdit';

const EditProfile = ({navigation}) => {
  return (
    <>
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <View style={styles.container}>
            <HeaderEdit navigation={navigation} />
            <FormEdit />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: 'white',
  },
  container: {
    flex: 1,
    padding: 32,
  },
});

export default EditProfile;
