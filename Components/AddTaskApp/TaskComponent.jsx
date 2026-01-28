import {
  Pressable,
  StyleSheet,
  Text,
  View,
  Dimensions,
  useWindowDimensions,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
} from "react-native";

const TaskComponent = ({ textContent, onDeleteTask, id }) => {
  const { width, height } = useWindowDimensions(); // Get current window dimensions when we rotate the screen

  const marginTopDistance = height < 400 ? 2 : 5; // Adjust marginTop based on height

  return (
    <ScrollView>
      {/* Wrap content in ScrollView to handle overflow on smaller screens */}
      <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
        {" "}
        {/* Wrap with KeyboardAvoidingView  to handle keyboard  to not to hide the content*/}
        <View style={[styles.taskViewStyle, { marginTop: marginTopDistance }]}>
          {" "}
          {/*  Apply dynamic marginTop */}
          <Pressable
            onPress={onDeleteTask.bind(this, id)}
            android_ripple={{ color: "#210644" }}
            style={({ pressed }) => (pressed ? { opacity: 0.5 } : null)}
          >
            <Text style={styles.taskText}>{textContent} </Text>
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default TaskComponent;

const deviceWidth = Dimensions.get("window").width; // Get device width

const styles = StyleSheet.create({
  taskViewStyle: {
    height: 40,
    borderWidth: 0.5,
    padding: 5,
    marginVertical: 5,
    backgroundColor: "#dc12f2ff",
    flex: 1,
    borderRadius: Platform.OS === "ios" ? 10 : 5, //  can also write Platform.select({android:5, ios:10}) for more complex styles
  },
  taskText: {
    fontSize: deviceWidth < 400 ? 14 : 18, // Responsive font size
    marginVertical: 5,
    color: "black",
  },
});

// Check dimensions and useWindowDimensions for responsive design based on screen size and orientation
// Using ScrollView and KeyboardAvoidingView to handle smaller screens and keyboard appearance
// Platform-specific styles for better user experience on different OS
// can create task.android.js and task.ios.js for platform-specific components we import them normally and react native will pick the correct one based on platform
