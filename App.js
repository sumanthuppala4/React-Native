import { Button, ImageBackground } from "react-native";
import AddTask from "./Components/AddTaskApp/AddTask";
import { StatusBar } from "expo-status-bar";
import Categories from "./Components/CategoriesApp/Categories";
import { SafeAreaView } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import OverviewScreen from "./Components/Meals/OverviewScreen";
import MealDetails from "./Components/MealDetail/MealDetail";
import { createDrawerNavigator } from "@react-navigation/drawer";
import GreetingScreen from "./screens/GreetingScreen";
import UserScreen from "./screens/UserScreen";
import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FavouriteScreen from "./screens/FavouriteScreen";
import { Provider, useDispatch, useSelector } from "react-redux";
import { store } from "./store/store";
import LoginScreen from "./screens/LoginScreen";
import { addAuthentication, removeAuthentication } from "./store/favourites";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect } from "react";
import Places from "./screens/Places";
import Map from "./screens/Map";
import LocalNotificationScreen from "./screens/LocalNotificationScreen";

const Stack = createStackNavigator();

const Drawer = createDrawerNavigator();
const BottomTab = createBottomTabNavigator();

function PlacesNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Places Stack" component={Places} />
      <Stack.Screen name="Map" component={Map} />
    </Stack.Navigator>
  );
}

function DrawerNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Places" component={PlacesNavigator} />
      <Drawer.Screen name="Categories" component={Categories} />
      <Drawer.Screen name="Favourites" component={FavouriteScreen} />
      <Drawer.Screen name="Add Task" component={AddTask} />
      <Drawer.Screen name="Notifications" component={LocalNotificationScreen} />
    </Drawer.Navigator>
  );
}

export default function App() {
  let currentNavigationType = "Nested";

  if (currentNavigationType === "BottomTabs") {
    return (
      <>
        <NavigationContainer>
          <BottomTab.Navigator>
            <BottomTab.Screen
              name="welcome"
              component={GreetingScreen}
              options={{
                tabBarIcon: ({ color, size }) => (
                  <Ionicons name="home" color={color} size={size} />
                ),
              }}
            />
            <BottomTab.Screen
              name="Users"
              component={UserScreen}
              options={{
                tabBarIcon: ({ color, size }) => (
                  <Ionicons name="person" color={color} size={size} />
                ),
              }}
            />
          </BottomTab.Navigator>
        </NavigationContainer>
      </>
    );
  }

  if (currentNavigationType === "Drawer") {
    return (
      <>
        <NavigationContainer>
          <Drawer.Navigator>
            <Drawer.Screen
              name="welcome"
              component={GreetingScreen}
              options={{
                headerStyle: { backgroundColor: "red" },
                headerTintColor: "white",
                drawerLabel: "Welcome User",
                drawerIcon: ({ color, size }) => (
                  <Ionicons name="home" color={color} size={size} />
                ),
              }}
            />
            <Drawer.Screen name="Users" component={UserScreen} />
          </Drawer.Navigator>
        </NavigationContainer>
      </>
    );
  }

  function AuthorizedScreens() {
    const dispatch = useDispatch();
    return (
      <Stack.Navigator>
        {/*  <Stack.Screen name="AddTask" component={AddTask} /> */}

        <Stack.Screen
          name="Drawer"
          component={DrawerNavigator}
          options={{
            headerRight: () => {
              return (
                <Button
                  title={"LogOut"}
                  onPress={() => {
                    dispatch(removeAuthentication());
                    AsyncStorage.removeItem("token");
                  }}
                />
              );
            },
          }}
        />
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
    );
  }

  function UnAuthorizedScreens() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
      </Stack.Navigator>
    );
  }

  function GetScreens() {
    const dispatch = useDispatch();
    const { isAuthenticated, token } = useSelector(
      (state) => state.favouriteMeals,
    );

    useEffect(() => {
      const getAsyncStorageToken = async () => {
        const storedToken = await AsyncStorage.getItem("token");

        if (storedToken) {
          dispatch(addAuthentication(storedToken));
        }
      };

      getAsyncStorageToken();
    }, []);

    return token ? <AuthorizedScreens /> : <UnAuthorizedScreens />;
  }

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
          <Provider store={store}>
            <NavigationContainer>
              <GetScreens />
            </NavigationContainer>
          </Provider>
        </SafeAreaView>
      </ImageBackground>
    </>
  );
}
