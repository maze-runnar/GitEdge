import React, { Component } from 'react';
import { View, Text,TouchableOpacity, Button, Linking, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const data = [   // data for git command
          {
            "command":"git-add",
            "content":"Add file contents to the index" 
          },
          {

          }
]
export default class Detail extends Component {

  render() {
    return (
      <ScrollView >
      <View style = {{justifyContent:"center", alignItems: "center"}}>
        <Text style ={{color:"red", fontSize: 30, fontWeight: "bold"}}> DESCRIPTION </Text>
        <Text style={{padding : 5}}>
          Git is a fast, scalable, distributed revision control system with an unusually rich command set that provides both high-level operations and full access to internals.
          See gittutorial to get started, then see giteveryday for a useful minimum set of commands. The Git User’s Manual has a more in-depth introduction.
          After you mastered the basic concepts, you can come back to this page to learn what commands Git offers. You can learn more about individual Git commands with "git help command". gitcli[7] manual page gives you an overview of the command-line command syntax.
          A formatted and hyperlinked copy of the latest Git documentation can be viewed at https://git.github.io/htmldocs/git.html or https://git-scm.com/docs.
        </Text>
        <Text style ={{color:"red", fontSize: 30, fontWeight: "bold"}}> GIT COMMANDS </Text>
        <Text style={{padding : 5, fontSize: 15}}>
          git-add : Add file contents to the index
         </Text>
         <Text style={{padding : 5, fontSize: 15}}>
          git-am : Apply a series of patches from a mailbox
         </Text>
         <Text style={{padding : 5, fontSize: 15}}>
          git-archive : Create an archive of files from a named tree
         </Text>
         <Text style={{padding : 5, fontSize: 15}}>
          git-bisect : Use binary search to find the commit that introduced a bug
         </Text>

      </View>

      </ScrollView>
    );
  }
}