import {useRoute} from '@react-navigation/native'
import React, {FC, useEffect, useState} from 'react'
import {View, Text, Image, TextInput} from 'react-native'
import formatMoney from '../../utils/formatMoney'
import styles from './styles'
import Toast from 'react-native-toast-message'
const image = require('../../assets/images/Saly-31.png')

interface CoinExchangeScreenProps {}
const CoinExchangeScreen: FC<CoinExchangeScreenProps> = () => {
	const route = useRoute()
	const [coinAmount, setCoinAmount] = useState('')
	const [coinINRValue, setCoinINRValue] = useState('')
	const maxINR = 10000000
	// @ts-ignore
	const {isBuy, coinData} = route.params

	useEffect(() => {
		const amount = parseFloat(coinAmount)
		if (!amount && amount !== 0) {
			setCoinAmount('')
			setCoinINRValue('')
			return
		}
	}, [coinAmount])
	useEffect(() => {
		const amount = parseFloat(coinINRValue)

		if (!amount && amount !== 0) {
			setCoinAmount('')
			setCoinINRValue('')
			return
		}
	}, [coinINRValue])

	return (
		<>
			<View style={styles.root}>
				<Text style={styles.title}>
					{isBuy ? 'Buy ' : 'Sell '}
					{coinData?.name}
				</Text>
				<Text style={styles.subtitle}>
					1 {coinData?.symbol}
					{' = '}
					{formatMoney(coinData?.currentPrice)}
				</Text>
				<Image style={styles.image} source={image} />
				<View style={styles.inputsContainer}>
					<View style={styles.inputContainer}>
						<TextInput
							keyboardType='numeric'
							value={coinAmount}
							onChangeText={text => {
								if (!/^\d*(\.\d+)?$/.test(text)) {
									Toast.show({
										type: 'error',
										text1: 'Error',
										text2: 'Enter a valid amount',
									})
									return
								}
								setCoinAmount(text)
								setCoinINRValue(
									(+coinAmount * +coinData.currentPrice).toString(),
								)
							}}
							placeholder='0'
							style={{width: '70%'}}
						/>
						<Text style={{fontWeight: 'bold'}}>{coinData?.symbol}</Text>
					</View>
					<Text style={{fontSize: 50}}>=</Text>
					<View style={styles.inputContainer}>
						<TextInput
							keyboardType='numeric'
							value={coinINRValue}
							onChangeText={text => {
								if (!/^\d*(\.\d+)?$/.test(text)) {
									Toast.show({
										type: 'error',
										text1: 'Error',
										text2: 'Enter a valid amount',
									})
									return
								}
								setCoinINRValue(text)
								setCoinAmount(
									(+coinINRValue / +coinData.currentPrice).toString(),
								)
							}}
							placeholder='0'
							style={{width: '75%'}}
						/>
						<Text style={{fontWeight: 'bold'}}>INR</Text>
					</View>
				</View>
			</View>
		</>
	)
}

export default CoinExchangeScreen
