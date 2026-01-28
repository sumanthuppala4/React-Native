import { MEALS } from "../../data/dummy-data";
import { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import MealsList from "./MealsList";

function OverviewScreen({ route }) {
  const navigation = useNavigation();

  const { categoryId, title } = route.params;
  const meals = MEALS.filter((meal) => meal.categoryIds.includes(categoryId));

  useLayoutEffect(() => {
    navigation.setOptions({ title: title });
  }, [navigation, title]);

  return <MealsList data={meals} />;
}

export default OverviewScreen;
