import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Platform, SafeAreaView } from 'react-native';

// Import screens
import HomeScreen from './src/screens/HomeScreen';
import HargaScreen from './src/screens/HargaScreen';
import KalenderScreen from './src/screens/KalenderScreen';
import HamaScreen from './src/screens/HamaScreen';

// Import web resolver untuk navigation
import './src/navigation/web-resolver';

export type RootTabParamList = {
  Beranda: undefined;
  Harga: undefined;
  Kalender: undefined;
  Hama: undefined;
};

const Tab = createBottomTabNavigator<RootTabParamList>();

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#f5f5f5' }}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName: string = 'home';

              if (route.name === 'Beranda') {
                iconName = 'home';
              } else if (route.name === 'Harga') {
                iconName = 'attach-money';
              } else if (route.name === 'Kalender') {
                iconName = 'calendar-today';
              } else if (route.name === 'Hama') {
                iconName = 'bug-report';
              }

              return <Icon name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: '#2E7D32',
            tabBarInactiveTintColor: 'gray',
            headerStyle: {
              backgroundColor: '#2E7D32',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          })}
        >
          <Tab.Screen name="Beranda" component={HomeScreen} />
          <Tab.Screen name="Harga" component={HargaScreen} />
          <Tab.Screen name="Kalender" component={KalenderScreen} />
          <Tab.Screen name="Hama" component={HamaScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;
