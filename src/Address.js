import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";

export default class Address extends Component {
  render() {
    return (
      <View style={styles.address}>
        <Text> tempat tinggal anda beralamat di jaksel </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  address: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
