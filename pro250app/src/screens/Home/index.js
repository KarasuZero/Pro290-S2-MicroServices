import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { ScaledSheet, verticalScale } from "react-native-size-matters";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "../../components/CustomButton";
import CustomText from "../../components/CustomText";
import AsyncStorage from "@react-native-async-storage/async-storage";
const Home = ({ navigation }) => {
  // useEffect(() => {
  //   getData();
  // }, [navigation]);
  // const getData = async () => {
  //   const data = await AsyncStorage.getItem("data");
  //   console.log("--fat", data);
  //   if (data == null) {
  //     let a = 0;
  //     AsyncStorage.setItem("data", a.toString());
  //   } else {
  //     AsyncStorage.setItem("data", data);
  //   }
  // };
  return (
    <SafeAreaView style={styles.mainContainer}>
      <CustomText
        label="Home"
        fontSize={22}
        alignSelf="center"
        fontWeight="bold"
      />
     
      <CustomButton
        text="Go To Login"
        alignSelf="center"
        marginTop={verticalScale(50)}
        onPress={() => navigation.navigate("Login")}
      />
    </SafeAreaView>
  );
};

export default Home;

const styles = ScaledSheet.create({
  mainContainer: {
    alignItems: "center",
    flex: 1,
    padding: "20@ms",
  },
});
