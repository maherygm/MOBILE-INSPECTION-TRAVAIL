import React, {useEffect} from 'react';
import {View, Text, Button} from 'react-native';
import Index from './src/pages';
import NativeDevSettings from 'react-native/Libraries/NativeModules/specs/NativeDevSettings';
export default function App() {
  // Assign this to a dev-only button or useEffect call
  const connectToRemoteDebugger = () => {
    NativeDevSettings.setIsDebuggingRemotely(true);
  };

  return (
    <View style={{flex: 1}}>
      <Index />
      <View style={{position: 'absolute', bottom: 0}}>
        <Button title="debug" onPress={connectToRemoteDebugger} />
      </View>
    </View>
  );
}
