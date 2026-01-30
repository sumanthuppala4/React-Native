import { View, Text, Button } from "react-native";
import * as Notifications from "expo-notifications";

export default function LocalNotificationScreen() {
  async function pushNotificationHandler() {
    console.log("Push Notification");

    await Notifications.scheduleNotificationAsync({
      content: {
        title: "My First Notification",
        body: "This is the body of thr notification",
        data: {
          userName: "sumanth Uppala ",
        },
        trigger: {
          second: 5,
        },
      },
    });
  }

  return (
    <>
      <View>
        <Button
          title="Push Local Notification"
          onPress={pushNotificationHandler}
        />
      </View>
    </>
  );
}
