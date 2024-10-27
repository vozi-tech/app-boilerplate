import React from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import { Layout, Text } from "@ui-kitten/components";

export default function LandingScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Layout style={styles.content}>
        <View style={styles.titleContainer}>
          <Text category="h1" style={styles.title}>
            Hello World!!!
          </Text>
        </View>
      </Layout>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 50,
  },
  titleContainer: {
    alignItems: "center",
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
    marginBottom: 10,
  },
});
