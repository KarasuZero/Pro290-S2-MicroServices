import { View, TextInput } from "react-native";
import React from "react";
import { ScaledSheet } from "react-native-size-matters";
import colors from "../assets/util/colors";

const CustomInput = ({ inputStyle, placeholder, onChangeText, disable,value,keyboardType }) => {
  return (
    <View>
      <TextInput
        style={[styles.input, inputStyle]}
        placeholder={placeholder}
        onChangeText={onChangeText}
        editable={disable}
        value={value}
        keyboardType={keyboardType}
        placeholderTextColor={colors.primary}
      />

    </View>
  );
};

export default CustomInput;

const styles = ScaledSheet.create({
  input: {
    borderWidth: 2,
    padding: 0,
    margin: 0,
    borderColor: colors.primary,
    width: "100%",
    height: "45@vs",
    paddingHorizontal: "20@s",
    borderRadius: "8@ms",
  },
});
