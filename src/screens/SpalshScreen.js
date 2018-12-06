import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  AppRegistry,
  Platform,
  PermissionsAndroid,
  StyleSheet
} from "react-native";
import { requestPermission } from "react-native-android-permissions";

import { checkPermission } from "react-native-android-permissions";
import { createStackNavigator } from "react-navigation";
// import NewsFeed from "../screens/NewsFeed";
// import FeedView from "../screens/FeedView";
// import NewsWebView from "../screens/NewsWebView";
import MainScreen from "../screens/MainScreen";
// import Bookmarks from "../screens/Bookmarks";
// import SearchNews from "../screens/SearchNews";
// import ChannelsList from "../screens/ChannelsList";
// import ChannelNewsFeed from "../screens/ChannelNewsFeed";

const AppStackNavigator = createStackNavigator({
  MainScreen: {
    screen: MainScreen,
    navigationOptions: {
      header: null
    }
  }
  //   NewsFeed: {
  //     screen: NewsFeed
  //   },
  //   ChannelsList: {
  //     screen: ChannelsList
  //   },
  //   ChannelNewsFeed: {
  //     screen: ChannelNewsFeed
  //   },
  //   Bookmarks: {
  //     screen: Bookmarks
  //   },
  //   SearchNews: {
  //     screen: SearchNews
  //   },
  //   FeedView: {
  //     screen: FeedView,
  //     navigationOptions: {
  //       header: null
  //     }
  //   },
  //   NewsWebView: {
  //     screen: NewsWebView,
  //     navigationOptions: {
  //       header: null
  //     }
  //   }
});

export default class SpalshScreen extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: false,
      lastLat: null,
      lastLong: null
    };
  }

  checkAndroidPermissions() {
    checkPermission("android.permission.ACCESS_FINE_LOCATION").then(
      result => {
        console.log("Already Granted!");
        this.launchHomeSceen();
      },
      result => {
        requestPermission("android.permission.ACCESS_FINE_LOCATION").then(
          result => {
            console.log("Granted!", result);
            this.launchHomeSceen();
          },
          result => {
            //TODO need to display not grandted permission
          }
        );
      }
    );
  }

  launchHomeSceen() {
    navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({
          lastLat: position.longitude,
          lastLong: position.latitude
        });
      },
      error => {
        alert(JSON.stringify(error));
      },
      {
        enableHighAccuracy: true,
        timeout: 20000,
        maximumAge: 1000
      }
    );

    alert(this.state.lastLat);
    setTimeout(
      function() {
        this.setState({ isLoading: true });
      }.bind(this),
      10000
    );
  }

  componentDidMount() {
    if (Platform.OS === "android") {
      this.checkAndroidPermissions();
    } else {
      this.launchHomeSceen();
    }
  }

  render() {
    if (this.state.isLoading) {
      return <AppStackNavigator />;
    } else {
      return (
        <View style={styles.container}>
          <Image
            source={require("../images/ic_logo.png")}
            style={styles.logo}
          />
          <Text>Find Near Places</Text>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    justifyContent: "center",
    alignItems: "center"
  },
  bodyContainer: {
    marginBottom: 100,
    flexDirection: "column",
    alignItems: "center"
  },
  logo: {
    width: 100,
    height: 100,
    padding: 20
  },
  title: {
    fontSize: 20,
    padding: 10,
    color: "#ffffff",
    fontWeight: "bold"
  },
  footer: {
    padding: 20,
    justifyContent: "center",
    flexDirection: "column",
    position: "absolute",
    bottom: 0
  }
});
