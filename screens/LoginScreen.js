import { useNavigation } from "@react-navigation/native";
import { View, Text, Button } from "react-native";
import { useDispatch } from "react-redux";
import { addAuthentication } from "../store/favourites";
import AsyncStorage from "@react-native-async-storage/async-storage";

function LoginScreen() {
  const dispatch = useDispatch();
  return (
    <>
      <View>
        <Text>Greeting Screen</Text>
        <Button
          title={"Authenticate SSO"}
          onPress={() => {
            dispatch(addAuthentication("someSecretApiKey"));
            AsyncStorage.setItem("token","someSecretApiKey")
          }}
        />
      </View>
    </>
  );
}

export default LoginScreen;
