import { useState } from "react";
import { StyleSheet, View, Button, FlatList } from "react-native";
import TaskInputComponent from "./TaskInputComponent";
import TaskComponent from "./TaskComponent";

const AddTask = () => {
  const [showTaskInputModal, setShowTaskInputModal] = useState(false);
  const [tasks, setTasks] = useState([
    { text: "Task 1", id: "1" },
    { text: "Task 2", id: "2" },
    { text: "Task 3", id: "3" },
    { text: "Task 4", id: "4" },
  ]);

  const deleteTaskHandler = (taskId) => {
    setTasks((prevTasks) => {
      return prevTasks.filter((task) => task.id !== taskId);
    });
  };

  const addTaskHandler = (task) => {
    setTasks((prevTasks) => {
      return [{ text: task, id: Math.random().toString() }, ...prevTasks];
    });
  };
  return (
    <>
      <View style={styles.container}>
        <Button
          title="Add Task"
          color="blue"
          onPress={() => setShowTaskInputModal(true)}
        />

        {showTaskInputModal && (
          <TaskInputComponent
            addTask={addTaskHandler}
            visible={showTaskInputModal}
            closeModal={() => setShowTaskInputModal(false)}
          />
        )}
        <View style={styles.tasksContainer}>
          <FlatList
            data={tasks}
            renderItem={(itemData) => (
              <TaskComponent
                text={itemData.item.text}
                id={itemData.item.id}
                onDeleteTask={deleteTaskHandler}
              />
            )}
            keyExtractor={(item, index) => item.id}
          />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "baseline",
    justifyContent: "space-between",
    flex: 1,
    padding: 10,
  },
  textInput: {
    padding: 10,
    marginTop: 20,
    marginRight: 10,
  },
  inputButton: {
    marginLeft: 10,
  },

  tasksContainer: {
    marginTop: 20,
    flex: 4,
    padding: 10,
    width: "100%",
  },
});

export default AddTask;

//app.json has been updated to include backgroundColor property in the expo section
//status bar style set to light
//stylesheet similar to css but  not exactly same no inheritance of styles
