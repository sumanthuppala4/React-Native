import { FlatList, StyleSheet, View } from "react-native";
import MealItem from "./MealItem";

export default function MealsList({ data }) {
  function mealItemRender(itemData) {
    return <MealItem itemData={itemData} />;
  }

  return (
    <View style={styles.mealItem}>
      <FlatList
        data={data}
        renderItem={mealItemRender}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  mealItem: {
    flex: 1,
    backgroundColor: "#ccc",
  },
});
