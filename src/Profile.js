import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: "",
    };
  }

  render() {
    return (
      <View style={styles.profile}>
        <Text>welcome to andijaya food</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  profile: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});