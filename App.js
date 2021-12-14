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
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { NavigationContainer } from "@react-navigation/native";
import Tabs from "./app/Tabs";
import { store, persistor } from "./app/redux/store";

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <Tabs />
        </NavigationContainer>
      </PersistGate>
    </Provider>
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
