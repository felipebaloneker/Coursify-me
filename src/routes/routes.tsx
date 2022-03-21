import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import {Post} from '../screens/Post'
import {Home} from '../screens/Home'

export type RootStackParamList = {
    Home: undefined;
    Post: undefined;
  };

export function AppRoutes(){
    const Stack = createStackNavigator();
    return(
        <Stack.Navigator>
            <Stack.Screen
            name='Home'
            component={Home}
            />
            <Stack.Screen
            name='Post'
            component={Post}
            />
        </Stack.Navigator>
    )
}