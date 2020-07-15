import React from 'react';
import {  Text, View, StyleSheet ,ScrollView, TouchableOpacity } from 'react-native';
import { Asset } from 'expo-asset';
import { NavigationContainer } from '@react-navigation/native';
import { Card} from '@ant-design/react-native';
import { TextInput, Button , Image, Linking, Switch ,Dimensions} from 'react-native';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from 'react-native-chart-kit';
//import React Native chart Kit for 
import Icon from 'react-native-vector-icons/FontAwesome';

const commitsData = [
  { date: "2017-01-02", count: 1 },
  { date: "2017-01-03", count: 2 },
  { date: "2017-01-04", count: 3 },
  { date: "2017-01-05", count: 4 },
  { date: "2017-01-06", count: 5 },
  { date: "2017-01-30", count: 2 },
  { date: "2017-01-31", count: 3 },
  { date: "2017-03-01", count: 2 },
  { date: "2017-04-02", count: 4 },
  { date: "2017-03-05", count: 2 },
  { date: "2017-02-30", count: 4 }
];

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
		borderRadius:10, 
		padding: 10, 
		height: 50, 
		fontSize:23,
		textAlignVertical: "center",
		opacity : 0.8,
		backgroundColor:"#63635d",
		color:"white",
		fontStyle:"italic", 
		justifyContent:'center',
		textAlign:"center"
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
 		backgroundColor:'#969690',
		elevation: 10,
		margin: 5, 
		borderTopStartRadius:10,
		borderBottomEndRadius: 10,
		borderTopEndRadius: 20,
		borderBottomStartRadius: 20,
		width:100,
		height: 100, 
		textAlign: 'center',
		justifyContent: 'center',
		padding:5, 
		alignItems:'center'
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
    				user:[],
    				stars:[],
    				labels:[], 
    				javascript:10,
    				python:20,
    				css:23,
    				html:21,
    				other:2,
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
				    		var ar  = []
				    		var data = []
				    		var py = 0
				    		var js=0
				    		var html =0
				    		var css = 0
				    		var other = 0

				    		for (var i =5 ; i >0; i--) {
				    			ar.push(res[i].name);
				    			data.push(res[i].stargazers_count);
				    			
				   			}
				   			for (var i = res.length - 1; i >= 0; i--) {
				   				if(res[i].language == "JavaScript"){
				    				js = js + 1
				    			}else if(res[i].language == "CSS"){
				    				css = css +1
				    			}else if(res[i].language == "Python"){
				    				py = py + 1
				    			}else if(res[i].language == "HTML"){
				    				html = html + 1
				    			}else{
				    				other = other +1
				    			}
				   			}
				   			

				    		return this.setState({
				    			user : res,
				    			labels:ar,
				    			stars:data,
				    			python: py,
				    			javascript: js,
				    			html: html,
				    			css:css,
				    			other: other
				    		})
				    	}
				    	)
				    ).then(this.setState(
						prevState => ({
					  labels: [...prevState.labels,"awesome"]
					})		
				    	))
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

  			<ScrollView>
  			<View style = {{alignItems :"center",backgroundColor:"#212020"}}> 			
  			<Image
		        style={styles.tinyLogo}
		        source={require('../assets/github.jpg')}
		      />
		     </View>
		     <View style ={{backgroundColor:"#212020"}}>
	  		 <TextInput
			      style={this.state.darkmode? styles.darkmodetext :styles.lighttext}
			      onChangeText={(username) => this.setState({username})}
			      value ={this.state.username}
			    />
			   </View>
			   <View style={{backgroundColor:"#212020", marginBottom: -80, height:140}}>
			    {this.state.username?

			   	<View style ={{ alignItems : "center", textAlign :"center", marginBottom: 20}}>
					<Button onPress={this.handleSubmit} title="Find Your GitEdge" color="black" />
					
				</View>
					:
					<Text></Text>
			    }
			    </View>
			
			
			<View style ={{alignItems :"center", elevation:10}}>
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
	      			onPress={() => Linking.openURL(this.state.html_url)}>
	      			<Icon name="external-link" size={30} color="white" />
	      			</Text>
	      		</View>
      		
			<View style={styles.maincontent}>
		      <Text style={{fontSize:20, color: 'white'}}>{this.state.following}</Text>
		      <Text style={{color:"#d1cbcb"}}> FOLLOWING</Text>
			</View>
			<View style={styles.maincontent}>
		      <Text style={{fontSize:20, color: 'white'}}> {this.state.followers}</Text>
				<Text style={{color:"#d1cbcb"}}> FOLLOWERS</Text>
			</View>
			
			<View style={styles.maincontent}>
		      <Text style={{fontSize:15, color: 'white'}}>{this.state.company}</Text>
			</View>
		
			<View style={styles.maincontent}>
		      <Text style={{fontSize:15, color: 'white'}}>{this.state.created_at}</Text>
			
			</View>

			</ScrollView>


		       :<Text style ={{marginLeft:100}}> nothing to show</Text>}

		       

		       {this.state.show  ?
			 <BarChart
		              data={{
		                labels: this.state.labels,
		                datasets: [
		                  {
		                    data: this.state.stars,
		                  },
		                ],
		                legend: ["Rainy Days"] 
		              }}
		              width={Dimensions.get('window').width}
		              height={350}
		              yAxisLabel="* "
		              verticalLabelRotation ={130} 
		              formatXLabel = {(x) => x.slice(1,5) + "..." }
		              chartConfig={{
		                backgroundColor: 'green',
		                backgroundGradientFrom: 'white',
		                backgroundGradientTo: 'white',
		                decimalPlaces: 2,
		                color: (opacity = 1) => `rgba(0, 128, 0, ${opacity})`,
		                labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
		                style: {
		                  borderRadius: 5,
		                },
		              }}
		              style={{
		                marginVertical: 8,
		                borderRadius: 5,
		                
		                alignItems:"center"
		              }}
		            />:<Text> </Text>
		}
	


