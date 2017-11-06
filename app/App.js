import React from 'react';
import { StyleSheet,Text,View,Image ,TouchableHighlight} from 'react-native';
import { StackNavigator ,NavigationActions ,TabNavigator} from 'react-navigation';
import LoginScreen from './screens/LoginScreen'
import HomeScreen from './screens/HomeScreen'
import CommentScreen from './screens/CommentScreen'
import ProfileScreen from './screens/ProfileScreen'

const MyNavigator = StackNavigator({
  HomeScreen: {
    screen: HomeScreen,
    navigationOptions: ({navigation}) => ({
      header:null
    }),
  },
  LoginScreen: {
    screen: LoginScreen,
    navigationOptions: ({navigation}) => ({
      header:null
    }),
  },
  CommentScreen: {
    screen: CommentScreen,
    navigationOptions: ({navigation}) => ({
    }),
  },
  ProfileScreen: {
    screen: ProfileScreen,
    navigationOptions: ({navigation}) => ({
    }),
  },
  WriteScreen: {
    screen: WriteScreen,
    navigationOptions: ({navigation}) => ({
    }),
  },
})

export default class App extends React.Component {
  render() {
    return (
    <MyNavigator />
   );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
