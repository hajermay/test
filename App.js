import React from 'react';
import {Provider} from 'react-redux';
import configureStore from './src/redux/store';
import Navigator from './src/navigations';
const store = configureStore();

const App = () => {
  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  );
};
export default App;
