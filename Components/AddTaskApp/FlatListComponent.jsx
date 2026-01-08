import { FlatList, StyleSheet, View } from "react-native";

function FlatListComponent({ tasks }) {
  return (
    <View>
      <FlatList
        data={tasks}
        renderItem={(itemData) => (
          <View style={styles.taskViewStyle}>
            <Text>{itemData.item.text} </Text>
          </View>
        )}
        keyExtractor={(item, index) => item.id}
      />
    </View>
  );
}

export default FlatListComponent;

const styles = StyleSheet.create({
  taskViewStyle: {
    height: 80,
    padding: 5,
    marginVertical: 5,
    flex: 1,
  },
});
