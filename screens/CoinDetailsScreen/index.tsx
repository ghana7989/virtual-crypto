import {AntDesign} from '@expo/vector-icons'
import {useNavigation} from '@react-navigation/native'
import React, {FC, useState} from 'react'
import {StyleSheet, View, Text, Image, Pressable} from 'react-native'
import {prices} from '../../assets/data/dummyData'
import CoinPriceGraph from '../../components/CoinPriceGraph'
import PercentageChange from '../../components/PercentageChange'
import {RootStackNavigationProps} from '../../types'
import formatMoney from '../../utils/formatMoney'

import styles from './styles'

interface CoinDetailsScreenProps {}
const CoinDetailsScreen: FC<CoinDetailsScreenProps> = () => {
	const [coinData, setCoinData] = useState({
		id: 1,
		name: 'Bitcoin',
		image:
			'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/BTC_Logo.svg/600px-BTC_Logo.svg.png',
		symbol: 'BTC',
		valueChange24H: -9.87,
		valueChange1H: 0.87,
		valueChange7D: -89.87,
		currentPrice: 1000,
		amount: 99999,
	})

	const navigation = useNavigation()

	function onBuy() {
		navigation.navigate('CoinExchange', {isBuy: true, coinData})
	}
	function onSell() {
		navigation.navigate('CoinExchange', {isBuy: false, coinData})
	}

	return (
		<View style={styles.root}>
			<View style={styles.topContainer}>
				<View style={styles.left}>
					<Image style={styles.image} source={{uri: coinData.image}} />
					<View>
						<Text style={styles.name}>{coinData.name}</Text>
						<Text style={styles.symbol}>{coinData.symbol}</Text>
					</View>
				</View>
				<View style={{alignItems: 'flex-end'}}>
					<AntDesign name='staro' size={30} color='#2f95dc' />
				</View>
			</View>

			<View style={styles.row}>
				<View style={styles.valueContainer}>
					<Text style={styles.label}>Current Price</Text>
					<Text style={styles.value}>
						{formatMoney(coinData.currentPrice, true)}
					</Text>
				</View>

				<View style={styles.valueContainer}>
					<Text style={styles.label}>1 Hour</Text>
					<PercentageChange
						style={styles.value}
						value={coinData.valueChange1H}
						isINR={false}
					/>
				</View>
				<View style={styles.valueContainer}>
					<Text style={styles.label}>1 Day </Text>
					<PercentageChange
						style={styles.value}
						value={coinData.valueChange24H}
						isINR={false}
					/>
				</View>
				<View style={styles.valueContainer}>
					<Text style={styles.label}>7 Days</Text>
					<PercentageChange
						style={styles.value}
						value={coinData.valueChange7D}
						isINR={false}
					/>
				</View>
			</View>
			{/* Graph */}
			<CoinPriceGraph data={prices} />
			{/* Graph End */}
			<View style={styles.row}>
				<Text>Position</Text>
				<Text>
					{coinData.symbol} {formatMoney(coinData?.amount || 0, false)} ({' '}
					{formatMoney(coinData.currentPrice * (coinData?.amount || 0))})
				</Text>
			</View>
			<View style={[styles.row, {marginTop: 'auto'}]}>
				<Pressable
					style={[styles.button, {backgroundColor: '#20b100'}]}
					onPress={onBuy}
				>
					<Text style={styles.buttonText}>Buy</Text>
				</Pressable>

				<Pressable
					style={[styles.button, {backgroundColor: '#ff0000'}]}
					onPress={onSell}
				>
					<Text style={styles.buttonText}>Sell</Text>
				</Pressable>
			</View>
		</View>
	)
}

export default CoinDetailsScreen
