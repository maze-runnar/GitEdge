import React from 'react';
import { Image, Text, View, StyleSheet ,ScrollView, TouchableOpacity, Alert} from 'react-native';
import { SplashScreen } from 'expo';
import { Asset } from 'expo-asset';
import { 
  FacebookSocialButton,
  TwitterSocialButton,
  InstagramSocialButton,
  GoogleSocialButton,
  GitHubSocialButton, LinkedInSocialButton, MicrosoftSocialButton } from "react-native-social-buttons";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Card, WhiteSpace, WingBlank, Button } from '@ant-design/react-native';
//import Share from 'react-native-share';
export default class Login extends React.Component {

	render(){
		const styles = StyleSheet.create({ bgContainer: { flex:1, width: null, height: null },
  container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
     backgroundImage:{
        position: 'relative',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        opacity: 0.5,
    },
    FacebookStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderWidth: 0.5,
    borderColor: '#fff',
    height: 40,
    width: 40,
    borderRadius: 5,
    margin: 5,
  },
  ImageIconStyle: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 40,
    height: 40,
    borderRadius:10,

  },


    });
		return(
			<View>
      <View style = { styles.container } >
        <Image style= { styles.backgroundImage } source={require('../assets/share.jpeg')}/>
      </View>
        <View style={{ marginTop: 30, marginLeft:50}}>
          <FacebookSocialButton buttonViewStyle={{borderRadius:0, borderWidth:0}} onPress={() => this.props.navigation.navigate('movielist')}/>
        </View>
        <View style={{ marginTop: 10, marginLeft:50}}>
          <TwitterSocialButton buttonViewStyle={{borderRadius:0, borderWidth:0}} onPress={() => this.props.navigation.navigate('movielist')}/>
        </View>
        <View style={{ marginTop: 10, marginLeft:50}}>
          <InstagramSocialButton buttonViewStyle={{borderRadius:0, borderWidth:0}} onPress={() => this.props.navigation.navigate('movielist')}/>
        </View>
        <View style={{ marginTop: 10, marginLeft:50}}>
          <GoogleSocialButton buttonViewStyle={{borderRadius:0, borderWidth:0}} onPress={() => this.props.navigation.navigate('movielist')}/>
        </View>
        <View style={{ marginTop: 10, marginLeft:50}}>
          <GitHubSocialButton buttonViewStyle={{borderRadius:0, borderWidth:0}} onPress={() => this.props.navigation.navigate('movielist')}/>
        </View>
        <View style={{ marginTop: 10, marginLeft:50}}>
          <MicrosoftSocialButton buttonViewStyle={{borderRadius:0, borderWidth:0}} onPress={() => this.props.navigation.navigate('movielist')}/>
        </View>
        <View style={{ marginTop: 10, marginLeft:50}}>
          <LinkedInSocialButton buttonViewStyle={{borderRadius:0, borderWidth:0}} onPress={() => this.props.navigation.navigate('movielist')}/>
        </View>
    </View>
		);
	}


} 