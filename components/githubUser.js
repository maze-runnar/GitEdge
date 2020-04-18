import React from 'react';
import {  Text, View, StyleSheet ,ScrollView, TouchableOpacity, Alert } from 'react-native';
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
import { Card, WhiteSpace, WingBlank } from '@ant-design/react-native';
//import Share from 'react-native-share';
import { toast } from 'react-toastify';
import { Icon } from 'react-native-elements';
//import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';
//import { Button } from 'react-native-elements';
import { TextInput, Button , Image} from 'react-native';

const styles = StyleSheet.create({ bgContainer: { flex:1, width: null, height: null },
  
 tinyLogo: {
    width: 100,
    height: 100,
    marginLeft: 110,
  },
  container: {
        flex: 1,
        justifyContent: "center",
        opacity:0.3
    },
    });


export default class movielist extends React.Component {

constructor(props) {
    super(props);
    this.state = {username: 'maze-runnar',
    				login: '',
    				name:'',
    				avatar_url: '',
    				url:'',
    				html_url: '',
    				followers_url: '',
    				following_url:'',
    				gists_url: '',
    				starred_url: '',
    				repos_url: '',
    				company:'',
    				blog:'',
    				location: '',
    				email: '',
    				public_repos:'',
    				followers:'',
    				following:'',
    				created_at:'',
    				updated_at:''
    				};

    //this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

handleSubmit(){
	return fetch(`https://api.github.com/users/${this.state.username}`)
			.then((response) => response.json())
				    .then((res) => {
				      return this.setState({login: res.login,
				      	name:res.name,
				      	avatar_url: res.avatar_url,
				      	url: res.url,
				      	html_url: res.html_url,
				      	followers_url: res.followers_url,
				      	repos_url: res.repos_url,
				      	company: res.company,
				      	blog: res.blog,
				      	location: res.location,
				      	email:res.email,
				      	followers: res.followers,
				      	following: res.following,
				      	created_at: res.created_at
				      })
				    })
				    .catch((error) => {
				      console.error(error);
				    });


}

 render(){
  return (
  		<View>
  			<View style = { styles.container } >
		        <Image style= { styles.backgroundImage } source={require('../assets/share.jpeg')}/>
		      </View>
  			<ScrollView>
  			<View>
  			
  			<Image
		        style={styles.tinyLogo}
		        source={require('../assets/github1.png')}
		      />
		     </View>

	  		 <TextInput
			      style={{ height: 40, margin:10,borderColor: 'gray', borderWidth: 1 , padding: 2, textAlign:'center', height: 50, fontSize:20}}
			      onChangeText={(username) => this.setState({username})}
			      value={this.state.username}
			    />
			<View style ={{padding: 10, width:150, marginLeft:80}}>
				<Button onPress={this.handleSubmit} title="Search User" color="red" />
			</View>
			
			<Text>{this.state.login}</Text>
			<Text>{this.state.html_url}</Text>
			<Text>{this.state.url}</Text>
			<Text>{this.state.following}</Text>
			<Text>{this.state.followers}</Text>
			<Text>{this.state.blog}</Text>
			<Text>{this.state.company}</Text>
			<Text>{this.state.email}</Text>
			<Text>{this.state.created_at}</Text>
			<Text>{this.state.avatar_url}</Text>
			 <Image
		        style={styles.tinyLogo}
		        source={{
		          uri: this.state.avatar_url,
		        }}
		      />

			</ScrollView>
			
  		</View>

  	);
  }
}
