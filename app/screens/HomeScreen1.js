import React, { Component } from 'react';
import {TouchableWithoutFeedback, BackHandler ,FlatList, AsyncStorage} from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text,Card ,CardItem,Thumbnail,Image,Fab} from 'native-base';
import Meteor from 'react-native-meteor';
import moment from 'moment';
export default class HomeScreen1 extends Component {
  constructor() {
    super();
   this.state = {
     active: true,
     user_id:null,
   };
 }
 handleLikes(item){
   console.log(item.likes);
  if (item.likes.length == 0) {
    Meteor.call('posts.like',item._id,this.state.user_id,(err,res)=>{
    })
  }else {
        let isavailable = item.likes.filter((like) => {
       return (like == this.state.user_id);
     });
     console.log(isavailable);
     if (isavailable.length == 0) {
       Meteor.call('posts.like',item._id,this.state.user_id,(err,res)=>{

       })
     }else {
       console.log("is available");
     }
  }
 }
 componentWillMount(){
   AsyncStorage.getItem('user_id', (err, result) => {
     if (result) {
       this.setState({user_id:result})
     }else {
     }
   })
 }
  render() {
    const { navigate } = this.props.navigation;
    return (
        <FlatList
         data={this.props.posts}
          keyExtractor={(item, index) => item._id}
         renderItem={({item}) =>{
           return(
             <Card>
                <CardItem>
                  <Left>
                  <TouchableWithoutFeedback onPress={()=>{navigate('ProfileScreen')}}>
                  <Thumbnail source={item.userdetail.image == '' ? require('../images/noimage.jpg') : {uri:item.userdetail.image}}/>
                  </TouchableWithoutFeedback>
                    <Body>
                      <Text onPress={()=>{navigate('ProfileScreen')}} style={{ fontFamily: 'sans-serif-light'}}>{item.userdetail.name.toUpperCase()}</Text>
                      <Text note style={{ fontFamily: 'sans-serif-light'}}>{item.userdetail.email}</Text>
                    </Body>
                  </Left>
                </CardItem>
                <CardItem>
                <Body>
                  <Text style={{ fontFamily: 'sans-serif-light',fontSize:14}}>
                  {item.text}
                  </Text>
                </Body>
              </CardItem>
              <CardItem>
                <Left>
                  <Button transparent onPress={this.handleLikes.bind(this,item)}>
                    <Icon active name="thumbs-up" />
                    <Text style={{ fontFamily: 'sans-serif-light',fontSize:10}}>{item.likes.length} Likes</Text>
                  </Button>
                </Left>
                <Body>
                  <Button transparent onPress={()=>{navigate('CommentScreen')}}>
                    <Icon active name="chatbubbles" />
                    <Text style={{ fontFamily: 'sans-serif-light',fontSize:10}}>{item.comments.length} Comments</Text>
                  </Button>
                </Body>
                <Right>
                  <Text style={{ fontFamily: 'sans-serif-light',fontSize:10}}>{moment(item.createdAt).fromNow()}</Text>
                </Right>
              </CardItem>
              </Card>
            )
          }
        }
       />
    );
  }
}
