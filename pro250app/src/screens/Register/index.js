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

      <input style={{padding: `15px`, borderRadius: 80, marginTop:30}} 
      placeholder="Create Your User Name">

      </input>


      <input style={{padding: `15px`, borderRadius: 80, marginTop:30, marginBottom: 50}} type="password"
      placeholder="Create Your Password">
      
      </input>
      <Button
        title="Register"
        onPress={() => navigation.navigate("Product")}
      />
      
      <CustomButton
        text="Back"
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
  bt:{
    padding: `10px`,
    borderRadius: 80,
    justifyContent:'center',
  },
  inputField:{
    justifyContent:'center',
    padding: `15px`, 
    borderRadius: 80, 
    marginBottom:40,
  },
});
