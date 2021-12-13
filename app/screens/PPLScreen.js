import React, { useState } from "react";
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
  View,
} from "react-native";

export default function PPLScreen() {
  const [pushExercises, setPushExercises] = useState([
    {
      name: "Bench Press",
      sets: 3,
      reps: 5,
      repsWeight: [200, 235, 265],
    },
    {
      name: "Overhead Press",
      sets: 3,
      reps: 5,
      repsWeight: [100, 115, 130],
    },
    {
      name: "Incline Dumbell Press",
      sets: 5,
      reps: 10,
      weight: 80,
    },
    {
      name: "Lo-Hi Cable Fly",
      sets: 3,
      reps: 10,
      weight: 17.5,
    },
    {
      name: "Hi-Lo",
      sets: 3,
      reps: 10,
      weight: 22.5,
    },
    {
      name: "Lateral Cable Raise",
      sets: 3,
      reps: 10,
      weight: 12.5,
    },
    {
      name: "Incline Plate Press",
      sets: 2,
      reps: 10,
      weight: 45,
    },
    {
      name: "Weighted Dips",
      sets: 5,
      reps: 10,
      weight: 45,
    },
    {
      name: "Tricep Pushdown",
      sets: 5,
      reps: 10,
      weight: 50,
    },
    {
      name: "Tricep Extension",
      sets: 5,
      reps: 10,
      weight: 50,
    },
  ]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View>
          <Text></Text>
        </View>
        {pushExercises.map((exercise, idx) => (
          <View key={idx} style={styles.exerciseContainer}>
            <View style={styles.exercise}>
              <Text style={styles.exerciseName}>{exercise.name}</Text>
              <Text style={styles.setsReps}>
                {exercise.sets} sets x {exercise.reps} reps
              </Text>
              {exercise.repsWeight
                ? exercise.repsWeight.map((weight, idx) => (
                    <View key={idx} style={styles.reps}>
                      <Text style={styles.repsListNum}>{idx + 1}</Text>
                      <Text style={styles.repsText}>{weight}lb</Text>
                    </View>
                  ))
                : null}
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    paddingTop: 40,
    paddingBottom: 55,
    paddingHorizontal: 20,
  },
  exercise: {
    backgroundColor: "grey",
    paddingLeft: 25,
  },
  exerciseContainer: {
    marginTop: 15,
    paddingLeft: 0,
    borderRadius: 10,
    overflow: "hidden",
  },
  exerciseName: {
    color: "#ffffff",
    fontSize: 20,
    fontWeight: "bold",
  },
  reps: {
    paddingLeft: 10,
    flexDirection: "row",
  },
  repsListNum: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
  },
  repsText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
    paddingLeft: 10,
  },
  setsReps: {
    color: "#ffffff",
    fontSize: 16,
    marginTop: -5,
  },
});
