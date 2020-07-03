import React from 'react';
import {  Text, View, StyleSheet ,ScrollView, TouchableOpacity } from 'react-native';
import { Asset } from 'expo-asset';
import { NavigationContainer } from '@react-navigation/native';
import { Card} from '@ant-design/react-native';
import { TextInput, Button , Image, Linking, Switch} from 'react-native';

const styles = StyleSheet.create({ bgContainer: { flex:1, width: null, height: null },
  
	tinyLogo: {
		width: 60,
		height: 60,

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
		backgroundColor:"white",
		height:500
	},
	lighttext: {
		height: 40, 
		margin:10,
		borderColor: 'gray', 
		borderWidth: 1 ,
		borderRadius:50, 
		padding: 10, 
		height: 50, 
		fontSize:20,
		textAlignVertical: "center",
		opacity : 0.8
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
 		backgroundColor:'teal',
		elevation: 10,
		margin: 5, 
		borderTopStartRadius:10,
		borderBottomEndRadius: 10,
		borderTopEndRadius: 20,
		borderBottomStartRadius: 20,
		width:200,
		height: 100, 
		textAlign: 'center',
		justifyContent: 'center',
		padding:5
 	}



    });



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
		        thumbColor={this.state.darkmode ? "black" : "white"}
		        ios_backgroundColor="#3e3e3e"
		       	onValueChange={this.toggleSwitch}
		        value={this.state.darkmode}
		      />
  			<ScrollView>
  			<View style = {{alignItems :"center"}}> 			
  			<Image
		        style={styles.tinyLogo}
		        source={require('../assets/github.jpg')}
		      />
		     </View>

	  		 <TextInput
			      style={this.state.darkmode? styles.darkmodetext :styles.lighttext}
			      onChangeText={(username) => this.setState({username})}
			      value ={this.state.username}
			    />

			    {this.state.username?

			   	<View style ={{ alignItems : "center", textAlign :"center", marginBottom: 20}}>
					<Button onPress={this.handleSubmit} title="Search User" color="black" />
				</View>
					:
					<Text></Text>
			    }
			
			
			<View style ={{alignItems :"center"}}>
			 <Image
		        style={{borderRadius:10, width: 150, height: 150, marginBottom: 10}}
		        source={{
		          uri: this.state.avatar_url,
		        }}
		      />
		     </View>


		     <View style={{textAlign: 'center', alignItems :"center"}}>
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
			              thumbStyle={{ width: 40, height: 40, borderRadius : 40 }}
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
