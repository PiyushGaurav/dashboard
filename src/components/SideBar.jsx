import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList, Dimensions, ActivityIndicator, Image } from 'react-native';

const SideBar = () => {
	const [loading, setLoading] = useState(true);
	const [randomUserData, setRandomUserData] = useState([]);
	const [loadingExtraData, setLoadingExtraData] = useState(false);
	const [page, setPage] = useState(1);

	useEffect(() => {
		loadMoreRandomData();
	}, []);

	function loadRandomData() {
		fetch(`https://randomuser.me/api/?results=1000&page=${page}`)
			.then(response => response.json())
			.then(responseJson => {
				setRandomUserData(page === 1 ? responseJson.results : [...randomUserData, ...responseJson.results]);
				setLoading(false);
			})
			.catch(error => {
				setLoading(false);
				console.log('Error selecting random data: ' + error);
			});
	}

	function loadMoreRandomData() {
		setLoading(true);
		setPage(page => page + 1);
		setLoadingExtraData(loadingExtraData => !loadingExtraData);
		loadRandomData();
	}

	function renderCustomItem({ item, index }) {
		return (
			<View
				style={{
					alignItems: 'center',
					flexDirection: 'row',
					flex: 1,
					margin: 10
				}}
			>
				<Image source={{ uri: item.picture.large }} style={{ width: 100, height: 100, borderRadius: 50 }} />
				<View
					style={{
						marginLeft: 10
					}}
				>
					<Text style={{ fontSize: 25 }}>
						{item.name.first} {item.name.last}
					</Text>
					<Text>{item.gender}</Text>
				</View>
			</View>
		);
	}

	function keyExtractor(item, index) {
		return item.login.uuid;
	}

	return (
		<FlatList
			data={randomUserData}
			renderItem={renderCustomItem}
			keyExtractor={keyExtractor}
			onEndReachedThreshold={0}
			onEndReached={loadMoreRandomData}
			extraData={loadingExtraData}
		/>
	);
};

export default SideBar;

const styles = StyleSheet.create({});
