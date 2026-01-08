import { StyleSheet, View, ScrollView } from "react-native";

const ScrollViewComponent = ({ tasks }) => {
  return (
    <ScrollView>
      {tasks.map((task, index) => (
        <View key={index} style={styles.taskViewStyle}>
          <Text key={index} style={{ fontSize: 18, marginVertical: 5 }}>
            {task}
          </Text>
        </View>
      ))}
    </ScrollView>
  );
};
export default ScrollViewComponent;

const styles = StyleSheet.create({
  taskViewStyle: {
    height: 40,
  },
});
