import React from "react";
import {
  Button,
  Image,
  StyleSheet,
  Text,
  SafeAreaView,
  TouchableOpacity,
  View,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { editWeight } from "../redux/actions";

export default function MaxScreen() {
  const { squat, bench, deadlift } = useSelector((s) => s);
  const dispatch = useDispatch();

  const handlePress = (exercise, weight) => {
    dispatch(editWeight(exercise, weight));
  };

  return (
    <SafeAreaView style={styles.background}>
      <View style={styles.title}>
        <Text style={styles.titleText}>1RM MAXES</Text>
        <Text style={styles.titleDesc}>
          The below compound exercise 1RM weights are used to calculate working
          weights each day. Working weights are calculated based on 90% of the
          1RM figure.
        </Text>
      </View>
      <Button title="clear AsyncStorage" onPress={() => AsyncStorage.clear()} />
      <View style={styles.liftContainer}>
        <Text style={styles.liftTitle}>SQUAT</Text>
        <View style={styles.maxModule}>
          <TouchableOpacity
            onPress={() => handlePress("squat", squat - 10)}
            style={styles.button}
          >
            <Text style={styles.buttonText}>-10</Text>
          </TouchableOpacity>
          <Text style={styles.maxNum}>{squat}</Text>
          <TouchableOpacity
            onPress={() => handlePress("squat", squat + 10)}
            style={styles.button}
          >
            <Text style={styles.buttonText}>+10</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.liftContainer}>
        <Text style={styles.liftTitle}>BENCH</Text>
        <View style={styles.maxModule}>
          <TouchableOpacity
            onPress={() => handlePress("bench", bench - 5)}
            style={styles.button}
          >
            <Text style={styles.buttonText}>-5</Text>
          </TouchableOpacity>
          <Text style={styles.maxNum}>{bench}</Text>
          <TouchableOpacity
            onPress={() => handlePress("bench", bench + 5)}
            style={styles.button}
          >
            <Text style={styles.buttonText}>+5</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.liftContainer}>
        <Text style={styles.liftTitle}>DEADLIFT</Text>
        <View style={styles.maxModule}>
          <TouchableOpacity
            onPress={() => handlePress("deadlift", deadlift - 10)}
            style={styles.button}
          >
            <Text style={styles.buttonText}>-10</Text>
          </TouchableOpacity>
          <Text style={styles.maxNum}>{deadlift}</Text>
          <TouchableOpacity
            onPress={() => handlePress("deadlift", deadlift + 10)}
            style={styles.button}
          >
            <Text style={styles.buttonText}>+10</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "#121212",
    paddingTop: 40,
    paddingBottom: 55,
    paddingHorizontal: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: "#777",
    padding: 8,
    margin: 10,
    width: 200,
  },
  title: {
    flex: 0.3,
    backgroundColor: "#232323",
    borderBottomWidth: 5,
  },
  titleText: {
    fontSize: 24,
    color: "#ffffff",
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 10,
  },
  titleDesc: {
    fontSize: 18,
    color: "#ffffff",
    textAlign: "center",
  },
  liftContainer: {
    flex: 0.4,
    backgroundColor: "#232323",
    borderWidth: 5,
    borderRadius: 10,
  },
  liftTitle: {
    fontSize: 24,
    color: "#ffffff",
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 10,
  },
  maxModule: {
    paddingLeft: 30,
    paddingRight: 30,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 50,
  },
  maxNum: {
    fontSize: 24,
    color: "#ffffff",
    fontWeight: "bold",
    textAlign: "center",
    justifyContent: "center",
  },
  button: {
    justifyContent: "center",
    backgroundColor: "green",
    borderRadius: 10,
    height: 40,
    width: 40,
  },
  buttonText: {
    color: "#ffffff",
    textAlign: "center",
  },
});
