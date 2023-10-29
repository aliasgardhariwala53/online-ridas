import React from "react";
import { Button, TextInput, View, Modal, Image } from "react-native";
import { styles } from "../constants";

const GoalInputs = ({
  enteredText,
  goalInputHandler,
  addGoalHandler,
  visible,
  setShowAddGoalModal,
}) => {
  const response = "data";
  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.inputContainer}>
        {/* <Image source={require()} /> */}
        <TextInput
          style={styles.input}
          value={enteredText}
          onChangeText={goalInputHandler}
          placeholder="Enter you goals here..."
        />
        <View style={styles.buttonContainer}>
          <Button title="Add goals" onPress={addGoalHandler} />
          <Button title="Cancel" onPress={() => setShowAddGoalModal(false)} />
        </View>
      </View>
    </Modal>
  );
};

export default GoalInputs;
