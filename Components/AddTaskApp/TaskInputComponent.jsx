import { useState } from "react";
import {
  Button,
  Image,
  Modal,
  StyleSheet,
  TextInput,
  View,
  Alert,
} from "react-native";

const TaskInputComponent = ({ addTask, visible, closeModal }) => {
  const [taskInput, setTaskInput] = useState("");

  function addTaskHandler() {
    addTask(taskInput);
    setTaskInput("");
    Alert.alert("Success", "Task Added Successfully", [
      { text: "OK", style: styles.alertButton, onPress: closeModal },
    ]);

    //Alert takes three parameters title, message and an array of buttons
  }

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          source={require("../../assets/images/goal.png")}
          style={styles.image}
        />
        <View style={{ width: "80%", padding: 10 }}>
          <TextInput
            style={styles.textInput}
            value={taskInput}
            placeholder="Add a new task"
            onChangeText={(e) => {
              setTaskInput(e);
            }}
          />
        </View>
        <View
          style={{
            marginTop: 20,
            justifyContent: "space-between",
            height: 100,
            flexDirection: "row",
            padding: 10,
          }}
        >
          <View style={{ marginRight: 10 }}>
            <Button
              title="Add-Task"
              style={styles.inputButton}
              onPress={addTaskHandler}
            />
          </View>
          <View>
            <Button
              title="Cancel"
              style={styles.inputButton}
              onPress={closeModal}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    padding: 10,
    backgroundColor: "#2ccbd3ff",
  },
  textInput: {
    borderWidth: 1,
    padding: 10,
    marginTop: 20,
    marginRight: 10,
  },
  inputButton: {
    marginLeft: 10,
    marginTop: 20,
    width: 100,
    marginBottom: 10,
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
});

export default TaskInputComponent;

// Button cannot have style prop directly applied to it in React Native.
// Instead, wrap the Button in a View and apply styles to that View.
