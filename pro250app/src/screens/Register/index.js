import { View,Button } from "react-native";
import React, { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScaledSheet, verticalScale } from "react-native-size-matters";
import CustomText from "../../components/CustomText";
import CustomButton from "../../components/CustomButton";
import AsyncStorage from "@react-native-async-storage/async-storage";
const Register = ({ navigation, route }) => {

  return (
<SafeAreaView style={styles.mainContainer}>
      <CustomText
        label="Register"
        fontSize={22}
        alignSelf="center"
        fontWeight="bold"
      />

      <input ></input>
      <input type="password"></input>
      <Button
        title="Login"
        onPress={() => navigation.navigate("Product")}
      />
      
      <CustomButton
        text="Login Page"
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
    padding: "20@ms",
  },
});
