import WelcomeCard from "../components/welcomeCard";
import React from "react";
import { Dimensions, StatusBar, View, Image, StyleSheet } from "react-native";

export default function Index() {
  const screenHeight = Dimensions.get("window").height;

  return (
    <View style={styles.root}>
      <StatusBar barStyle='light-content' backgroundColor='#0066FF' />
      <View style={styles.container}>
        <View style={[styles.logoSection, { height: screenHeight * 0.4 }]}>
          <Image
            source={require("../assets/images/logo.png")}
            style={styles.logo}
          />
        </View>

        <View style={[styles.cardContainer, { height: screenHeight * 0.3 }]}>
          <WelcomeCard />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#0066FF",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logoSection: {
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 200,
    height: 200,
  },
  cardContainer: {
    flex: 1,
    justifyContent: "flex-end",
  },
});
