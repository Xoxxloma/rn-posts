import React from "react";
import { StyleSheet, Text, View } from "react-native";

export const AboutScreen = () => {
  return (
    <View style={styles.wrap}>
      <Text style={styles.title}>About App</Text>
      <Text>
        Version: <Text style={{ fontWeight: "bold" }}>1.0.0</Text>
      </Text>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
        venenatis neque ut metus aliquet, semper dapibus purus ultrices. Sed
        porttitor tortor nec diam faucibus iaculis. Aliquam imperdiet risus at
        tristique pellentesque. Ut ut dui volutpat libero pretium iaculis. Proin
        porttitor, massa vel placerat mollis, ligula nisi bibendum erat, ut
        eleifend purus neque a metus. Vivamus at luctus est. Mauris pharetra
        malesuada sapien. Interdum et malesuada fames ac ante ipsum primis in
        faucibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  wrap: {
    padding: 20,
    marginVertical: 15,
  },
  title: {
    textAlign: "center",
    fontSize: 30,
  },
});
