import { Ionicons } from "@expo/vector-icons";
import { Pressable } from "react-native";

function IconButton({ onPress, isSelected }) {
  return (
    <Pressable onPress={onPress}>
      <Ionicons
        name={isSelected ? "star" : "star-outline"}
        color={"red"}
        size={18}
      />
    </Pressable>
  );
}

export default IconButton;
