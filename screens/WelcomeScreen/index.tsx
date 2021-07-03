import React from 'react'
import {View, Text, Image, Pressable, Platform} from 'react-native'
import {rupeeSymbol} from '../../assets/data/constants'
import styles from './styles'
const image = require('../../assets/images/Saly-1.png')

const WelcomeScreen = () => {
	function signInGoogle() {}
	function signInApple() {}
	return (
		<View style={styles.root}>
			<Image style={styles.image} source={image} />
			<Text style={styles.header1}>Welcome to VCrypto</Text>
			<Text style={styles.header2}>
				Invest your virtual {rupeeSymbol}100.000 and compete with others
			</Text>

			<View style={styles.buttonContainer}>
				<Pressable onPress={signInGoogle} style={styles.googleButton}>
					<Image
						style={styles.buttonImage}
						source={{
							uri: 'https://raw.githubusercontent.com/react-native-community/google-signin/f7b82e8d611baad5ed507a80418ec00f128a44ea/img/signin-button.png',
						}}
					/>
				</Pressable>
			</View>
		</View>
	)
}

export default WelcomeScreen
