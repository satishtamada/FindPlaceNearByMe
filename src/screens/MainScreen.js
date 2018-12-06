import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
  Dimensions,
  Alert,
  FlatList,
  ActivityIndicator
} from "react-native";

const screenWidth = Dimensions.get("window").width;

export default class HomeScreen extends Component {
  constructor() {
    super();
    this.state = {
      GridListItems: [
        { key: "School", image: require("../images/ic_school.png") },
        { key: "Hospital", image: require("../images/ic_hospital.png") },
        { key: "Pet care", image: require("../images/ic_pet_care.png") },
        { key: "Restaurant", image: require("../images/ic_restaurant.png") },
        { key: "Church", image: require("../images/ic_church.png") },
        { key: "Java", image: require("../images/ic_logo.png") },
        { key: "Javascript", image: require("../images/ic_logo.png") },
        { key: "PHP", image: require("../images/ic_logo.png") },
        { key: "AJAX", image: require("../images/ic_logo.png") },
        { key: "Android", image: require("../images/ic_logo.png") },
        { key: "Selenium", image: require("../images/ic_logo.png") },
        { key: "HTML", image: require("../images/ic_logo.png") },
        { key: "Selenium", image: require("../images/ic_logo.png") },
        { key: "HTML", image: require("../images/ic_logo.png") }
      ]
    };
  }

  GetGridViewItem(item) {
    Alert.alert(item);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            padding: 10,
            color: "#000000"
          }}
        >
          Category
        </Text>
        <Text
          style={{
            fontSize: 14,
            color: "#c4c4c4",
            fontWeight: "normal",
            paddingLeft: 10,
            paddingBottom: 10
          }}
        >
          Find places near by me
        </Text>
        <FlatList
          data={this.state.GridListItems}
          renderItem={({ item }) => (
            <View style={styles.GridViewContainer}>
              <Image source={item.image} style={styles.logo} />
              <Text
                style={styles.GridViewTextLayout}
                onPress={this.GetGridViewItem.bind(this, item.key)}
              >
                {item.key}
              </Text>
            </View>
          )}
          numColumns={2}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    flexDirection: "column",
    backgroundColor: "#ffffff"
  },
  headerContainer: {
    flex: 0.4
  },
  logo: {
    width: 50,
    height: 50,
    padding: 10
  },
  headerItem: {
    flex: 1,
    backgroundColor: "#56bf77",
    justifyContent: "center",
    alignItems: "center"
  },
  bodyContainer: {
    alignItems: "center",
    flex: 0.6,
    flexDirection: "column",
    backgroundColor: "#f0f4f5"
  },

  headerLogo: {
    width: 100,
    height: 50,
    resizeMode: "contain"
  },
  navLogo: {
    margin: 10,
    width: 25,
    height: 25
  },
  buttonLogin: {
    textAlign: "center",
    padding: 10,
    margin: 5,
    color: "#ffffff",
    backgroundColor: "#0077cc",
    alignSelf: "stretch"
  },
  buttonRegister: {
    textAlign: "center",
    padding: 10,
    margin: 5,
    color: "#0077cc",
    backgroundColor: "#ffffff",
    alignSelf: "stretch"
  },
  navToRegiser: {
    justifyContent: "flex-end",
    alignItems: "flex-end"
  },
  containerOne: {
    flex: 1,
    backgroundColor: "#56bf77",
    justifyContent: "center",
    alignItems: "center"
  },
  containerTwo: {
    flex: 1,
    backgroundColor: "#3266df",
    justifyContent: "center",
    alignItems: "center"
  },
  containerThree: {
    flex: 1,
    backgroundColor: "#df6b74",
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    color: "#ffffff",
    fontSize: 20,
    fontWeight: "bold"
  },
  description: { color: "#ffffff", fontSize: 14, padding: 5 },
  listitem: {
    borderWidth: 1,
    borderRadius: 1,
    borderColor: "#ddd",
    borderBottomWidth: 0,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
    margin: 5,
    backgroundColor: "#ffffff"
  },
  feedItem: {
    flex: 1,
    flexDirection: "row"
  },
  authorName: {
    padding: 5,
    color: "#90a4a8",
    fontSize: 13
  },
  publishedAt: {
    padding: 12,
    color: "#19cbea",
    fontSize: 10
  },
  headerText: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
    fontWeight: "bold"
  },
  GridViewContainer: {
    padding: 10,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: screenWidth / 2,
    margin: 5,
    flexDirection: "column",
    borderWidth: 1,
    borderRadius: 1,
    borderColor: "#ddd",
    borderBottomWidth: 0,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 1.0,
    shadowRadius: 10,
    elevation: 3,
    margin: 5
  },
  GridViewTextLayout: {
    fontSize: 20,
    justifyContent: "center",
    color: "#000000",
    padding: 10,
    shadowColor: "#0000ff",
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 5,
    shadowOpacity: 1.0
  }
});
