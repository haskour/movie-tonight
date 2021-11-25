import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

export default function NoMoviesFound() {
  return (
    <View style={styles.noMoviesContainer}>
      <Image
        style={styles.notFoundBg}
        source={require("../assets/movies.jpeg")}
      />
      <View style={{ alignItems: "center", justifyContent: 'center' }}>
        <Image source={require("../assets/ico_smiley.png")} />
        <Text style={{ color: "#fff", marginTop: 10 , fontSize: 18}}>You have no recent searches.</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  noMoviesContainer: {
    position: "absolute",
    top: -15,
    left: 0,
    bottom: 0,
    right: 0,
    width: window.innerWidth,
    height: "100%",
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
