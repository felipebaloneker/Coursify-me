import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import {Post} from '../screens/Post'
import {Home} from '../screens/Home'
const screens={
    Home:{
        screen:Home
    },
    Post:{
        screen:Post
    }
}
  const Stack = createStackNavigator();

export default function Routes(){
    return(
        <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Post" component={Post} />
        </Stack.Navigator>
      </NavigationContainer>
    )
}