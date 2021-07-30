import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  useColorScheme,
} from 'react-native';
import {
  Colors
} from 'react-native/Libraries/NewAppScreen';
import { Provider } from 'react-redux';
import store from './app/redux/configStore';
import CalculatorScreen from './app/modules/calculator/CalculatorScreen';
import AppStyles from './app/themes/AppStyles';


const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <Provider store={store}>
    <SafeAreaView style={AppStyles.appContainer}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <CalculatorScreen/>
    </SafeAreaView>
     </Provider>
  );
};
export default App;
