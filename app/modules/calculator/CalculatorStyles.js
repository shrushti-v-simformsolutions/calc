import {StyleSheet} from 'react-native';
import AppStyles from '../../themes/AppStyles';

const styles = StyleSheet.create({
screenContainer:{
    ...AppStyles.container,
    justifyContent:'center', 
},
text:{
       textAlign:'center',
        fontSize:20,
        margin:20 
    },
});

export default styles;