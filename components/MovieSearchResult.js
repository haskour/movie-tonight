import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import moment from "moment";
export default function MovieSearchResult(props) {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        width: "100%",
        paddingHorizontal: 20,
        paddingVertical: 20,
        borderBottomWidth: 1,
        borderBottomColor: "#ecf0f1",
      }}
    >
      <Image
        source={{
          uri: "https://image.tmdb.org/t/p/original" + props.data.poster_path,
          height: 100,
          width: 75,
        }}
      />
      <View
        style={{
          marginLeft: 10,
          marginTop: 10,
        }}
      >
        <Text style={{ fontWeight: "bold", fontSize: 16 }}>
          {props.data.title}
        </Text>
        <Text>{moment(props.data.release_date, "YYYY-MM-DD").format("MMM [,] DD YYYY")}</Text>
      </View>
    </View>
  );
}
