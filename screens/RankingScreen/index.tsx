import React, {FC} from 'react'
import {StyleSheet, View, Text, FlatList, Image} from 'react-native'
import {users} from '../../assets/data/dummyData'
import UserRankingItem from '../../components/UserRanking'
import styles from './styles'
const image = require('../../assets/images/Saly-20.png')

interface RankingScreenProps {}
const RankingsScreen: FC<RankingScreenProps> = () => {
	return (
		<View style={styles.root}>
			<FlatList
				style={{width: '100%'}}
				data={users}
				renderItem={({item, index}) => {
					return <UserRankingItem user={item} place={index + 1} />
				}}
				keyExtractor={(item, index) => index.toString()}
				// onRefresh={fetchUsers}
				// refreshing={loading}
				showsVerticalScrollIndicator={false}
				ListHeaderComponentStyle={{alignItems: 'center'}}
				ListHeaderComponent={() => (
					<>
						<Image style={styles.image} source={image} />
						<Text style={styles.label}>Rankings</Text>
					</>
				)}
			/>
		</View>
	)
}

export default RankingsScreen
