import { ImageBackground, StyleSheet, Text } from "react-native";
import AddTask from "./Components/AddTaskApp/AddTask";
import { StatusBar } from "expo-status-bar";

export default function App() {
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
          {" "}
          {/* Ensures content is within safe area boundaries */}
          <AddTask />
        </SafeAreaView>
      </ImageBackground>
    </>
  );
}
