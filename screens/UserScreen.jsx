import { View, Text, Button } from "react-native";

function UserScreen({ navigation }) {
  return (
    <>
      <View>
        <Text>User Screen</Text>
        <Button
          title="Toggle Drawer"
          onPress={() => {
            navigation.toggleDrawer(); 
          }}
        />
      </View>
    </>
  );
}

export default UserScreen;
