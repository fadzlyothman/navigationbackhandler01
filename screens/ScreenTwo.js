import React, {Component} from 'react';
import {View,Text,Button,BackHandler} from 'react-native';
import {NavigationActions} from 'react-navigation';

export default class ScreenTwo extends Component {
	_focusDoneSubscribe;//declaring variable that will be listener for the back button when in focus 
	_blurGoingSubscribe;//declaring variable that will be listener for the back button when blur 
	
	//the following will remove the navigation bar at the top
	static navigationOptions = {
		header: null,
		title: 'TWO',
	};
	
	constructor(props)
    {
        super(props);
		this._focusDoneSubscribe = props.navigation.addListener('didFocus', payload =>
			BackHandler.addEventListener('hardwareBackPress', this.onBackButtonPressAndroid)
		);//this assigns the listener
    }
	//functions to handle back button events
	componentDidMount()
	{
		this._blurGoingSubscribe = this.props.navigation.addListener('willBlur', payload =>
				BackHandler.removeEventListener('hardwareBackPress', this.onBackButtonPressAndroid)
			);
	}

	onBackButtonPressAndroid = () => {
		this.props.navigation.goBack();
		return true;
	};

	componentWillUnmount()
	{
		this._focusDoneSubscribe && this._focusDoneSubscribe.remove();
		this._blurGoingSubscribe && this._blurGoingSubscribe.remove();
	}
	//actual render
	render(){
		const { navigate } = this.props.navigation;
		return (
			<View style={{alignItems: 'center'}}>
				<View style={{height: 100,justifyContent: 'center',alignItems: 'center'}}>
					<Text style={{fontSize: 20}}>Navigation BackHandler Tutorial</Text>
					<Text style={{fontSize: 20}}>SCREEN TWO</Text>
				</View>
			</View>
		);
	}
}