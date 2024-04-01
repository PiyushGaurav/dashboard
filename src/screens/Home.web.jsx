import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import Header from '../components/Header';
import Feed from '../components/Feed';
import SideBar from '../components/SideBar';

export default function HomeScreen() {
	return (
		<View style={{ flex: 1, flexDirection: 'row' }}>
			<View
				style={{
					flex: 3,
					height: '100%',
					overflow: 'scroll',
					backgroundColor: 'grey'
				}}
			>
				<Header />
				<Feed />
			</View>
			<View
				style={{
					flex: 1,
					overflow: 'scroll',
					backgroundColor: 'lightgrey'
				}}
			>
				<SideBar />
			</View>
		</View>
	);
}
