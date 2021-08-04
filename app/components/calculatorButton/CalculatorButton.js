import React from 'react';
import {View,Text,TouchableOpacity,StyleSheet} from 'react-native';

const CalculatorButton = ({title,onPress}) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.button}>
            <Text style={styles.buttonText}>{title}</Text>
           </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
button:{
 borderRadius:8,
  paddingVertical:5,
  paddingHorizontal:5,
  margin:5
},
buttonText:{
    fontWeight:'bold',
    fontSize:20,
    textAlign:'center',
    color:'dodgerblue'
}
});

export default CalculatorButton; 
