import React, {Component} from "react";
import {View, Text} from "react-native";
import { createStackNavigator, createAppContainer} from "react-navigation";
import InitScreen from './screens/InitScreen';
import ScreenOne from './screens/ScreenOne';
import ScreenTwo from './screens/ScreenTwo';

//Creating the StackNavigator
const AppNavigator = createStackNavigator(
	{
		Init: {
			screen: InitScreen,
		},
		One: {
			screen: ScreenOne,
		},
		Two: {
			screen: ScreenTwo,
		}
	},
	{
		initalRouteName: 'Init',
	}
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends Component{
	render(){
		return <AppContainer />;
	}
}