import React, {FC} from 'react'
import {StyleSheet, View, Text, Image} from 'react-native'
import {FlatList} from 'react-native-gesture-handler'
import {portfolioCoins} from '../../assets/data/dummyData'
import PortfolioCoin from '../../components/PortfolioCoin'
import formatMoney from '../../utils/formatMoney'
import styles from './styles'
const image = require('../../assets/images/Saly-10.png')

interface PortfolioScreenProps {}
const PortfolioScreen: FC<PortfolioScreenProps> = () => {
	return (
		<View style={styles.root}>
			<FlatList
				style={{width: '100%'}}
				data={portfolioCoins}
				keyExtractor={(item, _) => item.id.toString()}
				renderItem={({item}) => {
					return <PortfolioCoin portfolioCoin={item} key={item.id} />
				}}
				ListHeaderComponentStyle={{alignItems: 'center'}}
				showsVerticalScrollIndicator={false}
				ListHeaderComponent={() => {
					return (
						<>
							<Image style={styles.image} source={image} />
							<View style={styles.balanceContainer}>
								<Text style={styles.label}>Portfolio balance</Text>
								{/* <Text style={styles.balance}>${formatMoney(balance)}</Text> */}
								<Text style={styles.balance}>₹1,00,000</Text>
							</View>
						</>
					)
				}}
			/>
		</View>
	)
}

export default PortfolioScreen
