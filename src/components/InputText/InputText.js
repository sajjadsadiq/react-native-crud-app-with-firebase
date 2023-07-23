import { View, StyleSheet, TextInput } from "react-native";
import React from "react";
import { spacing } from "../../theme/spacing";

const InputText = ({ placeholder, secureTextEntry }) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

export default InputText;

const styles = StyleSheet.create({
  inputContainer: {
    paddingHorizontal: spacing[8],
    paddingVertical: spacing[3],
  },
  textInput: {
    paddingHorizontal: spacing[4],
    paddingVertical: spacing[1],
    fontSize: 18,
    borderBottomWidth: 0.5,
    borderColor: "#000000",
    borderRadius: 5,
  },
});
