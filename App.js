import React from "react";
import { Text, View, TextInput, Image } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Button, Header } from "react-native-elements";
import { StatusBar } from "react-native";
import AppHeader from "./components/Header";
import MoviesList from "./components/MoviesList";
export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar backgroundColor={"#EB7660"} />
      <View>
          <AppHeader />
          <MoviesList />
      </View>
    </SafeAreaProvider>
  );
}