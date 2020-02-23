import React from "react";
import { StyleSheet, View } from "react-native";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faCalendar,
  faVenusMars,
  faHome,
  faGraduationCap,
  faSuitcase,
  faFlag,
  faLifeRing,
  faUser,
  faLink,
  faPhone,
  faAngleLeft,
  faLock
} from "@fortawesome/free-solid-svg-icons";

import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <Main />
      <Footer />
    </View>
  );
}

library.add(
  faCalendar,
  faPhone,
  faAngleLeft,
  faLifeRing,
  faUser,
  faLink,
  faFlag,
  faVenusMars,
  faGraduationCap,
  faHome,
  faSuitcase,
  faLock,
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 32,
    minHeight: "100vh"
  }
});
