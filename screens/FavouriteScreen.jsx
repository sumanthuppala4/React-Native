import { View, Text } from "react-native";
import { useSelector } from "react-redux";
import { MEALS } from "../data/dummy-data";
import MealsList from "../Components/Meals/MealsList";

function FavouriteScreen() {
  const favouriteMealIds = useSelector((state) => state.favouriteMeals.ids);

  const favouriteMeals = MEALS.filter((item) =>
    favouriteMealIds.includes(item.id)
  );

  console.log(favouriteMealIds);

  return <MealsList data={favouriteMeals} />;
}

export default FavouriteScreen;
