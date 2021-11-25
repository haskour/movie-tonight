import React from "react";
import { StyleSheet, Text, View, TextInput, Image } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Button, Header } from "react-native-elements";
import { StatusBar } from "react-native";
import AppHeader from "./components/Header";
export default function App() {
  return (
    <SafeAreaProvider>
      <View>
        <StatusBar backgroundColor={"#EB7660"} />
        <AppHeader />
      </View>
    </SafeAreaProvider>
  );
}