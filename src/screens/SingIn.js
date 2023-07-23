import { View, Pressable, StyleSheet, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors } from "../theme/colors";
import { spacing } from "../theme/spacing";
import { Login } from "../../assets/img";
import InputText from "../components/InputText/InputText";
import Text from "../components/CustomeText/Text";
import Button from "../components/Button/Button";

const SingIn = ({ navigation }) => {
  return (
    <SafeAreaView>
      <View>
        {/* Login Images */}
        <Image style={styles.loginImg} source={Login} />

        {/* Input Feild & Title */}
        <View>
          <Text style={styles.loginText} preset="h3">
            Nevr Forget Your Notes
          </Text>
          {/* Input Text Component */}
          <InputText placeholder="Email" />
          <InputText placeholder="Password" secureTextEntry/>
        </View>

        {/* Button Component */}
        <Button customStyles={{ alignSelf: "center" }} title="Login" />

        {/* Footer */}
        <View style={styles.footerText}>
          <Text> Don't have an account?</Text>
          <Pressable
            onPress={() => {
              navigation.navigate("SingUp");
            }}
          >
            <Text style={styles.singUpText}>SingUp</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SingIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loginImg: {
    width: 300,
    height: 300,
    alignSelf: "center",
  },
  loginText: {
    textAlign: "center",
    marginTop: 20,
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
