import React, { Component } from "react";
import {
  Dimensions, StyleSheet, Text, TouchableOpacity, View
} from "react-native";
// import icons
import Icon from "react-native-vector-icons/Ionicons";
import Address from "./Address";
import Cart from "./Cart";
// import food
import Food from "./Food";
import Profile from "./Profile";


var { width } = Dimensions.get("window");

console.disableYellowBox = true;

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      module: 1,
    };
  }

  render() {
    return (
      <View>
        <View style={{ width: width, alignItems: "center", marginTop: 20 }}>
          {/* <Image resizeMode="contain" style={{height:60, width:width/2, margin:10}} source={{uri: 'https://tutofox.com/foodapp/foodapp.png'}}/> */}
          <Text style={{ fontWeight: "bold", fontSize: 22 }}>Andijaya Food App</Text>
        </View>
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          {this.state.module == 1 ? (
            <Food />
          ) : this.state.module == 2 ? (
            <Cart />
          ) : this.state.module == 3 ? (
            <Address />
          ) : (
            <Profile />
          )}
          <View style={styles.bottomTab}>
            <TouchableOpacity
              style={styles.itemTab}
              onPress={() => this.setState({ module: 1 })}
            >
              <Icon
                name="md-restaurant"
                size={30}
                color={this.state.module == 1 ? "#900" : "gray"}
              />
              <Text>Food</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.itemTab}
              onPress={() => this.setState({ module: 2 })}
            >
              <Icon
                name="md-basket"
                size={30}
                color={this.state.module == 2 ? "#900" : "gray"}
              />
              <Text>Cart</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.itemTab}
              onPress={() => this.setState({ module: 3 })}
            >
              <Icon
                name="md-map"
                size={30}
                color={this.state.module == 3 ? "#900" : "gray"}
              />
              <Text>Address</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.itemTab}
              onPress={() => this.setState({ module: 4 })}
            >
              <Icon
                name="md-person-circle-outline"
                size={30}
                color={this.state.module == 4 ? "#900" : "gray"}
              />
              <Text>Profile</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bottomTab: {
    height: 60,

    width: width,
    backgroundColor: "orange",
    flexDirection: "row",
    justifyContent: "space-between",
    elevation: 8,
    shadowOpacity: 0.3,
    shadowRadius: 50,
  },
  itemTab: {
    width: width / 4,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
});
