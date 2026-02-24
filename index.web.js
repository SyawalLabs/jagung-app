// index.web.js
import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';

// Import untuk web
import { Platform } from 'react-native';

// Register the app
AppRegistry.registerComponent(appName, () => App);

// Register web-specific rendering
if (Platform.OS === 'web') {
  AppRegistry.runApplication(appName, {
    initialProps: {},
    rootTag: document.getElementById('root'),
  });
}
