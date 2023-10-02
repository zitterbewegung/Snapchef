import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  return (
      <NavigationContainer>
	  <Stack.Navigator initialRouteName="Home">
	      <Stack.Screen name="Home" component={HomeScreen} />
              <Stack.Screen name="Details" component={DetailsScreen} />
	  </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
