
import { Camera } from "expo-camera";
import React from "react";
import { Button } from 'react-native';

import { LoadingView } from "./src/LoadingView";
import { ModelView } from "./src/ModelView";
import { useTensorFlowLoaded } from "./src/useTensorFlow";

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  return (
      <NavigationContainer>
	  <Stack.Navigator initialRouteName="Home">
	      <Stack.Screen name="Home" component={HomeScreen} />
              <Stack.Screen name="Match" component={Capture} />
	  </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;


export default function Capture() {
  const isLoaded = useTensorFlowLoaded();
  const [permission, requestPermission] = Camera.useCameraPermissions();

  if (!permission?.granted) {
    return (
      <LoadingView message="Camera permission is required to continue">
        <Button title="Grant permission" onPress={requestPermission} />
      </LoadingView>
    );
  }
  
  if (!isLoaded) {
    return <LoadingView message="Loading TensorFlow" />;
  }

  return <ModelView />;
}
