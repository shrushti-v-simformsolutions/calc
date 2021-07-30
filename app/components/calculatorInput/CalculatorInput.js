import React from 'react'
import {View,Text, TextInput,StyleSheet} from 'react-native';

const CalculatorInput = ({onChangeText, placeholder}) => {
  return (
    <View>
        <TextInput 
        style={styles.textContainer} 
        placeholder={placeholder}
        onChangeText={onChangeText}/>
    </View>
  )
};

const styles = StyleSheet.create({
    textContainer:{
    borderColor:'black',
    borderWidth:2,
    height:40,
    margin:20,
    textAlign:'center'
},
})

export default CalculatorInput;
