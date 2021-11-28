import React from "react";
import { StyleSheet, View, Image } from "react-native";
import Star from "../assets/star.svg";

export default function Rating(props) {
  const { range } = props;
  return (
    <View style={styles.ratingContainerStyle}>
      <Star fill={range >= 1 ? "#F6AC3E" : "#DFE6EC"} />
      <Star
        fill={range >= 2 ? "#F6AC3E" : "#DFE6EC"}
        style={{ marginHorizontal: 3 }}
      />
      <Star fill={range >= 3 ? "#F6AC3E" : "#DFE6EC"} />
      <Star
        fill={range >= 4 ? "#F6AC3E" : "#DFE6EC"}
        style={{ marginHorizontal: 3 }}
      />
      <Star fill={range >= 5 ? "#F6AC3E" : "#DFE6EC"} />
    </View>
  );
}
const styles = StyleSheet.create({
  ratingContainerStyle: {
    flex: 1,
    flexDirection: 'row'
  },
});
