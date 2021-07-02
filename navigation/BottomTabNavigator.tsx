/**
 * Learn more about createBottomTabNavigator:
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */

import {Ionicons, Feather, MaterialIcons} from '@expo/vector-icons'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import * as React from 'react'

import Colors from '../constants/Colors'
import useColorScheme from '../hooks/useColorScheme'
import HomeScreen from '../screens/HomeScreen'
import MarketScreen from '../screens/MarketScreen'
import PortfolioScreen from '../screens/PortfolioScreen'
import ProfileScreen from '../screens/ProfileScreen'
import RankingsScreen from '../screens/RankingScreen'
import {BottomTabParamList} from '../types'

const BottomTab = createBottomTabNavigator<BottomTabParamList>()

export default function BottomTabNavigator() {
	const colorScheme = useColorScheme()

	return (
		<BottomTab.Navigator
			initialRouteName='Home'
			tabBarOptions={{activeTintColor: Colors[colorScheme].tint}}
		>
			<BottomTab.Screen
				name='Home'
				component={HomeScreen}
				options={{
					tabBarIcon: ({color}) => (
						<Feather name='home' size={30} color={`${color || 'black'}`} />
					),
				}}
			/>
			<BottomTab.Screen
				name='Portfolio'
				component={PortfolioScreen}
				options={{
					tabBarIcon: ({color}) => (
						<Feather name='pie-chart' size={30} color={`${color || 'black'}`} />
					),
				}}
			/>
			<BottomTab.Screen
				name='Market'
				component={MarketScreen}
				options={{
					tabBarIcon: ({color}) => (
						<Feather name='activity' size={30} color={`${color || 'black'}`} />
					),
				}}
			/>
			<BottomTab.Screen
				name='Rankings'
				component={RankingsScreen}
				options={{
					tabBarIcon: ({color}) => (
						<MaterialIcons
							name='leaderboard'
							size={30}
							color={`${color || 'black'}`}
						/>
					),
				}}
			/>
			<BottomTab.Screen
				name='Profile'
				component={ProfileScreen}
				options={{
					tabBarIcon: ({color}) => (
						<Feather name='user' color={`${color || 'black'}`} size={30} />
					),
				}}
			/>
		</BottomTab.Navigator>
	)
}
