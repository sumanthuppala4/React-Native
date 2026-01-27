import { View, Text, FlatList, Pressable, StyleSheet } from "react-native";
import { CATEGORIES } from "../../data/dummy-data";

const Categories = ({ navigation }) => {
  const CatgoriesItem = (itemData) => {
    const categoryClickHandler = () => {
      navigation.navigate("Overview", {
        categoryId: itemData.item.id,
        title: itemData.item.title,
      });
    };

    return (
      <View style={[styles.categoryItem]}>
        <Pressable
          android_ripple={{ color: "#363d0bff" }}
          style={({ pressed }) =>
            pressed ? [styles.button, styles.pressed] : [styles.button]
          }
          onPress={categoryClickHandler}
        >
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: itemData.item.color,
            }}
          >
            <Text>{itemData.item.title}</Text>
          </View>
        </Pressable>
      </View>
    );
  };

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <FlatList
        data={CATEGORIES}
        renderItem={CatgoriesItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
      />
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({
  categoryItem: {
    height: 100,
    width: "48%",
    margin: 16,
    borderRadius: 8,
    flex: 1,
    elevation: 4,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
  },
  button: {
    flex: 1,
    borderRadius: 8,
    borderWidth: 2,
  },
  pressed: {
    opacity: 0.5,
  },
});
