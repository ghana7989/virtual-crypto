import React, {FC} from 'react'
import {Dimensions} from 'react-native'
import {LineChart} from 'react-native-chart-kit'

interface CoinPriceGraphProps {
	data: number[]
}
const CoinPriceGraph: FC<CoinPriceGraphProps> = ({data}) => {
	return (
		<>
			<LineChart
				data={{
					labels: ['-7d', '-6d', '-5d', '-4d', '-3d', '-2d', '-1d', 'today'],
					datasets: [{data}],
				}}
				width={Dimensions.get('window').width - 30} // from react-native
				height={220}
				yAxisLabel='₹'
				yAxisSuffix='k'
				withDots={false}
				withInnerLines={false}
				withOuterLines={false}
				yAxisInterval={1}
				chartConfig={{
					backgroundColor: '#e26a00',
					backgroundGradientFrom: '#fb8c00',
					backgroundGradientTo: '#ffa726',
					decimalPlaces: 2, // optional, defaults to 2dp
					color: () => `rgba(0,0,0)`,
					labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
					style: {
						borderRadius: 16,
					},
				}}
				bezier
				style={{
					marginVertical: 8,
					borderRadius: 16,
				}}
			/>
		</>
	)
}

export default CoinPriceGraph
