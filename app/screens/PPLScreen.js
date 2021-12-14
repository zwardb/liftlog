import React, { useEffect, useState, useCallback } from "react";
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
  View,
} from "react-native";
import { useFocusEffect } from "@react-navigation/native";

export default function PPLScreen(props) {
  const [selectedExercise, setSelectedExercise] = useState("all");
  const [exercises, setExercises] = useState([
    {
      motion: "push",
      name: "Bench Press",
      sets: 3,
      reps: 5,
      repsWeight: [200, 235, 265],
    },
    {
      motion: "push",
      name: "Overhead Press",
      sets: 3,
      reps: 5,
      repsWeight: [100, 115, 130],
    },
    {
      motion: "push",
      name: "Incline Dumbell Press",
      sets: 5,
      reps: 10,
      weight: 80,
    },
    {
      motion: "push",
      name: "Lo-Hi Cable Fly",
      sets: 3,
      reps: 10,
      weight: 17.5,
    },
    {
      motion: "push",
      name: "Hi-Lo",
      sets: 3,
      reps: 10,
      weight: 22.5,
    },
    {
      motion: "push",
      name: "Lateral Cable Raise",
      sets: 3,
      reps: 10,
      weight: 12.5,
    },
    {
      motion: "push",
      name: "Incline Plate Press",
      sets: 2,
      reps: 10,
      weight: 45,
    },
    {
      motion: "push",
      name: "Weighted Dips",
      sets: 5,
      reps: 10,
      weight: 45,
    },
    {
      motion: "push",
      name: "Tricep Pushdown",
      sets: 5,
      reps: 10,
      weight: 50,
    },
    {
      motion: "push",
      name: "Tricep Extension",
      sets: 5,
      reps: 10,
      weight: 50,
    },
    {
      motion: "pull",
      name: "Deadlift",
      sets: 3,
      reps: 5,
      repsWeight: [305, 355, 400],
    },
    {
      motion: "pull",
      name: "Lat Pulldown",
      sets: 3,
      reps: 10,
      weight: 160,
    },
    {
      motion: "pull",
      name: "Cable Row",
      sets: 3,
      reps: 10,
      weight: 160,
    },
    {
      motion: "pull",
      name: "Cable Pulldown",
      sets: 3,
      reps: 10,
      weight: 65,
    },
    {
      motion: "pull",
      name: "Shrug",
      sets: 4,
      reps: 10,
      weight: 205,
    },
    {
      motion: "pull",
      name: "Upright Row",
      sets: 4,
      reps: 10,
      weight: 57.5,
    },
    {
      motion: "pull",
      name: "Face Pull",
      sets: 4,
      reps: 10,
      weight: 50,
    },
    {
      motion: "pull",
      name: "Rear Delt Fly",
      sets: 4,
      reps: 10,
      weight: 17.5,
    },
    {
      motion: "pull",
      name: "Barbell Curl",
      sets: 3,
      reps: 10,
      weight: 70,
    },
    {
      motion: "pull",
      name: "Hammer Curl",
      sets: 3,
      reps: 10,
      weight: 35,
    },
    {
      motion: "pull",
      name: "Incline Dumbell Curl",
      sets: 3,
      reps: 10,
      weight: 25,
    },
    {
      motion: "pull",
      name: "Reverse Curl",
      sets: 3,
      reps: 10,
      weight: 50,
    },
    {
      motion: "legs",
      name: "Squat",
      sets: 3,
      reps: 5,
      repsWeight: [255, 295, 335],
    },
    {
      motion: "legs",
      name: "Leg Press",
      sets: 4,
      reps: 10,
      weight: 320,
    },
    {
      motion: "legs",
      name: "Hamstring Curl",
      sets: 4,
      reps: 10,
      weight: 100,
    },
    {
      motion: "legs",
      name: "Leg Extension",
      sets: 4,
      reps: 10,
      weight: 150,
    },
    {
      motion: "legs",
      name: "Calf Raise",
      sets: 3,
      reps: 10,
      weight: 160,
    },
  ]);

  useFocusEffect(
    useCallback(() => {
      if (props.route.params) {
        console.log("in focus!");
        setSelectedExercise(props.route.params.motion);
      }
      return () => {
        console.log("out of focus!");
        setSelectedExercise("all");
      };
    }, [])
  );

  return (
    <SafeAreaView style={styles.background}>
      {console.log(selectedExercise)}
      <ScrollView>
        <View>
          <Text></Text>
        </View>
        {exercises
          .filter((exercise) => {
            if (selectedExercise === "all") return exercise;
            return exercise.motion === selectedExercise;
          })
          .map((exercise, idx) => (
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
  background: {
    flex: 1,
    backgroundColor: "#121212",
    paddingTop: 40,
    paddingBottom: 55,
    paddingHorizontal: 5,
  },
  exercise: {
    backgroundColor: "#232323",
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
