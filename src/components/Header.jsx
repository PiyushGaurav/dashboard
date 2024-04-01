import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const Header = () => {
	return (
		<View
			style={{
				minHeight: 150,
				backgroundColor: 'white',
				justifyContent: 'center',
				alignItems: 'center',
				margin: 5
			}}
		>
			<Text style={{ fontSize: 50, fontWeight: 'bold' }}>Dasboard</Text>
			<Text style={{ fontSize: 16 }}>Demo data for testing</Text>
		</View>
	);
};

export default Header;

const styles = StyleSheet.create({});
