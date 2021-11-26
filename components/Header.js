import React from "react";
import { StyleSheet, Text, View, TextInput, Image } from "react-native";

export default function AppHeader({ onChangeText }) {
  return (
    <View style={styles.headerStyle}>
      <Text style={styles.searchTitle}>Search</Text>
      <View style={styles.textInputContainerStyle}>
        <Image
          style={styles.searchIconStyle}
          source={require("../assets/ico_search_off.png")}
        />
        <TextInput
          placeholder="Search"
          editable
          onChangeText={(text) => onChangeText(text)}
          style={styles.textInputStyle}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: "#EB7660",
    paddingHorizontal: 20,
    paddingVertical: 30,
    // borderBottomLeftRadius: 20,
    // borderBottomRightRadius: 20,
    position: "relative",
    zIndex: 99,
  },
  searchTitle: {
    fontSize: 30,
    color: "#fff",
    fontWeight: "bold",
    marginBottom: 20,
  },

  textInputStyle: {
    height: 50,
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 15,
    paddingLeft: 45,
  },
  textInputContainerStyle: {
    position: "relative",
  },
  searchIconStyle: {
    position: "absolute",
    zIndex: 9,
    top: 14,
    left: 15,
  },
});
