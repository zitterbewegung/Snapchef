import React, {useState} from 'react';
import { StyleSheet, Text, View, Linking, Pressable, Alert} from "react-native";

export function PredictionList({ predictions = [] }) {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.container}>
  
      {predictions.map((p, i) => (
        <Pressable onPress={() => Linking.openURL('https://cooking.nytimes.com/guides/1-how-to-make-pizza')}>
          <Text style={styles.text} key={`item-${i}`}>
            {p.className}
          </Text>
        </Pressable>
      ))}
    </View>
  );
}

const margin = 24;

const styles = StyleSheet.create({
  container: {
    zIndex: 100,
    position: "absolute",
    bottom: margin,
    left: margin,
    right: margin,
    backgroundColor: "rgba(255,255,255,0.8)",
    padding: 8,
    borderRadius: 20,
    alignItems: "center",
  },
  text: {
    paddingVertical: 2,
    fontSize: 20,
  },
});
