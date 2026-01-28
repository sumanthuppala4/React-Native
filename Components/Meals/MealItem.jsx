import { useNavigation } from "@react-navigation/native";
import { Image, Pressable, StyleSheet, View, Text } from "react-native";

export default function MealItem({ itemData }) {
  const navigation = useNavigation();

  return (
    <View
      style={{
        borderColor: "white",
        borderWidth: 2,
        margin: 8,
        padding: 8,
        alignItems: "center",
      }}
    >
      <Pressable
        onPress={() => {
          navigation.navigate("MealDetails", { mealId: itemData.item.id });
        }}
      >
        <Image
          source={{
            uri: encodeURI(itemData.item.imageUrl),
          }}
          style={styles.image}
          resizeMode="cover"
        />
        <Text>{itemData.item.title}</Text>
        <Text>{itemData.item.duration}</Text>
        <Text>{itemData.item.complexity}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 200,
    borderColor: "black",
    borderWidth: 2,
  },
});
