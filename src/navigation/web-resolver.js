// src/navigation/web-resolver.js
// Ini untuk membantu React Navigation bekerja di web

import { Platform } from 'react-native';

if (Platform.OS === 'web') {
  // Polyfill untuk modul yang tidak ada di web
  require('react-native/Libraries/Image/AssetRegistry');
}
