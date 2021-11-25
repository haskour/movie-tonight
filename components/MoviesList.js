import { StyleSheet, View } from "react-native";
import React from "react";
import NoMoviesFound from "./NoMoviesFound";

export default function MoviesList({ props }) {
  return (
    <View style={styles.container}>
      <NoMoviesFound />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: '#000'
  },
});
