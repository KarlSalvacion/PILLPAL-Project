import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Taskbar from './components/Taskbar';

export default function App() {
  return (
    <NavigationContainer>
      <Taskbar />
    </NavigationContainer>
  );
}
