import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { View } from 'react-native';

import AddEntry from './components/AddEntry';
import { reducer } from './reducers/index';

const App = () => (
  <Provider store={createStore(reducer)}>
    <View>
      <AddEntry />
    </View>
  </Provider>
);

export default App;
