import React from 'react';
import { StyleSheet,Text,View,Image ,TouchableHighlight ,AsyncStorage ,BackHandler } from 'react-native';
import { StackNavigator ,NavigationActions ,TabNavigator} from 'react-navigation';
import { Icon } from 'native-base'
import LoginScreen from './screens/LoginScreen'
import HomeScreen from './screens/HomeScreen'
import CommentScreen from './screens/CommentScreen'
import ProfileScreen from './screens/ProfileScreen'
import WriteScreen from './screens/WriteScreen'
import CreateScreen from './screens/CreateScreen'
import settings from './settings';
import Meteor from 'react-native-meteor';
Meteor.connect(settings.METEOR_URL);

const MyNavigator = (signedIn) => {
  return StackNavigator(
    {
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
      ProfileScreen: {
        screen: ProfileScreen,
        navigationOptions: ({navigation}) => ({
        }),
      },
      CommentScreen: {
        screen: CommentScreen,
        navigationOptions: ({navigation}) => ({
        }),
      },
      CreateScreen: {
        screen: CreateScreen,
        navigationOptions: ({navigation}) => ({
        }),
      },
      WriteScreen: {
        screen: WriteScreen,
        navigationOptions: ({navigation}) => ({
        }),
      },
    },
        {
          mode: "modal",
          initialRouteName: signedIn ? "HomeScreen" : "LoginScreen"
        }
  )
}

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      user_id:null,
    }
  }
componentWillUnmount() {
  BackHandler.removeEventListener('hardwareBackPress', function() {
});
}
  componentWillMount(){
    AsyncStorage.getItem('user_id', (err, result) => {
      if (result) {
        this.setState({user_id:true})
      }else {
        this.setState({user_id:false})
      }
    })
  }

  render() {
    if (this.state.user_id == null) {
      return null ;
    }
     const Layout = MyNavigator(this.state.user_id);
      return (
      <Layout  />
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
