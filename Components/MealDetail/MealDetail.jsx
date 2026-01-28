import { useRoute } from "@react-navigation/native";
import { Button, Image, StyleSheet, Text, View } from "react-native";
import { MEALS } from "../../data/dummy-data";
import { useLayoutEffect } from "react";
import IconButton from "../Common/IconButton";

import { useSelector, useDispatch } from "react-redux";
import { addFavourite, removeFavourite } from "../../store/favourites";

function MealDetails({ navigation }) {
  const route = useRoute();

  const dispatch = useDispatch();

  const mealId = route.params.mealId;

  const favouriteMealIds = useSelector((state) => state.favouriteMeals.ids);

  const isSelected = favouriteMealIds.includes(mealId);

  const selectedMeal = MEALS.filter((meal) => meal.id === mealId)?.[0];

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            onPress={() => {
              if (isSelected) {
                dispatch(removeFavourite({ id: mealId }));
              } else {
                dispatch(addFavourite({ id: mealId }));
              }
            }}
            isSelected={isSelected}
          />
        );
      },
    });
  }, [navigation, dispatch, addFavourite, mealId, isSelected]);

  return (
    <>
      <View style={{ padding: 16 }}>
        <Text>Meal Details Screen {mealId}</Text>

        <Image
          source={{
            uri: encodeURI(selectedMeal.imageUrl),
          }}
          style={styles.image}
          resizeMode="cover"
        />
        <Text>{selectedMeal.title}</Text>
        <Text>{selectedMeal.duration}</Text>
        <Text>{selectedMeal.complexity}</Text>
        <Text>Ingredients</Text>
        {selectedMeal?.ingredients?.map((item) => (
          <Text key={item}>{item}</Text>
        ))}
        <Text>Steps</Text>
        {selectedMeal?.steps?.map((item) => (
          <Text key={item}>{item}</Text>
        ))}
      </View>
    </>
  );
}

export default MealDetails;

const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 200,
    borderColor: "black",
    borderWidth: 2,
  },
});
