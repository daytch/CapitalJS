import 'react-native-gesture-handler';
import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button
} from 'react-native';
import { Provider } from 'react-redux';

import store from './redux/store';
import Home from './screen/Home';

const App = () => {
  return (
    <>
      <Provider store={store}>
        <View style={{alignItem: "center", justifyContent: "center", flex: 1}}>
          <Home />
        </View>
      </Provider>
    </>
  );
};

export default App;
