import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, FlatList, Platform } from 'react-native';

function Feed() {
	const [data, setData] = useState([]);

	const loadContent = async () => {
		let res = await fetch('https://dog.ceo/api/breed/hound/images');
		let data = await res.json();
		setData(data.message);
	};

	// const loadContent = () => {
	//   fetch("https://dog.ceo/api/breed/hound/images")
	//     .then((res) => res.json())
	//     .then((data) => setData(data.message));
	// };

	useEffect(() => {
		(async () => await loadContent())();
		// loadContent();
	}, []);

	return (
		<View style={styles.app}>
			{/* <FlatList
				data={data}
				renderItem={({ item }) => {
					return <Image source={{ uri: item }} style={{ width: '100%', aspectRatio: 1 / 1, margin: 10 }} />;
				}}
				keyExtractor={item => item}
			/> */}

			<View
				style={{
					flex: 1,
					flexDirection: Platform.OS === 'web' ? 'row' : 'column',
					flexWrap: 'wrap'
				}}
			>
				{data.length > 0 &&
					data.map(d => {
						return <Image source={{ uri: d }} style={{ width: 300, height: 300, margin: 10 }} />;
					})}
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	app: {
		width: '100%',
		marginHorizontal: 'auto'
	},
	header: {
		padding: 20
	},
	title: {
		fontWeight: 'bold',
		fontSize: 40,
		marginVertical: 5,
		textAlign: 'center'
	}
});

export default Feed;
