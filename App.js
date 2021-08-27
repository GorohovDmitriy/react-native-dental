import React from 'react'
import { SectionList } from 'react-native'
import styled from 'styled-components/native'
import { MaterialIcons } from '@expo/vector-icons'

import Appointment from './components/Appointment.jsx'
import SectionTitle from './components/SectionTitle.jsx'

const DATA = [
	{
		title: '12 сентебря',
		data: [
			{
				time: '15:30',
				diagnosis: 'пульпит',
				active: true,
				user: {
					fullname: 'Дмитрий Горохов',
					avatar:
						'https://sun9-87.userapi.com/impf/c849332/v849332224/12ec8b/iMq55VTAv78.jpg?size=640x426&quality=96&sign=4c8ee901ba47d32136b0a474cf82ab5a&type=album',
				},
			},
			{
				time: '16:40',
				diagnosis: 'периодонтит',
				active: false,
				user: {
					fullname: 'Анастасия Селантева',
					avatar: 'https://vk.com/images/deactivated_100.png',
				},
			},
			{
				time: '17:10',
				diagnosis: 'повторный прием',
				active: false,
				user: {
					fullname: 'Тетерятников Максим',
					avatar:
						'https://sun2.dataix-by-minsk.userapi.com/s/v1/if1/NeGBs8MbZIpgGTq4OPyHG8E6NNXR2qgVsRS8h6TdcdZC6LtFDSjP99MpuUf8LLZcwdRBLuWx.jpg?size=200x200&quality=96&crop=0,54,515,515&ava=1',
				},
			},
			{
				time: '17:35',
				diagnosis: 'пульпит, удаление зуба',
				active: false,
				user: {
					fullname: 'Бобылев Алексей',
					avatar:
						'https://sun9-70.userapi.com/impf/c846420/v846420546/a51fd/PbfbxwBM5cU.jpg?size=2560x1703&quality=96&sign=cd61d731fa3b9805606b17c5d3a45a2c&type=album',
				},
			},
		],
	},
	{
		title: '14 сентебря',
		data: [
			{
				time: '15:30',
				diagnosis: 'пульпит',
				active: false,
				user: {
					fullname: 'Дмитрий Горохов',
					avatar:
						'https://sun9-87.userapi.com/impf/c849332/v849332224/12ec8b/iMq55VTAv78.jpg?size=640x426&quality=96&sign=4c8ee901ba47d32136b0a474cf82ab5a&type=album',
				},
			},
			{
				time: '16:40',
				diagnosis: 'периодонтит',
				active: false,
				user: {
					fullname: 'Анастасия Селантева',
					avatar: 'https://vk.com/images/deactivated_100.png',
				},
			},
			{
				time: '17:10',
				diagnosis: 'повторный прием	',
				active: false,
				user: {
					fullname: 'Тетерятников Максим',
					avatar:
						'https://sun2.dataix-by-minsk.userapi.com/s/v1/if1/NeGBs8MbZIpgGTq4OPyHG8E6NNXR2qgVsRS8h6TdcdZC6LtFDSjP99MpuUf8LLZcwdRBLuWx.jpg?size=200x200&quality=96&crop=0,54,515,515&ava=1',
				},
			},
			{
				time: '17:35',
				diagnosis: 'пульпит, удаление зуба',
				active: false,
				user: {
					fullname: 'Бобылев Алексей',
					avatar:
						'https://sun9-70.userapi.com/impf/c846420/v846420546/a51fd/PbfbxwBM5cU.jpg?size=2560x1703&quality=96&sign=cd61d731fa3b9805606b17c5d3a45a2c&type=album',
				},
			},
		],
	},
]

export default function App() {
	return (
		<Container>
			<SectionList
				sections={DATA}
				keyExtractor={(item, index) => index}
				renderItem={({ item }) => <Appointment {...item} />}
				renderSectionHeader={({ section: { title } }) => <SectionTitle>{title}</SectionTitle>}
			/>
			<PluseButton>
				<MaterialIcons name='add' size={28} color='white' />
			</PluseButton>
		</Container>
	)
}

const PluseButton = styled.TouchableOpacity`
	align-items: center;
	justify-content: center;
	border-radius: 50px;
	width: 64px;
	height: 64px;
	position: absolute;
	right: 25px;
	bottom: 25px;
	background: #2a86ff;
	box-shadow: 0px 8px 10px rgba(42, 134, 255, 0.5);
`

const Container = styled.View`
	flex: 1;
	margin-top: 50px;
`
