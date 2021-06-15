// import AsyncStorage from '@react-native-community/async-storage';
import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { Component } from "react";
import {
  Dimensions,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import { SliderBox } from "react-native-image-slider-box";
import Icon from "react-native-vector-icons/Ionicons";
var { height, width } = Dimensions.get("window");

export default class Food extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataBanner: [],
      dataCategories: [],
      dataFood: [],
      selectCatg: 0,
    };
  }

  componentDidMount() {
    const url = "http://tutofox.com/foodapp/api.json";
    return fetch(url)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          dataBanner: responseJson.banner,
          dataCategories: responseJson.categories,
          dataFood: responseJson.food,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }
  render() {
    return (
      <ScrollView>
        <View style={{ flex: 1, backgroundColor: "#f2f2f2" }}>
          <View style={{ width: width, alignItems: "center" }}>
            {/* <Image resizeMode="contain" style={{height:60, width:width/2, margin:10}} source={{uri: 'https://tutofox.com/foodapp/foodapp.png'}}/> */}

            <View style={styles.container} onLayout={this.onLayout}>
              <SliderBox
                images={this.state.dataBanner}
                onCurrentImagePressed={(index) =>
                  console.warn(`itembann ${index} pressed`)
                }
                dotColor="#FFEE58"
                inactiveDotColor="#90A4AE"
                paginationBoxVerticalPadding={20}
                autoplay
                circleLoop
                resizeMethod={"resize"}
                resizeMode={"cover"}
                paginationBoxStyle={{
                  position: "absolute",
                  bottom: 0,
                  padding: 0,
                  alignItems: "center",
                  alignSelf: "center",
                  justifyContent: "center",
                  paddingVertical: 10,
                }}
                dotStyle={{
                  width: 10,
                  height: 10,
                  borderRadius: 5,
                  marginHorizontal: 0,
                  padding: 0,
                  margin: 0,
                  backgroundColor: "rgba(128, 128, 128, 0.92)",
                }}
                ImageComponentStyle={{
                  borderRadius: 15,
                  width: "97%",
                  marginTop: 5,
                }}
                imageLoadingColor="#2196F3"
              />
            </View>
          </View>

          {/* <Text>{JSON.stringify(this.state.dataCategories)}</Text> */}
        </View>
        <View
          style={{
            width: width,
            borderRadius: 20,
            paddingVertical: 20,
            backgroundColor: "white",
          }}
        >
          <Text style={styles.titleCatg}>
            Categories {this.state.selectCatg}
          </Text>
          <View style={{ height: 10 }} />
          <FlatList
            horizontal={true}
            data={this.state.dataCategories}
            renderItem={({ item }) => this._renderItem(item)}
            keyExtractor={(item, index) => index.toString()}
          />

          <FlatList
            data={this.state.dataFood}
            numColumns={2}
            renderItem={({ item }) => this._renderItemFood(item)}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>

        {/* <Text>{JSON.stringify(this.state.dataFood)}</Text> */}
      </ScrollView>
    );
  }

  _renderItemFood(item) {
    let catg = this.state.selectCatg;
    if (catg == 0 || catg == item.categorie) {
      return (
        <TouchableOpacity style={styles.divFood}>
          <Image
            style={styles.imageFood}
            resizeMode="contain"
            source={{ uri: item.image }}
          />
          <View
            style={{
              height: width / 2 - 20 - 90,
              backgroundColor: "transparent",
              width: width / 2 - 20 - 10,
            }}
          />
          <Text
            style={{ fontWeight: "bold", fontSize: 22, textAlign: "center" }}
          >
            {item.name}
          </Text>
          <Text>Descp Food and Details</Text>
          <Text style={{ fontSize: 20, color: "green" }}>${item.price}</Text>

          <TouchableOpacity
            style={{
              width: width / 2 - 40,
              backgroundColor: "#33c37d",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 5,
              padding: 4,
            }}
            onPress={() => this.onClickAddCart(item)}
          >
            <Text style={{ fontSize: 18, color: "white", fontWeight: "bold" }}>
              Add Cart
            </Text>
            <View style={{ width: 10 }} />
            <Icon name="ios-add-circle" size={30} color={"white"} />
          </TouchableOpacity>
        </TouchableOpacity>
      );
    }
  }
  // scrip di bawah untuk fungsi kategori
  _renderItem(item) {
    return (
      <TouchableOpacity
        style={[styles.divCategorie, { backgroundColor: item.color }]}
        onPress={() => this.setState({ selectCatg: item.id })}
      >
        <Image
          style={{ width: 100, height: 80 }}
          resizeMode="contain"
          source={{ uri: item.image }}
        />
        <Text style={{ fontWeight: "bold", fontSize: 22 }}>{item.name}</Text>
      </TouchableOpacity>
    );
  }

  // aksi addto cart
  onClickAddCart(data) {
    const itemcart = {
      food: data,
      quantity: 1,
      price: data.price,
    };

    AsyncStorage.getItem("cart")
      .then((datacart) => {
        if (datacart !== null) {
          // We have data!!
          const cart = JSON.parse(datacart);
          cart.push(itemcart);
          AsyncStorage.setItem("cart", JSON.stringify(cart));
        } else {
          const cart = [];
          cart.push(itemcart);
          AsyncStorage.setItem("cart", JSON.stringify(cart));
        }
        alert("Produk sudah di tambahkan ke keranjang");
      })
      .catch((err) => {
        alert(err);
      });
  }
}

const styles = StyleSheet.create({
  imageBanner: {
    height: width / 2,
    width: width - 40,
    borderRadius: 10,
    marginHorizontal: 20,
  },
  divCategorie: {
    backgroundColor: "red",
    margin: 5,
    alignItems: "center",
    borderRadius: 10,
    padding: 10,
  },
  titleCatg: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  imageFood: {
    width: width / 2 - 20 - 10,
    height: width / 2 - 20 - 30,
    backgroundColor: "transparent",
    position: "absolute",
    top: -45,
  },
  divFood: {
    width: width / 2 - 20,
    padding: 10,
    borderRadius: 10,
    marginTop: 55,
    marginBottom: 5,
    marginLeft: 10,
    alignItems: "center",
    elevation: 8,
    shadowOpacity: 0.3,
    shadowRadius: 50,
    backgroundColor: "white",
  },
});
