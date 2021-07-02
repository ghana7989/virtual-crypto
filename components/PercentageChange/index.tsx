import React, {FC} from 'react'
import {StyleSheet, View, Text, StyleProp} from 'react-native'
import formatMoney from '../../utils/formatMoney'

interface PercentageChangeProps {
	value: number
	style?: StyleProp<any>
	isINR?: boolean
}
const PercentageChange: FC<PercentageChangeProps> = ({
	value,
	style,
	isINR = true,
}) => {
	return (
		<>
			<Text style={[style, {color: value > 0 ? '#398f0a' : '#f10'}]}>
				{value > 0 && '+'}
				{formatMoney(value, isINR)}%
			</Text>
		</>
	)
}

const styles = StyleSheet.create({
	container: {},
})
export default PercentageChange
