import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

export const FlipboardIcon = ({ navigation }) => {
  const logo = require("../../assets/logo.png");
  return (
    <View style={styles.container}>
      <View>
        <Image
          style={{ width: 91, height: 91, marginTop: 123, marginBottom: 65 }}
          source={logo}
        />
      </View>

      <Text style={[styles.description, { marginTop: 8 }]}>DESCUBRA E </Text>
      <Text style={[styles.description, { marginTop: 7 }]}>COMPARTILHE AS </Text>
      <Text style={[styles.description, { marginTop: 7 }]}>HISTÓRIAS QUE</Text>
      <Text style={[styles.description, { marginTop: 7 }]}><Text style={[styles.description, { textDecorationLine: "underline"}]}>IMPORTAM</Text> PARA </Text>
      <Text style={[styles.description, { marginTop: 7 }]}>VOCÊ</Text>

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
    backgroundColor: "#404d5a",
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
    marginTop: 20,
    fontSize: 32,
    lineHeight: 37, 
    color: "white",
    fontFamily: "Arial",
    fontWeight: "900",
  },
  
  botao: {
    backgroundColor: "white",
    marginTop: 185,
    padding: 16,
    borderRadius: 3,
    paddingHorizontal: 20
  },
  comecar: {
    textAlign: "center",

    importamUnderline: {
      textDecorationColor: "white", 
      fontWeight: "900", 
    },
    
    
  },
});

export default FlipboardIcon;

