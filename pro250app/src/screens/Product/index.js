import React, { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScaledSheet, verticalScale } from "react-native-size-matters";
import CustomText from "../../components/CustomText";

import CustomButton from "../../components/CustomButton";


const Product = ({ route, navigation }) => {

  return (
    <SafeAreaView style={styles.mainContainer}>
      <CustomButton
        text="Go To Cart"
        alignSelf="center"
        marginTop={verticalScale(50)}
        onPress={() => navigation.navigate("Cart")}
      />
    </SafeAreaView>
  );
};

export default Product;

const styles = ScaledSheet.create({
  mainContainer: {
    padding: "20@ms",
  },
});
