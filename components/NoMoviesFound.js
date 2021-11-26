import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import React from "react";
const screen = Dimensions.get("screen");
export default function NoMoviesFound() {
  return (
    <View
      style={{
        position: "relative",
        width: screen.width,
        height: screen.height - 180,
      }}
    >
      <View style={styles.noMoviesContainer}>
        <Image
          style={styles.notFoundBg}
          source={require("../assets/movies.jpeg")}
        />
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <Image source={require("../assets/ico_smiley.png")} />
          <Text style={{ color: "#fff", marginTop: 10, fontSize: 18 }}>
            You have no recent searches.
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  noMoviesContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    width: window.innerWidth,
    height: window.innerHeight,
    backgroundColor: "#000",
    // minHeight: window.innerHeight,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  notFoundBg: {
    opacity: 0.3,
    position: "absolute",
    top: 0,
  },
});
