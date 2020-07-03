import React, { Component } from 'react';
import { View, Text,TouchableOpacity, Button, Linking, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Container, Header, Content, Accordion } from "native-base";


const data1 = [
  { title: "git init", content: "Initialize a local Git repository" },
  { title: "git clone ssh url", content: "Create a local copy of a remote repository" },
  { title: "git status", content: "Check status of the current files either they are staged or unstages or commited." },
  { title: "git add [file-name.txt]", content: "Add a file to the staging area" },
  { title: "git add -A", content: "Add all new and changed files to the staging area" },
  { title: "git commit -m '[commit message]'", content: "Commit changes after staging them" },
  { title: "git rm -r [file-name.txt]", content: "Remove a file or folder" },
  { title: "git branch", content: "List branches (the asterisk denotes the current branch)" },
  { title: "git branch -a", content: "List all branches (local and remote)" },
  { title: "git branch [branch name]", content: "Create a new branch" },
  { title: "git branch -d [branch name]", content: "Delete a branch" },
  { title: "git push origin --delete [branch name]", content: "Delete a remote branch" },
];

const data2 = [
  { title: "git push origin [branch name]", content: "Push a branch to your remote repository" },
  { title: "git push -u origin [branch name]", content: "Push changes to remote repository (and remember the branch)" },
  { title: "git push", content: "Push changes to remote repository (remembered branch)" },
  { title: "git push origin --delete [branch name]", content: "Delete a remote branch" },
  { title: "git pull", content: "Update local repository to the newest commit" },
  { title: "git pull origin [branch name]", content: "Pull changes from remote repository" },
  { title: "git remote add origin ssh url", content: "Add a remote repository" },
]

const data3 = [
  { title: "git log", content: "View changes" },
  { title: "git log --summary", content: "View changes (detailed)" },
  { title: "git log --oneline", content: "View changes (briefly)" },
  { title: "git diff [source branch] [target branch]", content: "Preview changes before merging" },
]

export default class Detail extends Component {

  render() {

    return (
      <ScrollView >
      <View style = {{justifyContent:"center", alignItems: "center", backgroundColor:'white'}}>
        <Icon name="terminal" size={55} color="#f24e29" />
        <Container style = {{width : "100%"}}>
        <Content padder style={{ backgroundColor: "white" }}>
          <Accordion dataArray={data1} expanded={false} animation={true}/>
        </Content>
        </Container>

      </View>
      <View style = {{justifyContent:"center", alignItems: "center", backgroundColor:'white'}}>
        <Container style = {{width : "100%"}}>
        <Content padder style={{ backgroundColor: "white" }}>
          <Accordion dataArray={data2} expanded={false} animation={true}/>
        </Content>
        </Container>

      </View>
      <View style = {{justifyContent:"center", alignItems: "center", backgroundColor:'white', marginTop : -200, marginBottom: -300}}>
        <Container style = {{width : "100%"}}>
        <Content padder style={{ backgroundColor: "white" }}>
          <Accordion dataArray={data3} expanded={false} animation={true}/>
        </Content>
        </Container>

      </View>

      </ScrollView>
    );
  }
}