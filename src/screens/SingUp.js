import { View, Pressable, StyleSheet, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors } from "../theme/colors";
import { spacing } from "../theme/spacing";
import InputText from "../components/InputText/InputText";
import Text from "../components/CustomeText/Text";
import Button from "../components/Button/Button";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const SingUp = ({ navigation }) => {
  // const navigation = useNavigation();
  return (
    <SafeAreaView>
      <View style={styles.backBtn}>
        <Pressable onPress={() => {navigation.goBack()}}>
          <AntDesign name="arrowleft" size={24} color="black" />
        </Pressable>
        <Text style={{ fontSize: 20 }}>Sing Up</Text>
      </View>
      <View>
        {/* Input Feild & Title */}
        <View>
          {/* Input Text Component */}
          <InputText placeholder="Full Name" />
          <InputText placeholder="Email" />
          <InputText placeholder="Password" secureTextEntry/>
          <InputText placeholder="Age" />
        </View>

        {/* Button Component */}
        <Button customStyles={{ alignSelf: "center" }} title="Sing Up" />

        {/* Footer */}
        <View style={styles.footerText}>
          <Text> Already have a account?</Text>
          <Pressable
            onPress={() => {
              navigation.navigate("SingIn");
            }}
          >
            <Text style={styles.singUpText}>Sing In</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SingUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  backBtn: {
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
    paddingHorizontal: 34,
    marginBottom: 50,
    marginTop: 5,
  },
  loginText: {
    textAlign: "center",
    marginTop: 14,
  },

  footerText: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 80,
    alignSelf: "center",
  },
  singUpText: {
    color: colors.green,
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: spacing[2],
  },
});
