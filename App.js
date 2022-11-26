import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 25, color: "#A90000" }}>Cozy Cats App</Text>
      <Text style={{ fontSize: 30, color: "white" }}>
        Maria Rauf (19-ARID-811)
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3E239D",
    alignItems: "center",
    justifyContent: "center",
  },
});
