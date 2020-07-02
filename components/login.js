import React from 'react';
import { Image, Text, View, StyleSheet ,ScrollView, TouchableOpacity, Alert} from 'react-native';
import { SplashScreen } from 'expo';
import { Asset } from 'expo-asset';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Card, WhiteSpace, WingBlank, Button } from '@ant-design/react-native';
import AwesomeButton from "react-native-really-awesome-button";
import AwesomeButtonRick from 'react-native-really-awesome-button/src/themes/rick';

import LinearGradient from "react-native-linear-gradient";
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

      <TouchableOpacity onPress={() => this.props.navigation.navigate('Detail')}>
        <Image style= {{  left: 60,  marginTop: 30, marginLeft:50, width: 100, height: 100}} source={require('../assets/learngit.png')}/>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => this.props.navigation.navigate('github')}>
        <Image style= {{  left: 60,  marginTop: 30, marginLeft:50, width: 100, height: 100}} source={require('../assets/github.jpg')}/>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => this.props.navigation.navigate('github')}>
        <Image style= {{  left: 60,  marginTop: 30, marginLeft:50, width: 100, height: 100}} source={require('../assets/gitlab.webp')}/>
      </TouchableOpacity>
      <View style ={{top: 30 , left: 40}}>
      <AwesomeButton   backgroundColor="white">
      <Text style ={{fontSize: 30,color: "#f25b29", padding: 50}}>SUBSCRIBE</Text>
    </AwesomeButton>
    </View>
    </View>
		);
	}


}