{this.state.show ? 
            <PieChart
              data={[
                {
                  name: 'JavaScript',
                  population: this.state.javascript,
                  color: 'rgba(235, 137, 40, 1)',
                  legendFontColor: '#7F7F7F',
                  legendFontSize: 10,
                },
                {
                  name: 'Html',
                  population: this.state.html,
                  color: 'rgba(240, 176, 113, 1)',
                  legendFontColor: '#7F7F7F',
                  legendFontSize: 10,
                },
                {
                  name: 'CSS',
                  population: this.state.css,
                  color: 'rgba(105, 240, 60, 1)',
                  legendFontColor: '#7F7F7F',
                  legendFontSize: 10,
                },
                {
                  name: 'Python',
                  population: this.state.python,
                  color: 'rgba(237, 64, 64, 1)',
                  legendFontColor: '#7F7F7F',
                  legendFontSize: 10,
                },
                {
                  name: 'Other',
                  population: this.state.other,
                  color: 'rgba(240, 176, 113, 1)',
                  legendFontColor: '#7F7F7F',
                  legendFontSize: 10,
                },
              ]}
              width={Dimensions.get('window').width - 25}
              height={220}
              chartConfig={{
                backgroundColor: '#1cc910',
                backgroundGradientFrom: '#eff3ff',
                backgroundGradientTo: '#efefef',
                decimalPlaces: 2,
                color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                style: {
                  borderRadius: 16,
                },
              }}
              style={{
                marginVertical: 8,
                borderRadius: 16,
              }}
              accessor="population"
              backgroundColor="transparent"
              paddingLeft="15"
              
            />
			: <Text> </Text>}



				  {
				    this.state.user.map((u, i) => {
				      return (
				      <View style={{marginLeft:10, paddingBottom:5 , paddingTop: 5, marginBottom:5}}>
				      <Card style={{elevation: 8, width:300, borderWidth:0, borderRadius:0, marginBottom:5}}>

				      <Card.Header
			              title={u.name}
			              thumbStyle={{ width: 40, height: 40, borderRadius : 40 }}
			              thumb={u.owner["avatar_url"]}
			        
			            />
			            <Card.Body>
			            <View>
			              <View>
			                <Text style={{ marginLeft: 16 }}>{u.description ? u.description : <Text>No description available</Text>}</Text>
			              </View>
			              <View style={{marginTop: 4}}>
			              	<Text style={{ marginLeft: 16 }}>{u.stargazers_count}  <Icon name="star" size={15} color="black" />   
			              		 <Text style={{marginLeft:20}}>{u.forks_count}  <Icon name="code-fork" size={16} color="black" /> {u.default_branch}</Text>
			              	</Text>
			              
			              	
			              </View>
			             </View>
			            </Card.Body>
			            <Card.Footer
			            
			          	content={u.language} 
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
