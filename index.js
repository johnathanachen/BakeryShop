import { AppRegistry, YellowBox } from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';

if (__DEV__) {
    require('react-devtools');
}

YellowBox.ignoreWarnings([
  'Warning: componentWillMount is deprecated',
  'Warning: componentWillReceiveProps is deprecated',
]);

AppRegistry.registerComponent(appName, () => App);