import React, { Component } from 'react';
import { View, Text,TouchableOpacity, Button, ScrollView, Image , Linking} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
export default class Detail extends Component {
  

  render() {
    return (
      <ScrollView style= {{backgroundColor:"white"}}>
        
        <Image style ={{width: 320, height: 200}}
          source={require('../../assets/gitlearn.png')}
        />
        <TouchableOpacity 
        style={{borderRadius: 50,
         backgroundColor:'white',
          alignItems:'center', borderWidth: 0.8, borderColor:'green',
          padding:7,
          justifyContent:'center'}}
         onPress={() => Linking.openURL("https://www.youtube.com/playlist?list=PL6gx4Cwl9DGAKWClAD_iKpNC0bGHxGhcx")}
        >
           <Text style={{fontSize:20, color:'#f26835'}}>Play Introduction to GIT
            </Text>
        </TouchableOpacity>
        <Image style ={{width: 320, height: 200, marginTop: 10}}
          source={require('../../assets/gitlearn.png')}
        />
       <TouchableOpacity 
        style={{borderRadius: 50,
         backgroundColor:'white',
          alignItems:'center', borderWidth: 0.8, borderColor:'green',
          padding:7,
          justifyContent:'center'}}
         onPress={() => Linking.openURL("https://www.youtube.com/playlist?list=PL6gx4Cwl9DGAKWClAD_iKpNC0bGHxGhcx")}
        >
           <Text style={{fontSize:20, color:'#f26835'}}>Git Commit, Merge, Branching
            </Text>
        </TouchableOpacity>
        <Image style ={{width: 320, height: 200}}
          source={require('../../assets/gitlearn.png')}
      
        />
        <TouchableOpacity 
        style={{borderRadius: 50,
         backgroundColor:'white',
          alignItems:'center', borderWidth: 0.8, borderColor:'green',
          padding:7,
          justifyContent:'center'}}
         onPress={() => Linking.openURL("https://www.youtube.com/watch?v=RGOj5yH7evk")}
        >
           <Text style={{fontSize:20, color:'#f26835'}}>Complete Git Craash Course
            </Text>
        </TouchableOpacity>
        <Image style ={{width: 320, height: 200}}
          source={require('../../assets/gitlearn.png')}
         
        />
        <TouchableOpacity 
        style={{borderRadius: 50,
         backgroundColor:'white',
          alignItems:'center', borderWidth: 0.8, borderColor:'green',
          padding:7,
          justifyContent:'center'}}
         onPress={() => Linking.openURL("https://www.youtube.com/playlist?list=PL9ooVrP1hQOGwtQOt8ZBlVjFlI-9Vr5hx")}
        >
           <Text style={{fontSize:20, color:'#f26835'}}>Git And GitHub 
            </Text>
        </TouchableOpacity>
        <Image style ={{width: 320, height: 200}}
          source={require('../../assets/gitlearn.png')}
        />
       <TouchableOpacity 
        style={{borderRadius: 50,
         backgroundColor:'white',
          alignItems:'center', borderWidth: 0.8, borderColor:'green',
          padding:7,
          justifyContent:'center'}}
         onPress={() => Linking.openURL("youtube.com/playlist?list=PLu0W_9lII9agwhy658ZPA0MTStKUJTWPi")}
        >
           <Text style={{fontSize:20, color:'#f26835'}}>Git Tutorial in Hindi
            </Text>
        </TouchableOpacity>
        <Image style ={{width: 320, height: 200}}
          source={require('../../assets/gitlearn.png')}

        />
        <TouchableOpacity 
        style={{borderRadius: 50,
         backgroundColor:'white',
          alignItems:'center', borderWidth: 0.8, borderColor:'green',
          padding:7,
          justifyContent:'center'}}
         onPress={() => Linking.openURL("https://www.youtube.com/watch?v=CRlGDDprdOQ")}
        >
           <Text style={{fontSize:20, color:'#f26835'}}>Git Merge vs. Rebase 
            </Text>
        </TouchableOpacity>
        <Image style ={{width: 320, height: 200}}
          source={require('../../assets/gitlearn.png')}
          
        />
       <TouchableOpacity 
        style={{borderRadius: 50,
         backgroundColor:'white',
          alignItems:'center', borderWidth: 0.8, borderColor:'green',
          padding:7,
          justifyContent:'center'}}
         onPress={() => Linking.openURL("https://www.youtube.com/watch?v=VUuGa1QFmcA")}
        >
           <Text style={{fontSize:20, color:'#f26835'}}>Git Reset, Revert 
            </Text>
        </TouchableOpacity>
        <Image style ={{width: 320, height: 200}}
          source={require('../../assets/gitlearn.png')}
          onPress={() => Linking.openURL("https://www.youtube.com/watch?v=Gg4bLk8cGNo")}
        />
        <TouchableOpacity 
        style={{borderRadius: 50,
         backgroundColor:'white',
          alignItems:'center', borderWidth: 0.8, borderColor:'green',marginBottom: 10,
          padding:7,
          justifyContent:'center'}}
         onPress={() => Linking.openURL("https://www.youtube.com/watch?v=Gg4bLk8cGNo")}
        >
           <Text style={{fontSize:20, color:'#f26835'}}>Git Remote
            </Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }
}