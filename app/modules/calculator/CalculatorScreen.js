import React,{useState} from 'react';
import {View,Text, TextInput} from 'react-native';
import { useDispatch,useSelector } from 'react-redux';
import actionTypes from '../../redux/actions';
import AppStyles from '../../themes/AppStyles';
import styles from './CalculatorStyles';
import CalculatorButton from '../../components/calculatorButton/CalculatorButton';
import CalculatorInput from '../../components/calculatorInput/CalculatorInput';

const CalculatorScreen = () => {
    const dispatch = useDispatch();
    const [number1, setNumber1] = useState(0);
    const [number2, setNumber2] = useState(0);
    const output = useSelector(state=>state.calculator.output);
    return(
        <View style={AppStyles.screenContainer}>
            <CalculatorInput
            placeholder="Enter Number 1"
            onChangeText={setNumber1}/>
            <CalculatorInput
            placeholder="Enter Number 2"
            onChangeText={setNumber2}/>

            <View style={styles.buttonContainer}>
            <CalculatorButton
                title="Add"
                onPress={() => {
                dispatch({type:actionTypes.sum,payload:{input1:parseInt(number1),input2:parseInt(number2)}})
            }} 
            />
            </View>
           <View style={styles.buttonContainer}>
            <CalculatorButton
            title="Subtract"
            onPress={() => {
                dispatch({type:actionTypes.subtract,payload:{input1:number1,input2:number2}})
            }}/>
           </View>
           <View style={styles.buttonContainer}>
            <CalculatorButton
            title="Multiply"
            onPress={() => {
                dispatch({type:actionTypes.multiply,payload:{input1:number1,input2:number2}})
            }}/>
           </View>
            <View style={styles.buttonContainer}>
            <CalculatorButton 
            title="Division"
            onPress={() => {
                dispatch({type:actionTypes.division,payload:{input1:number1,input2:number2}})
            }}/>
            </View>
            <View style={styles.buttonContainer}>
            <CalculatorButton
            title="Modulus"
             onPress={() => {
                dispatch({type:actionTypes.modulus,payload:{input1:number1,input2:number2}})
            }}
            />
            </View>
            <View style={styles.buttonContainer}>
            <CalculatorButton 
            title="Clear"
            onPress={() => {
                dispatch({type:actionTypes.clear,payload:{input1:0,input2:0}})
            }}/>
            </View>
            <Text style={styles.text}>Output: {output} </Text>
        </View>
    );
};

export default CalculatorScreen;