import React, { Component } from 'react';
import { View, Text,TouchableOpacity, Button, Linking } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
export default class Detail extends Component {
  

  render() {
    return (
      <View >
      <View style ={{width:"100%",marginTop:50, alignItems: 'center'}}>
      <TouchableOpacity onPress={() => this.props.navigation.navigate('video')}>
        <Icon name="play" size={100} color="#f24e29" />
      </TouchableOpacity>
      </View>
      <View style ={{width:"100%",marginTop:50,  alignItems: 'center'}}>
      <TouchableOpacity  onPress={() => Linking.openURL("https://github.com/progit/progit2/releases/download/2.1.231/progit.pdf")}>
        <Icon name="book" size={100} color="#f28a29" />
      </TouchableOpacity>
      </View> 
      <View style ={{width:"100%",marginTop:50,  alignItems: 'center'}}>
      <TouchableOpacity  onPress={() => this.props.navigation.navigate('docs')}>
        <Icon name="edit" size={100} color="#f00000" />
      </TouchableOpacity>
      </View> 
        
      </View>
    );
  }
}