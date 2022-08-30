import { Button,Alert, View,TextInput } from "react-native";
import React, { useState } from "react";
import { ScaledSheet, verticalScale } from "react-native-size-matters";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "../../components/CustomButton";
import CustomInput from "../../components/CustomInput";
import CustomText from "../../components/CustomText";

const Login = ({ navigation }) => {
 //sendId method
 //send password method
 //login verificaiton method
  const [userName, onChangeUserName] = React.useState("");
  const [passWord, onChangePassword] = React.useState("");


  return (
    <SafeAreaView style={styles.mainContainer}>
      <CustomText
        label="Login"
        fontSize={22}
        alignSelf="center"
        fontWeight="bold"
      />

      <TextInput style={{padding: `15px`, borderRadius: 80, marginTop:30, }} 
      placeholder="Enter Your User Name"
      onChangeText={onChangeUserName}
      value={userName}/>

      <TextInput style={{padding: `15px`, borderRadius: 80, marginTop:30, marginBottom: 50, }} type="password"
      placeholder="Enter Your Password"
      onChangeText={onChangePassword}
      value={passWord}/>
      
      
      <Button style={styles.bt}
        title="Login"
        onPress={() => navigation.navigate("Product")}
      />
      
      <CustomButton
        text="Register Page"
        alignSelf="center"
        marginTop={verticalScale(50)}
        onPress={() => navigation.navigate("Register")}
      />

      <View>Debugging info: user:{userName},pass:{passWord}</View>
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
  bt:{
    padding: `10px`,
    borderRadius: 80,
    justifyContent:'center',
  },
});