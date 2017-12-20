import React, { Component } from 'react';
import {View ,TextInput, AsyncStorage ,ToastAndroid } from 'react-native'
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import Meteor, { connectMeteor } from 'react-native-meteor';

class CreateScreen extends Component {
  constructor(props) {
  super(props);
  this.state = {
    mywriting: '',
    user_id: '',
  };
}
doneWriting(){
  let user_id = this.state.user_id ;
  let mywriting = this.state.mywriting ;
  if (mywriting === '') {
    ToastAndroid.show('Field is Empty', ToastAndroid.SHORT);
    return false;
  }
  let userdetail = this.data.user[0]
  let post ={
    user_id,mywriting,userdetail,
  }
  Meteor.call('posts.insert',post,(err,res)=>{
    if (res) {
      this.setState({mywriting:''},()=>{
        AsyncStorage.setItem('mywriting','');
        ToastAndroid.show('You Wrote SuccessFully', ToastAndroid.SHORT);
        this.props.navigation.goBack();
      })
    }
  })
}
componentWillMount() {
  AsyncStorage.multiGet(['mywriting','user_id'], (err, stores) => {
    stores.map((result, i, store) => {
      let fields =store[i];
      this.setState({[fields[0]]:fields[1]})
      });
   });
 }
 getMeteorData() {
   const handle = Meteor.subscribe('user',this.state.user_id);
 return {
   user: Meteor.collection('user').find({_id:this.state.user_id}),
 };
}

  render() {
    return (
      <Container>
        <Content>
        <TextInput
          style={{flex:1,height:150}}
          placeholder="Type here to translate!"
          onChangeText={(text) => this.setState({mywriting:text},()=>{
            AsyncStorage.setItem('mywriting',this.state.mywriting);
          })}
          value={this.state.mywriting}
          multiline
          autoGrow
          />
      </Content>
        <Footer>
          <FooterTab>
            <Button full onPress={this.doneWriting.bind(this)}>
              <Text>Done</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}
connectMeteor(CreateScreen);
 export default CreateScreen;
