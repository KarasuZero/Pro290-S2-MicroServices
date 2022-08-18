import { Alert, View } from "react-native";
import React, { useState } from "react";
import { ScaledSheet, verticalScale } from "react-native-size-matters";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "../../components/CustomButton";
import CustomInput from "../../components/CustomInput";
import CustomText from "../../components/CustomText";

const Register = ({ navigation }) => {
 
  return (
    <SafeAreaView style={styles.mainContainer}>
      <CustomText
        label="Register"
        fontSize={22}
        alignSelf="center"
        fontWeight="bold"
      />

      <input></input>
      <input type="password"></input>
      <button type="button">Register</button>
      <CustomButton
        text="Back to Login"
        alignSelf="center"
        marginTop={verticalScale(50)}
        onPress={() => navigation.navigate("Login")}
      />
    </SafeAreaView>
  );
};

export default Register;

const styles = ScaledSheet.create({
  mainContainer: {
    width: "100%",
    padding: "20@ms",
    flex: 1,
  },
});
