/* eslint-disable @typescript-eslint/no-empty-object-type */
import { StyleSheet, Text, TouchableOpacity } from "react-native";

interface ButtonProps {
  backgroundColor?: string;
  text?: string;
  onPress?: () => void;
}
export default function Button({
  backgroundColor = "blue",
  text = "Add",
  onPress,
}: ButtonProps) {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: backgroundColor }]}
      onPress={onPress}
    >
      <Text style={{ color: "white" }}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 8,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    height: 40,
  },
});
