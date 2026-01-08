import { Pressable, StyleSheet, Text, View } from "react-native";

const TaskComponent = ({ text, onDeleteTask, id }) => {
  return (
    <View style={styles.taskViewStyle}>
      <Pressable
        onPress={onDeleteTask.bind(this, id)}
        android_ripple={{ color: "#210644" }}
        style={({ pressed }) => (pressed ? { opacity: 0.5 } : null)}
      >
        <Text style={styles.taskText}>{text} </Text>
      </Pressable>
    </View>
  );
};

export default TaskComponent;

const styles = StyleSheet.create({
  taskViewStyle: {
    height: 40,
    borderWidth: 0.5,
    padding: 5,
    marginVertical: 5,
    backgroundColor: "#dc12f2ff",
    flex: 1,
    borderRadius: 5,
  },
  taskText: {
    fontSize: 18,
    marginVertical: 5,
    color: "black",
  },    
});
