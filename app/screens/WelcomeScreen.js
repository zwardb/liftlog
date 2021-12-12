import React from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";

export default function WelcomeScreen() {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/tree.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require("../assets/dumbbell_icon.png")}
        />
        <Text style={styles.title}>Lift Big, Get Big</Text>
      </View>
      <View style={styles.menu}></View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  menu: {
    width: "100%",
    height: 70,
    backgroundColor: "#fc5c65",
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    position: "absolute",
    top: 100,
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 25,
  },
});
