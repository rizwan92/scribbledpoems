import React, { Component } from 'react';
import {TouchableWithoutFeedback} from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text,Card ,CardItem,Thumbnail,Image,Fab} from 'native-base';

export default class HomeScreen extends Component {
  constructor() {
    super();
   this.state = {
     active: true
   };
 }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <Container>
        <Header>
          <Body>
            <Title>Scribbled Poems</Title>
          </Body>
          <Right>
          <Button transparent onPress={()=>{navigate('ProfileScreen')}}>
          <Thumbnail source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBh7iwdQMDJWVFAt4XrNhNpiw__owMns5hz0Ocgy9DHihF-GXO'}} style={{width:40,height:40}} onPress={()=>{navigate('ProfileScreen')}}/>
          </Button>
           </Right>
        </Header>


        <Content>

        <Card>
           <CardItem>
             <Left>
             <TouchableWithoutFeedback onPress={()=>{navigate('ProfileScreen')}}>
             <Thumbnail source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoQfKtOZZEJvtq09OJtMiBGwIDdpkHySN7UEZp90yr2mW3OmNe'}}/>
             </TouchableWithoutFeedback>
               <Body>
                 <Text onPress={()=>{navigate('ProfileScreen')}}>NativeBase</Text>
                 <Text note>GeekyAnts</Text>
               </Body>
             </Left>
           </CardItem>
           <CardItem>
           <Body>
             <Text>
              i am wiritng this with from core of my heart
              i am wiritng this with from core of my heart
              i am wiritng this with from core of my heart
              i am wiritng this with from core of my heart
              i am wiritng this with from core of my heart
              i am wiritng this with from core of my heart
              i am wiritng this with from core of my heart
              i am wiritng this with from core of my heart
              i am wiritng this with from core of my heart
              i am wiritng this with from core of my heart
              i am wiritng this with from core of my heart
             </Text>
           </Body>
         </CardItem>
         <CardItem>
           <Left>
             <Button transparent>
               <Icon active name="thumbs-up" />
               <Text>12 Likes</Text>
             </Button>
           </Left>
           <Body>
             <Button transparent onPress={()=>{navigate('CommentScreen')}}>
               <Icon active name="chatbubbles" />
               <Text>Comments</Text>
             </Button>
           </Body>
           <Right>
             <Text>11h ago</Text>
           </Right>
         </CardItem>
         </Card>


        <Card>
           <CardItem>
             <Left>
             <TouchableWithoutFeedback onPress={()=>{navigate('ProfileScreen')}}>
             <Thumbnail source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoQfKtOZZEJvtq09OJtMiBGwIDdpkHySN7UEZp90yr2mW3OmNe'}}/>
             </TouchableWithoutFeedback>
               <Body>
                 <Text onPress={()=>{navigate('ProfileScreen')}}>NativeBase</Text>
                 <Text note>GeekyAnts</Text>
               </Body>
             </Left>
           </CardItem>
           <CardItem>
           <Body>
             <Text>
              i am wiritng this with from core of my heart
              i am wiritng this with from core of my heart
              i am wiritng this with from core of my heart
              i am wiritng this with from core of my heart
              i am wiritng this with from core of my heart
              i am wiritng this with from core of my heart
              i am wiritng this with from core of my heart
              i am wiritng this with from core of my heart
              i am wiritng this with from core of my heart
              i am wiritng this with from core of my heart
              i am wiritng this with from core of my heart
             </Text>
           </Body>
         </CardItem>
         <CardItem>
           <Left>
             <Button transparent>
               <Icon active name="thumbs-up" />
               <Text>12 Likes</Text>
             </Button>
           </Left>
           <Body>
             <Button transparent onPress={()=>{navigate('CommentScreen')}}>
               <Icon active name="chatbubbles" />
               <Text>Comments</Text>
             </Button>
           </Body>
           <Right>
             <Text>11h ago</Text>
           </Right>
         </CardItem>
         </Card>



        </Content>

        <Fab
         active={this.state.active}
         direction="up"
         containerStyle={{ }}
         style={{ backgroundColor: '#5067FF' }}
         position="bottomRight"
         onPress={() =>{navigate('WriteScreen')}}>
         <Icon active name="create" />
         </Fab>

      </Container>
    );
  }
}
