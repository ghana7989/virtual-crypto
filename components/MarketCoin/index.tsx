import React from 'react'
import {View, Text, Image, Pressable} from 'react-native'
import {useNavigation} from '@react-navigation/native'
import styles from './styles'
import formatMoney from '../../utils/formatMoney'
import PercentageChange from '../PercentageChange'

export interface MarketCoinProps {
	marketCoin: {
		id: string | number
		image: string
		name: string
		symbol: string
		valueChange24H: number
		currentPrice: number
	}
}

const MarketCoin = (props: MarketCoinProps) => {
	const {
		marketCoin: {id, image, name, symbol, currentPrice, valueChange24H},
	} = props

	const navigation = useNavigation()

	return (
		<Pressable
			style={styles.root}
			onPress={() => navigation.navigate('CoinDetails')}
		>
			<View style={styles.left}>
				<Image style={styles.image} source={{uri: image}} />
				<View>
					<Text style={styles.name}>{name}</Text>
					<Text style={styles.symbol}>{symbol}</Text>
				</View>
			</View>
			<View style={{alignItems: 'flex-end'}}>
				<Text style={styles.value}>
					{formatMoney(valueChange24H * currentPrice)}
				</Text>
				<PercentageChange value={valueChange24H} />
			</View>
		</Pressable>
	)
}

export default MarketCoin
