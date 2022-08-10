import { View } from "react-native";
import React, { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScaledSheet, verticalScale } from "react-native-size-matters";
import CustomText from "../../components/CustomText";
import CustomButton from "../../components/CustomButton";
import AsyncStorage from "@react-native-async-storage/async-storage";
const CheckOut = ({ navigation, route }) => {

  return (
    <SafeAreaView style={styles.mainContainer}>
     
      <CustomButton
        text="Go To Home"
        onPress={() => navigation.navigate("Home")}
        marginBottom={verticalScale(20)}
      />
    </SafeAreaView>
  );
};

export default CheckOut;

const styles = ScaledSheet.create({
  mainContainer: {
    padding: "20@ms",
  },
});
