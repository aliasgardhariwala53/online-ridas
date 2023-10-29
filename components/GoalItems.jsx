import React from "react";
import { styles } from "../constants";
import { Text, View, Pressable } from "react-native";

const GoalItems = ({ text, deleteHandler }) => {
  return (
    <View style={styles.goalsItem}>
      <Pressable
        android_ripple={{ color: "#dddddd" }}
        onPress={deleteHandler}
        style={({ pressed }) => pressed && { opacity: 0.5 }}
      >
        <Text style={styles.goalText}>{text}</Text>
      </Pressable>
    </View>
  );
};

export default GoalItems;
