import React, { useState, useCallback } from "react";
import { View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar } from "react-native";
import AppHeader from "./components/Header";
import MoviesList from "./components/MoviesList";
import axios from "./services/axiosConfig";

export default function App() {
  const [moviesSearchTimeOut, setMoviesSearchTimeOut] = useState();

  const searchKeyword = (text) => {
    if (moviesSearchTimeOut) {
      clearTimeout(moviesSearchTimeOut);
    }

    const moviesSearchT = setTimeout(() => {
      searchMovies(text);
    }, 1500);

    setMoviesSearchTimeOut(moviesSearchT);
  };

  const [movies, setMoviesResult] = useState([]);
  const searchMovies = useCallback(
    async (query) => {
      await axios
        .get("search/movie", {
          params: { query, api_key: "b2168bae3a2c67509eb6b97572f521c2" },
        })
        .then((response) => {
          console.log(response.data);
          setMoviesResult(response.data.results);
        })
        .catch((error) => {
          setMoviesResult([]);
          console.log(error);
        });
    },
    [movies]
  );
  return (
    <SafeAreaProvider>
      <StatusBar backgroundColor={"#EB7660"} />
      <View>
        <AppHeader onChangeText={(text) => searchKeyword(text)} />
        <MoviesList data={movies} />
      </View>
    </SafeAreaProvider>
  );
}
