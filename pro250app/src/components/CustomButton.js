import { TouchableOpacity } from 'react-native'
import React from 'react'
import CustomText from './CustomText'
import { ScaledSheet } from 'react-native-size-matters'
import colors from '../assets/util/colors'


const CustomButton = ({text,onPress,marginBottom,marginTop,alignSelf, disabled}) => {
  return (
    <TouchableOpacity disabled={disabled} style={[styles.mainContainer,disabled && {backgroundColor: 'grey'},{marginBottom:marginBottom,marginTop:marginTop,alignSelf:alignSelf}]} activeOpacity={0.6} onPress={onPress}>
        <CustomText label={text} fontWeight="bold" fontSize={15} color={colors.secondary} />
    </TouchableOpacity>
  )
}

export default CustomButton

const styles = ScaledSheet.create({
    mainContainer:{
        width: '100%',
        height:'45@vs',
        borderRadius:'100@vs',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:colors.primary
    }
})