import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import NoMoviesFound from "./NoMoviesFound";
import MovieSearchResult from "./MovieSearchResult";
export default function MoviesList(props) {
  return (
    <View style={styles.container}>
      {/* <NoMoviesFound /> */}
      {props.data.map((item) => (
        <MovieSearchResult key={item.id} data={item} />
      ))}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
  },
});
