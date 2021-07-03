import {useRoute} from '@react-navigation/native'
import React, {FC, useEffect, useState} from 'react'
import {
	View,
	Text,
	Image,
	TextInput,
	Pressable,
	KeyboardAvoidingView,
	Platform,
} from 'react-native'
import formatMoney from '../../utils/formatMoney'
import styles from './styles'
import Toast from 'react-native-toast-message'
import {maxINR} from '../../assets/data/constants'
const image = require('../../assets/images/Saly-31.png')

interface CoinExchangeScreenProps {}
const CoinExchangeScreen: FC<CoinExchangeScreenProps> = () => {
	const route = useRoute()
	const [coinAmount, setCoinAmount] = useState('')
	const [coinINRValue, setCoinINRValue] = useState('')

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
	const onSellAll = () => {
		// setCoinAmount(portfolioCoin.amount)
	}

	const onBuyAll = () => {
		// setCoinUSDValue(usdPortfolioCoin?.amount || 0)
	}

	const onPlaceOrder = () => {
		if (isBuy && +coinINRValue > maxINR) {
			Toast.show({
				type: 'error',
				text1: 'Not Enough INR',
				text2: `Maximum INR you can use is ${formatMoney(maxINR)}`,
			})
			return
		}
		if (!isBuy && +coinAmount > coinData.amount) {
			Toast.show({
				type: 'error',
				text1: `Not Enough ${coinData?.symbol}`,
				text2: `Maximum you can use is ${formatMoney(coinData?.amount, false)}`,
			})
			return
		}
	}

	return (
		<>
			<KeyboardAvoidingView
				style={styles.root}
				behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
				keyboardVerticalOffset={50}
			>
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
								setCoinINRValue((+text * +coinData.currentPrice).toString())
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
								setCoinAmount((+text / +coinData.currentPrice).toString())
							}}
							placeholder='0'
							style={{width: '75%'}}
						/>
						<Text style={{fontWeight: 'bold'}}>INR</Text>
					</View>
				</View>
				{isBuy ? (
					<Pressable onPress={onBuyAll}>
						<Text style={{color: '#0097ff'}}>Buy max</Text>
					</Pressable>
				) : (
					<Pressable onPress={onSellAll}>
						<Text style={{color: '#0097ff'}}>Sell all</Text>
					</Pressable>
				)}
				<Pressable style={styles.button} onPress={onPlaceOrder}>
					<Text style={styles.buttonText}>Place Order</Text>
					{/* {isLoading && <ActivityIndicator color={'white'} />} */}
				</Pressable>
			</KeyboardAvoidingView>
		</>
	)
}

export default CoinExchangeScreen
