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
import { toast } from 'react-toastify';
import Toast from 'light-toast';
import Detail from './components/moviedetail';
import Setting from './components/settings';
import movielist from './components/movielist';
import userview from './components/userview';
import { Icon } from 'react-native-elements';
import login from './components/login'; 



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

const Stack = createStackNavigator();

export default class App extends React.Component {
  state = {
    isReady: false,
    show: false,
  };

  componentDidMount() {
    SplashScreen.preventAutoHide();
  }

  handleShow =() =>{
    this.setState({
      show:!this.state.show
    });
  }

  render() {

    if (!this.state.isReady) {
      return (
        <View style={{ flex: 1}}>
          <Image
            source={require('./assets/splash.jpg')}
            onLoad={this._cacheResourcesAsync}
            style={styles.bgContainer}
            resizeMode='cover'
          />
        </View>
      );
    }


    return (

    <NavigationContainer>
      
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="login" component={login}  options={{ 
          title: 'Redemption login',
          headerStyle: {
            backgroundColor: 'orange',
          },
          headerTintColor: 'white',
          headerTitleStyle: {
            
          }, }}/>
        <Stack.Screen name="movielist" component={movielist} options={{ 
          title: 'Movies List',
          headerStyle: {
            backgroundColor: 'orange',
            
          },
          headerTintColor: 'white',
          headerTitleStyle: {
            
          },
           headerRight: () => (
            
                <Image
                 source={require('./assets/logo.jpg')}
                 style={styles.ImageIconStyle}
                 
                 />  
           
          ), }}/>
        <Stack.Screen name="Detail" component={Detail}  options={{ 
          title: 'Redemption Detail',
          headerStyle: {
            backgroundColor: 'orange',
          },
          headerTintColor: 'white',
          headerTitleStyle: {
            
          }, 


        }}/>

        <Stack.Screen name="userview" component={userview}  options={{ 
          title: 'Setting',
          headerStyle: {
            backgroundColor: 'orange',
          },
          headerTintColor: 'white',
          headerTitleStyle: {
            
          }, }}/>
      </Stack.Navigator>
    </NavigationContainer>
  
    );
  }

  _cacheSplashResourcesAsync = async () => {
    const gif = require('./assets/splash.jpg');
    return Asset.fromModule(gif).downloadAsync();
  };

  _cacheResourcesAsync = async () => {
    SplashScreen.hide();
    const images = [
      require('./assets/icon.png'),
      require('./assets/icon.png'),
    ];

    const cacheImages = images.map(image => {
      return Asset.fromModule(image).downloadAsync();
    });

    await Promise.all(cacheImages);
    this.setState({ isReady: true });
  };

  
}
