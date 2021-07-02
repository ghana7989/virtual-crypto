import {RouteProp} from '@react-navigation/native'
import {StackNavigationProp} from '@react-navigation/stack'

export type RootStackParamList = {
	Root: undefined
	NotFound: undefined
	CoinDetails: undefined
	CoinExchange: undefined
}
export type RootStackNavigationProps<T extends keyof RootStackParamList> = {
	navigation: StackNavigationProp<RootStackParamList, T>
	route: RouteProp<RootStackParamList, T>
}
export type BottomTabParamList = {
	Home: undefined
	Portfolio: undefined
	Market: undefined
	Rankings: undefined
	Profile: undefined
}
