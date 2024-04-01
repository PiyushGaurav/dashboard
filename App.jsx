// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function FeedScreen() {
	return <Feed />;
}

function ArticleScreen() {
	return <SideBar />;
}
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './src/screens/Home';
import Feed from './src/components/Feed';
import SideBar from './src/components/SideBar';

const Drawer = createDrawerNavigator();

function MyDrawer() {
	return (
		<Drawer.Navigator>
			<Drawer.Screen name="Home" component={HomeScreen} />
			<Drawer.Screen name="Feed" component={FeedScreen} />
			<Drawer.Screen name="Article" component={ArticleScreen} />
		</Drawer.Navigator>
	);
}

const Stack = createNativeStackNavigator();

function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen options={{ headerShown: false }} name="Home" component={MyDrawer} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}

export default App;
