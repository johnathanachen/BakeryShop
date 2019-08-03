import React from 'react';
import { Provider } from 'react-redux'
import configureStore from './redux/configureStore'
import Directions from './screens/Directions';

const store = configureStore()

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Directions />
      </Provider>
    );
  }
}

export default App;
