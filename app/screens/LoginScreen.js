import React, { Component } from 'react';
import {StyleSheet,Text,View,Button,ScrollView,AsyncStorage ,BackHandler} from 'react-native';
import RegisterationForm from '../components/RegisterationForm';
import LoginForm from '../components/LoginForm';
import { Container, Header, Content} from 'native-base';
export default class LoginScreen extends Component {
  constructor(props){
    super(props);
    this.state={
      text:'Registeration?',
      condition:true,
      user_id:'',
    }
  }
  componentWillMount() {
  }
handleform(){
  if (this.state.text === 'Login?' ) {
    this.setState({condition:!this.state.condition,text:'Registeration?'})
  }else {
    this.setState({condition:!this.state.condition,text:'Login?'})
  }
}
  render() {
    const { navigate } = this.props.navigation;
    return (
      <ScrollView style={styles.container}>
      {
        this.state.condition ?
        <LoginForm navigation={this.props.navigation}/>
        :
        <RegisterationForm navigation={this.props.navigation}/>
      }
          <View style={{justifyContent:'center',alignItems:'center'}}>
          <Text style={{color:'blue',marginTop:10,padding:20,fontSize:15}} onPress={this.handleform.bind(this)}>{this.state.condition ? this.state.text : this.state.text }</Text>
          </View>
        </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
   flex: 1,
    backgroundColor: 'white',
  },
});
