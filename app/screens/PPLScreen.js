import React, { useEffect, useState, useCallback } from "react";
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  View,
} from "react-native";
import { useSelector } from "react-redux";
import { useFocusEffect } from "@react-navigation/native";

export default function PPLScreen(props) {
  const { squat, bench, deadlift } = useSelector((s) => s);
  const [week, setWeek] = useState(1);
  const [selectedGroup, setSelectedGroup] = useState("all");

  const weights = (motion) => {
    const mather = (num, percent) => Math.round((num * 0.9 * percent) / 5) * 5;
    const lift =
      motion === "push"
        ? bench
        : motion === "pull"
        ? deadlift
        : motion === "legs"
        ? squat
        : null;
    if (week === 1)
      return [mather(lift, 0.65), mather(lift, 0.75), mather(lift, 0.85)];
    if (week === 2)
      return [mather(lift, 0.7), mather(lift, 0.8), mather(lift, 0.9)];
    if (week === 3)
      return [mather(lift, 0.75), mather(lift, 0.85), mather(lift, 0.95)];
    if (week === 4)
      return [mather(lift, 0.4), mather(lift, 0.5), mather(lift, 0.6)];
  };
  const reps = () => {
    if (week === 1 || week === 4) return [5, 5, 5];
    if (week === 2) return [3, 3, 3];
    if (week === 3) return [5, 3, 1];
  };
  const [compounds, setCompounds] = useState([
    {
      motion: "push",
      name: "Bench Press",
    },
    {
      motion: "pull",
      name: "Deadlift",
    },
    {
      motion: "legs",
      name: "Squat",
    },
  ]);
  const accessories = [
    {
      motion: "push",
      name: "Overhead Dumbbell Press",
      sets: 3,
      reps: 5,
      weight: 50,
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
  ];

  useFocusEffect(
    useCallback(() => {
      if (props.route.params) {
        setSelectedGroup(props.route.params.motion);
      }
      return () => {
        if (props.route.params) {
          props.navigation.setParams({ motion: "all" });
          setSelectedGroup(props.route.params.motion);
        }
      };
    }, [props.route.params])
  );

  return (
    <SafeAreaView style={styles.background}>
      <ScrollView>
        <View style={styles.buttons}>
          <TouchableOpacity style={styles.button} onPress={() => setWeek(1)}>
            <Text>1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => setWeek(2)}>
            <Text>2</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => setWeek(3)}>
            <Text>3</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => setWeek(4)}>
            <Text>4</Text>
          </TouchableOpacity>
        </View>
        {compounds
          .filter((exercise) => {
            if (selectedGroup === "all") return exercise;
            return exercise.motion === selectedGroup;
          })
          .map((exercise, idx) => (
            <View key={idx} style={styles.exerciseContainer}>
              <View style={styles.exercise}>
                <Text style={styles.exerciseName}>{exercise.name}</Text>
                {weights(props.route.params.motion).map((weight, idx) => (
                  <View key={idx} style={styles.reps}>
                    <Text style={styles.repsListNum}>{idx + 1}</Text>
                    <Text style={styles.repsText}>{weight}lb</Text>
                    <Text style={styles.repsText}>x {reps(0)[idx]}</Text>
                  </View>
                ))}
              </View>
            </View>
          ))}
        {accessories
          .filter((exercise) => {
            if (selectedGroup === "all") return exercise;
            return exercise.motion === selectedGroup;
          })
          .map((exercise, idx) => (
            <View key={idx} style={styles.exerciseContainer}>
              <View style={styles.exercise}>
                <Text style={styles.exerciseName}>{exercise.name}</Text>
                <Text style={styles.setsReps}>
                  {exercise.sets} sets x {exercise.reps} reps
                </Text>
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
  buttons: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 10,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "red",
    borderRadius: 10,
    height: 40,
    width: 40,
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
