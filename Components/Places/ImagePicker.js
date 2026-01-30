import {
  launchCameraAsync,
  useCameraPermissions,
  PermissionStatus,
} from "expo-image-picker";
import { useState } from "react";
import { Alert, Button, Image, View } from "react-native";

export default function ImagePicker() {
  const [pickedImage, setPickedImage] = useState("");

  const [cameraPermissionInformation, requestPermission] =
    useCameraPermissions();

  async function verifyPermissions() {
    if (cameraPermissionInformation.status === PermissionStatus.UNDETERMINED) {
      const permissionResponse = await requestPermission();

      return permissionResponse.granted;
    }

    if (cameraPermissionInformation.status === PermissionStatus.DENIED) {
      Alert.alert(
        "Need Camera Access",
        "You need to allow camera to use the app",
      );
      return false;
    }
    return true;
  }

  async function openCameraHandler() {
    const hasPermission = await verifyPermissions();
    if (!hasPermission) {
      return;
    }
    const image = await launchCameraAsync({
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.5,
    });
    setPickedImage(image.assets?.[0]?.uri);
  }

  return (
    <View style={{margin:8}}>
      <Button title="Open Camera" onPress={openCameraHandler} />
      {pickedImage && (
        <Image
          source={{ uri: pickedImage }}
          style={{ width: "100%", height: 200, marginVertical: 8 }}
        />
      )}
    </View>
  );
}
