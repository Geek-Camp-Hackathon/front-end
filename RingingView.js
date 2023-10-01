import React from "react";
import { View, StyleSheet } from "react-native";
import Timer from "./Timer";

const RingingView = () => {
  const time = new Date();
  return (
    <View style={styles.container}>
      <Timer expiryTimestamp={time} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default RingingView;