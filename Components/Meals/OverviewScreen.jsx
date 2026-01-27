import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { MEALS } from "../../data/dummy-data";
import { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";

function OverviewScreen({ route }) {
  const navigation = useNavigation();

  const { categoryId, title } = route.params;
  const meals = MEALS.filter((meal) => meal.categoryIds.includes(categoryId));

  useLayoutEffect(() => {
    navigation.setOptions({ title: title });
  }, [navigation, title]);

  function MealItem(itemData) {
    return (
      <View
        style={{
          borderColor: "white",
          borderWidth: 2,
          margin: 8,
          padding: 8,
          alignItems: "center",
        }}
      >
        <Pressable
          onPress={() => {
            navigation.navigate("MealDetails", { mealId: itemData.item.id });
          }}
        >
          <Image
            source={{
              uri: encodeURI(itemData.item.imageUrl),
            }}
            style={styles.image}
            resizeMode="cover"
          />
          <Text>{itemData.item.title}</Text>
          <Text>{itemData.item.duration}</Text>
          <Text>{itemData.item.complexity}</Text>
        </Pressable>
      </View>
    );
  }

  return (
    <View style={styles.mealItem}>
      <FlatList
        data={meals}
        renderItem={MealItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

export default OverviewScreen;

const styles = StyleSheet.create({
  mealItem: {
    flex: 1,
    backgroundColor: "#ccc",
  },
  image: {
    width: 200,
    height: 200,
    borderColor: "black",
    borderWidth: 2,
  },
});
