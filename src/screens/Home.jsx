import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import Header from '../components/Header';
import Feed from '../components/Feed';
import SideBar from '../components/SideBar';

export default function HomeScreen() {
	return (
		<ScrollView style={{ flex: 1 }}>
			<Header />

			<Feed />

			<SideBar />
		</ScrollView>
	);
}
