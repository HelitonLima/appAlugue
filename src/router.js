import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Feather } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';

import Detail from './pages/Detail/Detail';
import Home from './pages/Home/Home';

const Stack = createStackNavigator();

export default function Routes() {
    return (
        <NavigationContainer style={{ backgroundColor: '#2b2b2b' }}>
            <Stack.Navigator screenOptions={{
                headerShownd: false
            }}>
                <Stack.Screen
                    name="Alugue"
                    component={Home}
                    options={{
                        title: 'ALUGUE',
                        headerTitleStyle: {
                            fontFamily: 'Montserrat_700Bold'
                        },

                        headerRight: () => (
                            <TouchableOpacity style={{ marginRight: 15 }}>
                                <Feather
                                    name="shopping-bag"
                                    size={24}
                                    color="black"
                                />
                            </TouchableOpacity>
                        )
                    }}
                />
                <Stack.Screen
                    name="Detail"
                    component={Detail}
                    options={{
                        title: 'Detalhe',
                        headerTitleStyle: {
                            fontFamily: 'Montserrat_700Bold'
                        },

                        headerRight: () => (
                            <TouchableOpacity style={{ marginRight: 15 }}>
                                <Feather
                                    name="shopping-bag"
                                    size={24}
                                    color="black"
                                />
                            </TouchableOpacity>
                        )
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

