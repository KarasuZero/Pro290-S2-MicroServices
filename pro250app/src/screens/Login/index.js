import { Alert, View } from "react-native";
import React, { useState } from "react";
import { ScaledSheet, verticalScale } from "react-native-size-matters";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "../../components/CustomButton";
import CustomInput from "../../components/CustomInput";
import CustomText from "../../components/CustomText";

const Login = ({ navigation }) => {
 
  return (
    <SafeAreaView style={styles.mainContainer}>
      <CustomButton
        text="Go To Product"
        alignSelf="center"
        marginTop={verticalScale(50)}
        onPress={() => navigation.navigate("Product")}
      />
    </SafeAreaView>
  );
};

export default Login;

const styles = ScaledSheet.create({
  mainContainer: {
    width: "100%",
    padding: "20@ms",
    flex: 1,
  },
});
