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
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./screens/HomeScreen";
import MaxScreen from "./screens/MaxScreen";
import PPLScreen from "./screens/PPLScreen";
import HistoryScreen from "./screens/HistoryScreen";

const Tab = createBottomTabNavigator();

export default function tabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          position: "absolute",
          height: 55,
          backgroundColor: "#1F1B24",
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <View style={styles.tab}>
              <Image
                source={require("./assets/home_white.png")}
                style={styles.icon}
              />
              <Text style={styles.text}>Home</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="PPL"
        component={PPLScreen}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <View style={styles.tab}>
              <Image
                source={require("./assets/dumbbell_white.png")}
                style={styles.icon}
              />
              <Text style={styles.text}>PPL</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Max"
        component={MaxScreen}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <View style={styles.tab}>
              <Image
                source={require("./assets/max_white.png")}
                style={styles.icon}
              />
              <Text style={styles.text}>Max</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="History"
        component={HistoryScreen}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <View style={styles.tab}>
              <Image
                source={require("./assets/timeline_white.png")}
                style={styles.icon}
              />
              <Text style={styles.text}>History</Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tab: {
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    width: 25,
    height: 25,
  },
  text: {
    color: "#ffffff",
    fontSize: 12,
  },
});
