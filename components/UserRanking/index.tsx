import React from 'react'
import {View, Text, Image} from 'react-native'
import styles from './styles'
import formatMoney from '../../utils/formatMoney'

export interface UserRankingItemProps {
	id?: number | string
	place: number
	user: {
		id: number | string
		image: string
		name: string
		netWorth: number
	}
}

const UserRankingItem = (props: UserRankingItemProps) => {
	const {
		user: {image, name, netWorth},
		place,
	} = props
	return (
		<View style={styles.root}>
			<View style={styles.left}>
				<Text style={styles.place}>{place}</Text>
				<Image style={styles.image} source={{uri: image}} />
				<View>
					<Text style={styles.name}>{name}</Text>
				</View>
			</View>
			<View style={{alignItems: 'flex-end'}}>
				{/* <Text style={styles.value}>${formatMoney(netWorth, 0)}</Text> */}
				<Text style={styles.value}>{formatMoney(netWorth)}</Text>
			</View>
		</View>
	)
}

export default UserRankingItem
