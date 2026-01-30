import { Ionicons } from "@expo/vector-icons";
import { Pressable } from "react-native";

function IconButton({ onPress, isSelected, isMaps }) {
  let name = "";

  if (isMaps) {
    name = "save";
  } else if (isSelected) {
    name = "star";
  } else {
    name = "star-outline";
  }

  return (
    <Pressable onPress={onPress}>
      <Ionicons name={name} color={"red"} size={18} />
    </Pressable>
  );
}

export default IconButton;
