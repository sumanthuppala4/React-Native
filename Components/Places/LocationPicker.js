import { useNavigation, useRoute } from "@react-navigation/native";
import {
  getCurrentPositionAsync,
  PermissionStatus,
  useForegroundPermissions,
} from "expo-location";
import { useState } from "react";
import { Alert, Button, View, Text } from "react-native";

export default function LocationPicker() {
  const [currentLocation, setCurrentLocation] = useState({});
  const navigation = useNavigation();
  const route = useRoute();

  const pickedLatitude = route?.params?.pickedLatitude || "0";
  const pickedLongitude = route?.params?.pickedLongitude || "0";

  const [locationPermissionInformation, requestPermission] =
    useForegroundPermissions();

  async function verifyPermissions() {
    if (
      locationPermissionInformation.status === PermissionStatus.UNDETERMINED
    ) {
      const permissionResponse = await requestPermission();

      return permissionResponse.granted;
    }

    if (locationPermissionInformation.status === PermissionStatus.DENIED) {
      Alert.alert(
        "Need Location Access",
        "You need to allow location to use the app",
      );
      return false;
    }
    return true;
  }

  async function locateUserHandler() {
    const hasPermission = await verifyPermissions();
    if (!hasPermission) {
      return;
    }
    const location = await getCurrentPositionAsync();
    console.log(location);
    setCurrentLocation({
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
    });
  }

  async function viewMapHandler() {
    navigation.navigate("Map");
  }

  return (
    <>
      <View style={{ margin: 8 }}>
        <Button title="Locate User" onPress={locateUserHandler} />
        <Button title="View On Map" onPress={viewMapHandler} />
      </View>
      <View style={{ margin: 8 }}>
        <Text>Current Location</Text>
        <Text>X- ordinates :{currentLocation?.latitude ?? ""}</Text>
        <Text>Y- ordinates:{currentLocation?.longitude ?? ""} </Text>
      </View>
      <View style={{ margin: 8 }}>
        <Text>Co ordinates choosen from Map</Text>
        <Text>X- ordinates :{pickedLatitude}</Text>
        <Text>Y- ordinates:{pickedLongitude} </Text>
      </View>
    </>
  );
}
