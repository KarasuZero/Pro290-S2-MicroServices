import React, { useState, useEffect } from "react";
import { Alert, View , Text, Image} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScaledSheet, verticalScale } from "react-native-size-matters";
import CustomText from "../../components/CustomText";

import CustomButton from "../../components/CustomButton";

const Articles = ({title,author,pic,dec,url}) => {
  return (
    <View>
     {/* pass product in as template and display the list of templates in return
     I grabed this section from my older project, need tweaking */}
    
      <Text style={{ fontSize: 18, fontWeight: '800',marginTop:50,}}>{title}</Text>
      <Text style={{ margin: 10 }}>Author : {author}</Text>
      <Text style={{ margin: 10 }}>{dec}</Text>
      <Text style={{ margin: 10 }}>Link to the article: {url}</Text>
      <Image
        source={{ uri: pic }}
        style={{ width: 200, height: 200, marginTop: 30 }}
      />

    </View>
  );
};


const Product = ({ route, navigation }) => {

  return (
    <SafeAreaView style={styles.mainContainer}>
      <CustomText
        label="Product"
        fontSize={22}
        alignSelf="center"
        fontWeight="bold"
      />

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
