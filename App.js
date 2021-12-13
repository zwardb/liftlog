import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  Alert,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  View,
  Image,
  Button,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Tabs from "./app/Tabs";

export default function App() {
  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
  },
});
