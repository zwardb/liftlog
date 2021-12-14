import React from "react";
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import PPLScreen from "./PPLScreen";

export default function HomeScreen({ navigation }) {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/rack.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require("../assets/dumbbell_icon.png")}
        />
        <Text style={styles.title}>LIFT LOG 5/3/1 PPL</Text>
      </View>
      <View style={styles.selection}>
        <TouchableOpacity
          style={styles.group}
          onPress={() => navigation.navigate("PPL", { motion: "push" })}
        >
          <Text style={styles.pplText}>PUSH</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.group}
          onPress={() => navigation.navigate("PPL", { motion: "pull" })}
          motion={"Pull"}
        >
          <Text style={styles.pplText}>PULL</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.group}
          onPress={() => navigation.navigate("PPL", { motion: "legs" })}
          motion={"Legs"}
        >
          <Text style={styles.pplText}>LEGS</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 125,
    height: 125,
  },
  logoContainer: {
    position: "absolute",
    top: 25,
    alignItems: "center",
  },
  title: {
    marginTop: -25,
    textShadowColor: "#000000",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 0.5,
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 36,
  },
  selection: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
  },
  group: {
    flex: 1,
    bottom: 175,
    height: 40,
    alignItems: "center",
    justifyContent: "space-around",
  },
  pplText: {
    flex: 1,
    backgroundColor: "rgba(35, 35, 35, 0.7)",
    borderRadius: 10,
    textShadowColor: "#000000",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 0.5,
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 36,
  },
});
