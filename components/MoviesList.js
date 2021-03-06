import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
} from "react-native";
import React from "react";
import NoMoviesFound from "./NoMoviesFound";
import MovieSearchResult from "./MovieSearchResult";
import { useNavigation } from "@react-navigation/native";
function MovieItem({ id, data, onSelect }) {
  return (
    <TouchableOpacity onPress={() => onSelect(id)}>
      <MovieSearchResult data={data} />
    </TouchableOpacity>
  );
}

function selectMovie(item, navigation) {
  navigation.navigate("MovieDetail", { id: item });
}

export default function MoviesList(props) {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={props.data}
        renderItem={({ item }) => (
          <MovieItem
            id={item.id}
            data={item}
            onSelect={(movie) => selectMovie(movie, navigation)}
          />
        )}
        keyExtractor={(item) => item.id}
        ListFooterComponent={<NoMoviesFound />}
      />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
  },
});
