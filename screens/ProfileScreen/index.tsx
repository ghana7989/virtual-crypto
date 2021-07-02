import React, {FC, useState} from 'react'
import {FlatList, Image, Pressable, StyleSheet, Text, View} from 'react-native'

import {portfolioCoins} from '../../assets/data/dummyData'
import PortfolioCoin from '../../components/PortfolioCoin'
import formatMoney from '../../utils/formatMoney'
import styles from './styles'

const image = require('../../assets/images/Saly-16.png')
const user = {
	image: null,
}

interface ProfileScreenProps {}
const ProfileScreen: FC<ProfileScreenProps> = () => {
	const [user, setUser] = useState({
		id: 1238441192849408,
		name: 'Ghana',
		email: 'ghana@gmail.com',
		image:
			'https://media.discordapp.net/attachments/850370921092349973/859689036808847369/avatar.png?width=657&height=657',
		netWorth: 1000510,
	})

	function onSignOut() {}

	return (
		<View style={styles.root}>
			<Image style={styles.image} source={image} />

			<View style={styles.userContainer}>
				<Image
					style={styles.userImage}
					source={{
						uri:
							user?.image ||
							'https://media.discordapp.net/attachments/850370921092349973/859689036808847369/avatar.png?width=657&height=657',
					}}
				/>
				<View>
					<Text style={styles.name}>{user.name}</Text>
					<Text style={styles.email}>{user.email}</Text>
					<Text style={styles.value}>{formatMoney(user.netWorth)}</Text>
				</View>
			</View>

			<Pressable onPress={onSignOut} style={{marginTop: 'auto'}}>
				<Text style={{fontSize: 20, marginTop: 'auto'}}>Sign out</Text>
			</Pressable>
		</View>
	)
}

export default ProfileScreen
