import React from 'react';
import {SafeAreaView, StyleSheet, ScrollView, View} from 'react-native';

import Header from './Header';
import Main from './Main';
import Footer from './Footer';

const CreateProfile = ({navigation}) => {
  return (
    <>
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <View style={styles.container}>
            <Header />
            <Main />
            <Footer navigation={navigation} />
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
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 32,
  },
});

export default CreateProfile;
