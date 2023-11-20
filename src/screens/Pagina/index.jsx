import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

export const FlipboardIcon = ({ navigation }) => {
  const logo = require("../../assets/logo.png");
  return (
    <View style={styles.container}>
      <View>
        <Image
          style={{ width: 80, height: 80, marginTop:123, marginBottom: 65, }}
          source={logo}
        />
      </View>

      <Text style={styles.description}>DESCUBRA E </Text>
      <Text style={styles.description}>COMPARTILHE AS </Text>
      <Text style={styles.description}>HISTÓRIAS QUE</Text>
      <Text style={styles.description}>IMPORTAM PARA </Text>
      <Text style={styles.description}>VOCÊ</Text>

      <TouchableOpacity
        onPress={() => navigation.navigate("Segunda")}
        style={styles.botao}
      >
        <Text style={styles.comecar}>Começar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    

    backgroundColor: "#343F48", 
    padding: 20,
  },
  icon: {
    marginTop: 50,
    width: 80,
    height: 80,
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    marginBottom: 30,
  },
  iconText: {
    color: "white",
    fontSize: 40,
    fontWeight: "bold",
    fontFamily: "Arial",
  },
  description: {
    marginTop: 10,
    fontSize: 20,
    lineHeight: 24,
    color: "white",
    fontFamily: "Arial",
    fontWeight: "bold",

    

  },
  importam: {
    textDecorationLine: "underline",
    fontWeight: "bold",
    marginTop: 50,
    fontSize: 20,
    lineHeight: 24,
    color: "white",
    fontFamily: "Arial",
  },

  botao: {
    backgroundColor: "white",
    marginTop: 180,
    padding: 10,
    borderRadius: 3,
  },

  comecar: {
    textAlign: "center",
  },
});

export default FlipboardIcon;
