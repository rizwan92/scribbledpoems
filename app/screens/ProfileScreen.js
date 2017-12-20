import React, { Component } from 'react';
import { TouchableWithoutFeedback, AsyncStorage ,FlatList} from 'react-native'
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text ,Thumbnail, Card ,CardItem } from 'native-base';
import Meteor, { connectMeteor } from 'react-native-meteor';
import moment from 'moment';
class ProfileScreen extends Component {
  constructor(props){
    super(props);
    this.state={
      user_id:null,
    }
  }
  componentWillMount(){
    AsyncStorage.getItem('user_id', (err, result) => {
      if (result) {
        this.setState({user_id:result})
      }else {
        this.setState({user_id:null})
      }
    })
  }

  handleLogout(){
    AsyncStorage.clear((error)=>{
    this.props.navigation.navigate('LoginScreen')
    });
  }
  getMeteorData() {
    const handle = Meteor.subscribe('postsbyuserid',this.state.user_id);
  return {
    posts: Meteor.collection('posts').find({}),
  };
}
  render() {
      const { posts } = this.data;
      console.log(posts);
    const { navigate } = this.props.navigation;
    return (
      <Container>
        <Content>
        <CardItem>
          <Left>
          <TouchableWithoutFeedback onPress={()=>{navigate('ProfileScreen')}}>
          <Thumbnail source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoQfKtOZZEJvtq09OJtMiBGwIDdpkHySN7UEZp90yr2mW3OmNe'}} style={{width:150,height:150,borderRadius:80}}/>
          </TouchableWithoutFeedback>
          </Left>
          <Right style={{justifyContent:'center',alignItems:'center'}}>
            <Text  style={{display:'flex',margin:5,backgroundColor:'#efefef',fontFamily: 'sans-serif-light',borderRadius:5,padding:5}}>33 Writings</Text>
            <Text style={{display:'flex',margin:5,backgroundColor:'#efefef',fontFamily: 'sans-serif-light',borderRadius:5,padding:5}}>150 Followers</Text>
            <Text style={{display:'flex',margin:5,backgroundColor:'#efefef',fontFamily: 'sans-serif-light',borderRadius:5,padding:5}}>233 Followings</Text>
          </Right>
        </CardItem>
        <CardItem>
        <Left>
        <Button rounded success small style={{margin:5}}>
        <Text style={{ fontFamily: 'sans-serif-light'}}>Change Photo</Text>
        </Button>
        </Left>
        <Right>
        <Button rounded light small style={{margin:5}} onPress={this.handleLogout.bind(this)}>
        <Text style={{ fontFamily: 'sans-serif-light'}}>Logout</Text>
        </Button>
        </Right>
        </CardItem>

        <FlatList
         data={posts}
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
                  <Button transparent>
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

         </Content>
      </Container>
    );
  }
}
connectMeteor(ProfileScreen);
 export default ProfileScreen;
