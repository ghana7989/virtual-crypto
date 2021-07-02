import React, {FC} from 'react'
import {FlatList, Image, Text, View} from 'react-native'
import {marketCoins, portfolioCoins} from '../../assets/data/dummyData'
import MarketCoin from '../../components/MarketCoin'
import PortfolioCoin from '../../components/PortfolioCoin'
const image = require('../../assets/images/crypto-market.png')
import styles from './styles'

interface MarketScreenProps {}
const MarketScreen: FC<MarketScreenProps> = () => {
	return (
		<View style={styles.root}>
			<FlatList
				style={{width: '100%'}}
				data={marketCoins}
				keyExtractor={(item, _) => item.id.toString()}
				renderItem={({item}) => {
					return <MarketCoin marketCoin={item} key={item.id} />
				}}
				ListHeaderComponentStyle={{alignItems: 'center'}}
				showsVerticalScrollIndicator={false}
				ListHeaderComponent={() => {
					return (
						<>
							<Image style={styles.image} source={image} />
							<Text style={styles.label}>Market</Text>
							{/* <Text style={styles.balance}>${formatMoney(balance)}</Text> */}
						</>
					)
				}}
			/>
		</View>
	)
}

export default MarketScreen
