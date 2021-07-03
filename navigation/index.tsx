/**
 * If you are not familiar with React Navigation, check out the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import {
	NavigationContainer,
	DefaultTheme,
	DarkTheme,
} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import * as React from 'react'
import {ColorSchemeName} from 'react-native'
import CoinDetailsScreen from '../screens/CoinDetailsScreen'
import CoinExchangeScreen from '../screens/CoinExchangeScreen'

import NotFoundScreen from '../screens/NotFoundScreen'
import WelcomeScreen from '../screens/WelcomeScreen'
import {RootStackParamList} from '../types'
import BottomTabNavigator from './BottomTabNavigator'
import LinkingConfiguration from './LinkingConfiguration'

export default function Navigation({
	colorScheme,
}: {
	colorScheme: ColorSchemeName
}) {
	return (
		<NavigationContainer
			linking={LinkingConfiguration}
			theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
		>
			<RootNavigator />
		</NavigationContainer>
	)
}

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator<RootStackParamList>()

function RootNavigator() {
	return (
		<Stack.Navigator initialRouteName='Welcome'>
			<Stack.Screen
				options={{headerShown: false}}
				name='Welcome'
				component={WelcomeScreen}
			/>
			<Stack.Screen
				options={{headerShown: false}}
				name='Root'
				component={BottomTabNavigator}
			/>
			<Stack.Screen
				name='CoinDetails'
				options={{
					title: 'Coin Data',
				}}
				component={CoinDetailsScreen}
			/>
			<Stack.Screen
				name='CoinExchange'
				options={{
					title: 'Coin Exchange',
				}}
				component={CoinExchangeScreen}
			/>
			<Stack.Screen
				name='NotFound'
				component={NotFoundScreen}
				options={{title: 'Oops!'}}
			/>
		</Stack.Navigator>
	)
}
