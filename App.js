import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { View } from 'react-native';

import History from './components/History';
import AddEntry from './components/AddEntry';
import { reducer } from './reducers/index';

const App = () => (
  <Provider store={createStore(reducer)}>
    <View style={{ flex: 1 }}>
      <View style={{ height: 20 }} />
      <History />
      <AddEntry />
    </View>
  </Provider>
);

export default App;
