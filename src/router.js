import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Feather } from '@expo/vector-icons';
import { TouchableOpacity } from "react-native-web";

import { createDrawerNavigator } from "@react-navigation/drawer";

import Home from './pages/Home';
import Detail from './pages/Detail';


const Stack = createNativeStackNavigator();

function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="home" component={Home} options={{
                    title: 'Alugue',
                    headerTitleStyle: {
                        fontFamily: 'Montserrat_700Bold'
                    },

                    headerRight: () => (
                        <TouchableOpacity>
                            <Feather
                                name="shopping-bag"
                                size={24}
                                color="black"
                            />
                        </TouchableOpacity>
                    )
                }} />
                <Stack.Screen name="detail" component={Detail}
                    options={{
                        title: 'Detalhes',
                        headerTitleStyle: {
                            fontFamily: 'Montserrat_700Bold'
                        },

                        headerRight: () => (
                            <TouchableOpacity>
                                <Feather
                                    name="shopping-bag"
                                    size={24}
                                    color="black"

                                />
                            </TouchableOpacity>
                        )
                    }} />
            </Stack.Navigator>

        </NavigationContainer>
    );
}

export default Routes;