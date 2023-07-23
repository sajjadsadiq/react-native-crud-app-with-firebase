import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { colors } from "../../theme/colors";

const Button = ({ customStyles, title, onPress }) => {
  return (
    <TouchableOpacity style={[styles.btn, customStyles]}>
      <Text style={styles.loginBtn}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  btn: {
    backgroundColor: colors.green,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 145,
    height: 50,
    borderRadius: 30,
    marginTop: 40,
  },
  loginBtn: {
    textAlign: "center",
    fontSize: 18,
    color: colors.white,
  },
});
