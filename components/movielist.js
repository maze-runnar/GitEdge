import React from 'react';
import { Image, Text, View, StyleSheet ,ScrollView, TouchableOpacity, Alert } from 'react-native';
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

import { Icon } from 'react-native-elements';
import Userview from '../components/userview';



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
    width: 25,
    resizeMode: 'stretch',

  },


    });

export default class movielist extends React.Component {

state = {
  show : false
}

 handleShow = () => {
    this.setState({
      show: !this.state.show
    });
  }

 render(){

  

  return (
    <ScrollView style={styles.scrollView}>
    <View style ={{backgroundColor:'teal'}}>
    <View style ={{marginLeft:110, fontWeight:20, }}>
      <Text>Hi, Sundaram Dubey</Text>
    </View>
    <View style ={{justifyContent:'center', textAlign:'center', marginLeft:130}}>

        <Icon
          reverse
          name='polymer'
          color='#517fa4'
          onPress = {this.handleShow}
          
        />
      </View>
    </View>
    <View>

      {this.state.show ?<Userview/>: <View style={{ paddingTop: 20 }}>

        <WingBlank size="lg">
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Detail')}>
          <Card style ={{shadowColor: "#000", shadowOffset: {
                              width: 0,
                              height: 6,
                            },shadowOpacity: 0.58,
                            shadowRadius: 16.00,
                            elevation: 20,}} >
            <Card.Header
              title="Shawshank Redemption"
              thumbStyle={{ width: 50, height: 50 , borderRadius:10}}
              thumb="https://discoverbeaumont.com/wp-content/uploads/2019/07/ShawshankRedemption_webthumb.jpg"
              
            />
            <Card.Body>
              <View style={{ height: 60 }}>
                <Text style={{ marginLeft: 16 }}>Two imprisoned men bond over a number of years,
                 finding solace and eventual redemption through acts of common decency.</Text>
              </View>
            </Card.Body>
  
            <TouchableOpacity style={styles.FacebookStyle} activeOpacity={0.5} onPress={() => {return Alert.alert("Success","movie shared successfully")}}>
                <Image
                 source={require('../assets/share.png')}
                 style={styles.ImageIconStyle}
                 
                 />  
            </TouchableOpacity>
              
          </Card>
          </TouchableOpacity>
        </WingBlank>
        <WhiteSpace size="lg" />
        <WingBlank size="lg">
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Detail')}>
          <Card style ={{shadowColor: "#000", shadowOffset: {
                              width: 12,
                              height: 12,
                            },shadowOpacity: 0.58,
                            shadowRadius: 16.00,
                            elevation: 24,}}>
            <Card.Header
              title="The Green Mile"
              thumbStyle={{ width: 50, height: 50 , borderRadius:10}}
              thumb="https://resizing.flixster.com/hekzBrHfnm2aCZj7ctSDB0yz3LM=/206x305/v1.bTsxMTE3MDAzMDtqOzE4NDQ0OzEyMDA7ODAwOzEyMDA"
    
            />
            <Card.Body>
              <View style={{ height: 60 }}>
                <Text style={{ marginLeft: 16 }}>The lives of guards on Death Row are affected by one of their charges: a black man accused of child murder and rape, yet who has a mysterious gift.</Text>
              </View>
            </Card.Body>
            <TouchableOpacity style={styles.FacebookStyle} activeOpacity={0.5} onPress={() => {return alert ("movie shared successfully")}}>
                <Image
                 source={require('../assets/share.png')}
                 style={styles.ImageIconStyle}
                />  
            </TouchableOpacity>
          </Card>
          </TouchableOpacity>
        </WingBlank>
        <WhiteSpace size="lg" />
        <WingBlank size="lg">
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Detail')}>
          <Card style ={{shadowColor: "#000", shadowOffset: {
                              width: 0,
                              height: 6,
                            },shadowOpacity: 0.58,
                            shadowRadius: 16.00,
                            elevation: 20,}}>
            <Card.Header
              title="Shawshank Redemption"
              thumbStyle={{ width: 50, height: 50 , borderRadius:10}}
              thumb="https://discoverbeaumont.com/wp-content/uploads/2019/07/ShawshankRedemption_webthumb.jpg"
              
            />
            <Card.Body>
              <View style={{ height: 60 }}>
                <Text style={{ marginLeft: 16 }}>Two imprisoned men bond over a number of years,
                 finding solace and eventual redemption through acts of common decency.</Text>
              </View>
            </Card.Body>
  
            <TouchableOpacity style={styles.FacebookStyle} activeOpacity={0.5} onPress={() => {return alert ("movie shared successfully")}}>
                <Image
                 source={require('../assets/share.png')}
                 style={styles.ImageIconStyle}
                />  
            </TouchableOpacity>
              
          </Card>
          </TouchableOpacity>
        </WingBlank>
        <WhiteSpace size="lg" />
        <WingBlank size="lg">
          <Card style ={{shadowColor: "#000", shadowOffset: {
                              width: 12,
                              height: 12,
                            },shadowOpacity: 0.58,
                            shadowRadius: 16.00,
                            elevation: 24,}}>
            <Card.Header
              title="The Green Mile"
              thumbStyle={{ width: 50, height: 50 , borderRadius:10}}
              thumb="https://resizing.flixster.com/hekzBrHfnm2aCZj7ctSDB0yz3LM=/206x305/v1.bTsxMTE3MDAzMDtqOzE4NDQ0OzEyMDA7ODAwOzEyMDA"
    
            />
            <Card.Body>
              <View style={{ height: 60 }}>
                <Text style={{ marginLeft: 16 }}>The lives of guards on Death Row are affected by one of their charges: a black man accused of child murder and rape, yet who has a mysterious gift.</Text>
              </View>
            </Card.Body>
            <TouchableOpacity style={styles.FacebookStyle} activeOpacity={0.5} onPress={() => {return alert ("movie shared successfully")}}>
                <Image
                 source={require('../assets/share.png')}
                 style={styles.ImageIconStyle}
                />  
            </TouchableOpacity>
          </Card>
        </WingBlank>
        <WhiteSpace size="lg" />
        <WingBlank size="lg">
          <Card style ={{shadowColor: "#000", shadowOffset: {
                              width: 0,
                              height: 6,
                            },shadowOpacity: 0.58,
                            shadowRadius: 16.00,
                            elevation: 20,}}>
            <Card.Header
              title="Shawshank Redemption"
              thumbStyle={{ width: 50, height: 50 , borderRadius:10}}
              thumb="https://discoverbeaumont.com/wp-content/uploads/2019/07/ShawshankRedemption_webthumb.jpg"
              
            />
            <Card.Body>
              <View style={{ height: 60 }}>
                <Text style={{ marginLeft: 16 }}>Two imprisoned men bond over a number of years,
                 finding solace and eventual redemption through acts of common decency.</Text>
              </View>
            </Card.Body>
  
            <TouchableOpacity style={styles.FacebookStyle} activeOpacity={0.5} onPress={() => {return alert ("movie shared successfully")}}>
                <Image
                 source={require('../assets/share.png')}
                 style={styles.ImageIconStyle}
                />  
            </TouchableOpacity>
              
          </Card>
        </WingBlank>
        <WhiteSpace size="lg" />
        <WingBlank size="lg">
          <Card style ={{shadowColor: "#000", shadowOffset: {
                              width: 12,
                              height: 6,
                            },shadowOpacity: 0.58,
                            shadowRadius: 16.00,
                            elevation: 24,}}>
            <Card.Header
              title="The Green Mile"
              thumbStyle={{ width: 50, height: 50 , borderRadius:10}}
              thumb="https://resizing.flixster.com/hekzBrHfnm2aCZj7ctSDB0yz3LM=/206x305/v1.bTsxMTE3MDAzMDtqOzE4NDQ0OzEyMDA7ODAwOzEyMDA"
    
            />
            <Card.Body>
              <View style={{ height: 60 }}>
                <Text style={{ marginLeft: 16 }}>The lives of guards on Death Row are affected by one of their charges: a black man accused of child murder and rape, yet who has a mysterious gift.</Text>
              </View>
            </Card.Body>
            <TouchableOpacity style={styles.FacebookStyle} activeOpacity={0.5} onPress={() => {return alert ("movie shared successfully")}}>
                <Image
                 source={require('../assets/share.png')}
                 style={styles.ImageIconStyle}
                />  
            </TouchableOpacity>
          </Card>
        </WingBlank>
        <WhiteSpace size="lg" />
        <WingBlank size="lg">
          <Card style ={{shadowColor: "#000", shadowOffset: {
                              width: 0,
                              height: 6,
                            },shadowOpacity: 0.58,
                            shadowRadius: 16.00,
                            elevation: 20,}}>
            <Card.Header
              title="Shawshank Redemption"
              thumbStyle={{ width: 50, height: 50 , borderRadius:10}}
              thumb="https://discoverbeaumont.com/wp-content/uploads/2019/07/ShawshankRedemption_webthumb.jpg"
              
            />
            <Card.Body>
              <View style={{ height: 60 }}>
                <Text style={{ marginLeft: 16 }}>Two imprisoned men bond over a number of years,
                 finding solace and eventual redemption through acts of common decency.</Text>
              </View>
            </Card.Body>
  
            <TouchableOpacity style={styles.FacebookStyle} activeOpacity={0.5} onPress={() => {return alert ("movie shared successfully")}}>
                <Image
                 source={require('../assets/share.png')}
                 style={styles.ImageIconStyle}
                />  
            </TouchableOpacity>
              
          </Card>
        </WingBlank>
        <WhiteSpace size="lg" />
        <WingBlank size="lg">
          <Card style ={{shadowColor: "#000", shadowOffset: {
                              width: 12,
                              height: 6,
                            },shadowOpacity: 0.58,
                            shadowRadius: 16.00,
                            elevation: 24,}}>
            <Card.Header
              title="The Green Mile"
              thumbStyle={{ width: 50, height: 50 , borderRadius:10}}
              thumb="https://resizing.flixster.com/hekzBrHfnm2aCZj7ctSDB0yz3LM=/206x305/v1.bTsxMTE3MDAzMDtqOzE4NDQ0OzEyMDA7ODAwOzEyMDA"
    
            />
            <Card.Body>
              <View style={{ height: 60 }}>
                <Text style={{ marginLeft: 16 }}>The lives of guards on Death Row are affected by one of their charges: a black man accused of child murder and rape, yet who has a mysterious gift.</Text>
              </View>
            </Card.Body>
            <TouchableOpacity style={styles.FacebookStyle} activeOpacity={0.5} onPress={() => {return alert ("movie shared successfully")}}>
                <Image
                 source={require('../assets/share.png')}
                 style={styles.ImageIconStyle}
                />  
            </TouchableOpacity>
          </Card>
        </WingBlank>
        <WhiteSpace size="lg" />
        
      </View>}
    </View>
    
      </ScrollView>

    );
}
}
