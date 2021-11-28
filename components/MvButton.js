import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default function MvButton(props) {
  const { text } = props;
  return (
    <TouchableOpacity style={styles.buttonContainerStyle}>
      <Text style={styles.buttonTextStyle}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonContainerStyle: {
    height: 50,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#EB7660",
    borderRadius: 15,
  },
  buttonTextStyle: {
    color: "#fff",
    fontSize: 18,
  },
});
