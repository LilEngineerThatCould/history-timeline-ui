import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import TimelineScreen from './src/screens/TimelineScreen';
import GamesScreen from './src/screens/GamesScreen';
import ExploreScreen from './src/screens/ExploreScreen';

const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();

export default function App() {
    return (
        <>
            <NavigationContainer>
                <BottomTab.Navigator>
                    <BottomTab.Screen
                        name='Explore'
                        component={ExploreScreen}
                    />
                    <BottomTab.Screen
                        name='Timeline'
                        component={TimelineScreen}
                    />
                    <BottomTab.Screen
                        name='Games'
                        component={GamesScreen}
                    />
                </BottomTab.Navigator>
            </NavigationContainer>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
