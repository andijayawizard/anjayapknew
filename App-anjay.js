import {
  Container
} from "native-base";
import React, { Component } from "react";
import { StyleSheet } from "react-native";
// import FooterTabs from "./src/scren/Footer";
import Login from "./src/scren/Login";
import Navbar from "./src/scren/Navbar";

export default class App extends Component {
  render() {
    return (
      <Container>
        <Navbar />
        <Login />
        {/* <FooterTabs /> */}
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  headermenu: {
    marginTop: 20,
    color: "white",
    alignItems: "center",
    justifyContent: "center",
  },
});
