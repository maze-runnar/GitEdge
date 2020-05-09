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
import {  WhiteSpace, WingBlank ,Card} from '@ant-design/react-native';
//import Share from 'react-native-share';
import { toast } from 'react-toastify';
import { Icon } from 'react-native-elements';
//import Icon from 'react-native-vector-icons/FontAwesome';
import {Divider, ListItem, Input } from 'react-native-elements';
//import { Button } from 'react-native-elements';
import { TextInput, Button , Image, Linking, Switch} from 'react-native';

const styles = StyleSheet.create({ bgContainer: { flex:1, width: null, height: null },
  
 tinyLogo: {
    width: 100,
    height: 100,
    marginLeft: 110,
  },
  container: {
        flex: 1,
        justifyContent: "center",
        opacity:0.3, 
        
    },

 darkmodeback: {

 	backgroundColor: "#403d3d",
 	height: 500

 }, 
 lightmodeback:{
 	backgroundColor:"white"
 },
 lighttext: {
 	height: 40, 
 	margin:10,
 	borderColor: 'gray', 
 	borderWidth: 1 , 
 	padding: 2, 
 	textAlign:'center',
 	height: 50, 
 	fontSize:20
 }, 


 	darkmodetext:{
 	height: 40, 
 	margin:10,
 	borderColor: 'white', 
 	borderWidth: 1 , 
 	padding: 2, 
 	textAlign:'center',
 	height: 50, 
 	fontSize:20,
 	color : "white"
 	},

 	maincontent:{
 		backgroundColor:'green',
 		 elevation: 5,
 		 margin: 10, 
 		borderRadius:5,
 		 width:200,
 		 height: 100, 
 		textAlign: 'center',
 		 justifyContent: 'center',
 		 padding:5
 	}



    });



const users = [
 {
    name: 'brynn',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
 },
]




export default class movielist extends React.Component {

constructor(props) {
    super(props);
    this.state = {username: 'maze-runnar',
    				login: '',
    				name:'',
    				bio:'',
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
    				updated_at:'', 
    				show : false, 
    				darkmode:false,
    				user:[]
    				};

    //this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleSwitch = this.toggleSwitch.bind(this);
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
				      	bio: res.bio,
				      	followers_url: res.followers_url,
				      	repos_url: res.repos_url,
				      	company: res.company,
				      	blog: res.blog,
				      	location: res.location,
				      	email:res.email,
				      	followers: res.followers,
				      	following: res.following,
				      	created_at: res.created_at, 
				      	show : true
				      })
				    })

				    .then(fetch(`https://api.github.com/users/${this.state.username}/repos`)
				    	.then((response) => response.json())
				    	.then((res) => {
				    		return this.setState({
				    			user : res
				    		})
				    	}
				    	)
				    )

				    .catch((error) => {
				      console.error(error);
				    });


}


toggleSwitch(){
	return this.setState({darkmode : !this.state.darkmode});
}


 render(){
  return (
  		<View style={this.state.darkmode? styles.darkmodeback :styles.lightmodeback}>
  		 <Switch
		        trackColor={{ false: "black", true: "white" }}
		        thumbColor={this.state.darkmode ? "black" : "grey"}
		        ios_backgroundColor="#3e3e3e"
		       	onValueChange={this.toggleSwitch}
		        value={this.state.darkmode}
		      />
  			<ScrollView>
  			<View> 			
  			<Image
		        style={styles.tinyLogo}
		        source={require('../assets/github1.png')}
		      />
		     </View>

	  		 <TextInput
			      style={this.state.darkmode? styles.darkmodetext :styles.lighttext}
			      onChangeText={(username) => this.setState({username})}
			      value={this.state.username}
			    />

			    {this.state.username?

			   <View style ={{padding: 10, width:150, marginLeft:80}}>
				<Button onPress={this.handleSubmit} title="Search User" color="green" />
			</View>
					:
					<Text></Text>
			    }
			
			
			
			 <Image
		        style={{borderRadius:10, width: 150, height: 150,marginLeft: 80, marginBottom: 10}}
		        source={{
		          uri: this.state.avatar_url,
		        }}
		      />



		      <View style={{textAlign: 'center'}}>
		      <Text style={{fontSize:20, textAlign: 'center'}}> {this.state.name} </Text>
		     <Text style={{fontSize:10, textAlign: 'center'}}> {this.state.bio} </Text>

		      </View>


		      {this.state.show ? 


		      	<ScrollView horizontal = {true}>
		      <View style={styles.maincontent}>
		     
			    <Text style={{color: 'white', fontSize: 15}}
	      			onPress={() => Linking.openURL(this.state.html_url)}>{this.state.html_url}</Text>
	      		</View>
      		
			<View style={styles.maincontent}>
		      <Text style={{fontSize:15, color: 'white'}}> Following : {this.state.following}</Text>
			</View>
			<View style={styles.maincontent}>
		      <Text style={{fontSize:15, color: 'white'}}> Followerss : {this.state.followers}</Text>
			</View>
			<View style={styles.maincontent}>
		      <Text style={{fontSize:15, color: 'white'}}> Blog : {this.state.blog}</Text>
			</View>
			<View style={styles.maincontent}>
		      <Text style={{fontSize:15, color: 'white'}}> Company : {this.state.company}</Text>
			</View>
			<View style={styles.maincontent}>
		      <Text style={{fontSize:15, color: 'white'}}> Email : {this.state.email}</Text>
			</View>
			<View style={styles.maincontent}>
		      <Text style={{fontSize:15, color: 'white'}}> created_at : {this.state.created_at}</Text>
			
			</View>

			</ScrollView>


		       :<Text style ={{marginLeft:100}}> nothing to show</Text>}

		       
				  {
				    this.state.user.map((u, i) => {
				      return (
				      <View style={{marginLeft:10, paddingBottom:5 , paddingTop: 5, marginBottom:5}}>
				      <Card style={{elevation: 4, width:300}}>

				      <Card.Header
			              title={u.name}
			              thumbStyle={{ width: 30, height: 40 }}
			              thumb={u.owner["avatar_url"]}
			        
			            />
			            <Card.Body>
			              <View>
			                <Text style={{ marginLeft: 16 }}>{u.description ? u.description : <Text>No description available</Text>}</Text>
			              </View>
			            </Card.Body>
			            <Card.Footer
			              content={u.html_url}
			          
			            />
				       </Card>
				       </View>
				      );      
				    })
				  }
				
			</ScrollView>
			
  		</View>

  	);
  }
}
