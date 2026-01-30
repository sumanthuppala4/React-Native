import { View, Button, Alert } from "react-native";
import * as Notifications from "expo-notifications";
import { useEffect } from "react";
import { Platform } from "react-native";

export default function LocalNotificationScreen() {
  //Push Notifications we expoToken

  useEffect(() => {

    async function getConfigurations() {
      let token;

      /* 
      if (!Device.isDevice) {
        alert("Must use a physical device");
        return;
      } */

      const { status: existingStatus } =
        await Notifications.getPermissionsAsync();
      let finalStatus = existingStatus;

      if (existingStatus !== "granted") {
        const { status } = await Notifications.requestPermissionsAsync();
        finalStatus = status;
      }

      if (finalStatus !== "granted") {
        Alert.alert("Permission not granted", "Need permission");
        return;
      }

      try{

      token = await Notifications.getExpoPushTokenAsync()
      }
      catch(error)
      {
        console.log(error)
      }
      console.log("Expo Push Token:", token);

      if (Platform.OS === "android") {
        await Notifications.setNotificationChannelAsync("default", {
          name: "default",
          importance: Notifications.AndroidImportance.MAX,
        });
      }

    }

    getConfigurations();
   
  }, []);

  useEffect(() => {
    const subscription1 = Notifications.addNotificationReceivedListener(
      (notification) => {
        console.log(notification);
        console.log("Notification Recieved"); // getting the notification data
        console.log(notification.request.content.data.userName);
      },
    );
    const subscription2 = Notifications.addNotificationResponseReceivedListener(
      (notification) => {
        console.log(notification);
        console.log("Notification Responded"); // this will be called when clicked on notification
      },
    );

    return () => {
      subscription1.remove();
      subscription2.remove();
    };
  }, []);

  useEffect(() => {
    // Create Android notification channel
    if (Platform.OS === "android") {
      Notifications.setNotificationChannelAsync("local_channel_v1", {
        name: "local_channel_v1",
        importance: Notifications.AndroidImportance.MAX,
      });
    }
  }, []);

  const sendLocalNotification = async () => {
    const { status } = await Notifications.requestPermissionsAsync();
    console.log("Permission status:", status);

    if (status !== "granted") return;

    try {
      await Notifications.scheduleNotificationAsync({
        content: {
          title: "Local Notification",
          body: "This is a test local notification",
          channelId: "local_channel_v1", // REQUIRED
          data: { userName: "Sumanth Uppala u" },
        },
        trigger: {
          type: Notifications.AndroidImportance.MAX,
          seconds: 2, // REQUIRED
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", padding: 20 }}>
      <Button title="Send Local Notification" onPress={sendLocalNotification} />
    </View>
  );
}
