import { StatusBar } from "expo-status-bar";
import {
  Button,
  Text,
  TextInput,
  View,
  ScrollView,
  FlatList,
} from "react-native";
import { styles } from "./constants";
import { useState } from "react";
import GoalItems from "./components/GoalItems";
import GoalInputs from "./components/GoalInputs";

export default function App() {
  const [enteredText, setEnteredText] = useState("");
  const [goalList, setGoalList] = useState([]);
  const [showAddGoalModal, setShowAddGoalModal] = useState(false);

  function goalInputHandler(value) {
    setEnteredText(value);
  }
  function addGoalHandler() {
    setGoalList((prev) => [
      ...prev,
      { text: enteredText, id: Math.random().toString() },
    ]);
    setShowAddGoalModal(false);
    setEnteredText("");
  }

  function deleteHandler(id) {
    const filterDeletedItem = goalList?.filter((item) => item.id !== id);
    setGoalList([...filterDeletedItem]);
  }

  return (
    <View style={styles.container}>
      <Button onPress={() => setShowAddGoalModal(true)} title="Add New Goal" />
      <GoalInputs
        visible={showAddGoalModal}
        addGoalHandler={addGoalHandler}
        goalInputHandler={goalInputHandler}
        enteredText={enteredText}
        setShowAddGoalModal={setShowAddGoalModal}
      />

      <View style={styles.goalsContainer}>
        <Text>List your goals</Text>
        <FlatList
          data={goalList}
          keyExtractor={(item, index) => {
            return item.id;
          }}
          renderItem={(itemData) => (
            <GoalItems
              text={itemData.item.text}
              deleteHandler={deleteHandler.bind(this, itemData.item.id)}
            />
          )}
        />
      </View>
    </View>
  );
}
