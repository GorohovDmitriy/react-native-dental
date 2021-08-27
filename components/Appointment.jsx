import React from 'react'
import {View} from 'react-native'
import styled from 'styled-components/native'

export default function Appointment({user, active, diagnosis, time}) {
	return (
		<GroupItem>
			<Avatar
				source={{
					uri: user.avatar,
				}}
			/>
			<View style={{flex: 1}}>
				<FullName>{user.fullname}</FullName>
				<GrayText>{diagnosis}</GrayText>
			</View>
			<GroupDate active={active}>{time}</GroupDate>
		</GroupItem>
	)
}
Appointment.defaultProps = {
	groupTitle: 'Untitled',
	items: [],
}

const GroupDate = styled.Text`
	background: ${(props) => (props.active ? '#2A86FF' : '#E9F5FF')};
	color: ${(props) => (props.active ? '#fff' : '#4294ff')};
	font-weight: 600;
	font-size: 14px;
	width: 70px;
	height: 32px;
	line-height: 32px;
	border-radius: 15px;
	text-align: center;
	overflow: hidden;
`

const GrayText = styled.Text`
	font-size: 16px;
	color: #8b979f;
`

const FullName = styled.Text`
	font-size: 16px;
	font-weight: 600;
`

const Avatar = styled.Image`
	border-radius: 50px;
	width: 40px;
	height: 40px;
	margin-right: 16px;
`

const GroupItem = styled.TouchableOpacity`
	align-items: center;
	flex-direction: row;
	padding: 20px;
	border-bottom-width: 1px;
	border-bottom-color: #f3f3f3;
`
