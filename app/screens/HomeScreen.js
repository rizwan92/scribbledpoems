import React, { Component } from 'react';
import {TouchableWithoutFeedback ,View} from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text,Card ,CardItem,Thumbnail,Image,Fab, Item ,Input} from 'native-base';
import HomeScreen1 from './HomeScreen1'
import SearchScreen from './SearchScreen'
import NotificationScreen from './NotificationScreen'
import CreateScreen from './CreateScreen'
import Meteor, { createContainer } from 'react-native-meteor';

 class HomeScreen extends Component {
  constructor() {
    super();
   this.state = {
     active: true,
     screenstate: 1,
   };
 }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <Container >
        <Header>
          <Body>
          {
            this.state.screenstate == 1 ? <Title style={{ fontFamily: 'sans-serif-light'}}>Scribbled Poems</Title>
            :
            this.state.screenstate == 2 ?
            <Item >
             <Input placeholder='Search...' placeholderTextColor="#fff"/>
             <Icon name='search' style={{color:'white'}} />
            </Item>
                      :
            this.state.screenstate == 3 ? <Title style={{ fontFamily: 'sans-serif-light'}}>Scribbled Poems</Title>
            :
            this.state.screenstate == 4 ? <Title style={{ fontFamily: 'sans-serif-light'}}>Scribbled Poems</Title>
            :
            null
          }
          </Body>
          <Right>
          <Button transparent onPress={()=>{navigate('ProfileScreen')}}>
          <Thumbnail source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBh7iwdQMDJWVFAt4XrNhNpiw__owMns5hz0Ocgy9DHihF-GXO'}} style={{width:40,height:40}} onPress={()=>{navigate('ProfileScreen')}}/>
          </Button>
           </Right>
        </Header>


        <Content>
        {
          this.props.todosReady ? <Text  >Wait</Text>
          :
          <View>

        {
          this.state.screenstate == 1 ? <HomeScreen1 posts={this.props.posts} navigation={this.props.navigation}/>
           :
           this.state.screenstate == 2 ? <SearchScreen posts={this.props.posts} navigation={this.props.navigation} />
           :
           this.state.screenstate == 3 ? <NotificationScreen navigation={this.props.navigation} />
           :
           this.state.screenstate == 4 ? <CreateScreen navigation={this.props.navigation} />
           :
           null
        }
        </View>
      }
        </Content>


         <Footer>
          <FooterTab>
            <Button vertical active={this.state.screenstate == 1 ? true : false} onPress={()=>{this.setState({screenstate:1})}}>
              <Icon name="home" />
              <Text style={{ fontFamily: 'sans-serif-light',fontSize:10}}>Home</Text>
            </Button>

            <Button vertical active={this.state.screenstate == 2 ? true : false} onPress={()=>{this.setState({screenstate:2})}}>
              <Icon name="search" />
              <Text style={{ fontFamily: 'sans-serif-light',fontSize:10}}>Search</Text>
            </Button>

            <Button vertical active={this.state.screenstate == 3 ? true : false} onPress={()=>{this.setState({screenstate:3})}}>
              <Icon active name="notifications" />
              <Text style={{ fontFamily: 'sans-serif-light',fontSize:10}}>Bell</Text>
            </Button>

            <Button vertical active={this.state.screenstate == 4 ? true : false} onPress={()=>{navigate('CreateScreen')}}>
              <Icon name="create" />
              <Text style={{ fontFamily: 'sans-serif-light',fontSize:10}}>Create</Text>
            </Button>

          </FooterTab>
        </Footer>
      </Container>
    );
  }
}
export default createContainer(params=>{
  const handle = Meteor.subscribe('allposts');
  return {
    todosReady: !handle.ready(),
    posts: Meteor.collection('posts').find(),
  };
}, HomeScreen)
