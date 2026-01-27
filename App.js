import { ImageBackground } from "react-native";
import AddTask from "./Components/AddTaskApp/AddTask";
import { StatusBar } from "expo-status-bar";
import Categories from "./Components/CategoriesApp/Categories";
import { SafeAreaView } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import OverviewScreen from "./Components/Meals/OverviewScreen";
import MealDetails from "./Components/MealDetail/MealDetail";

const Stack = createStackNavigator();

export default function App() {
  /*   return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "white",
        borderColor: "red",
        borderWidth: 2,
      }}
    >
      {" "}
      <OverviewScreen />{" "}
    </SafeAreaView>
  );

  return <Navigation />; */

  return (
    <>
      <StatusBar style="light" />
      <ImageBackground
        source={require("./assets/images/background.png")}
        style={{ flex: 1 }}
        resizeMode="cover"
        imageStyle={{ opacity: 0.6 }}
      >
        <SafeAreaView style={{ flex: 1 }}>
          {/* Ensures content is within safe area boundaries */}
          {/*  <AddTask /> */}
          <NavigationContainer>
            <Stack.Navigator>
              {/*  <Stack.Screen name="AddTask" component={AddTask} /> */}
              <Stack.Screen name="Categories" component={Categories} />
              <Stack.Screen
                name="Overview"
                component={OverviewScreen}
                /*  options={({ route, navigation }) => {
                  const catId = route.params.categoryId;

                  return {
                    title: catId,
                  };
                }}
                  
                */

                /* The above code is to set dynamic title for pages */
              />
              <Stack.Screen name="MealDetails" component={MealDetails} />
            </Stack.Navigator>
          </NavigationContainer>
        </SafeAreaView>
      </ImageBackground>
    </>
  );
}
