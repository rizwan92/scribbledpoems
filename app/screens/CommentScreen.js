import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Text } from 'native-base';
export default class CommentScreen extends Component {
  render() {
    return (
      <Container>
        <Content>

          <List>
            <ListItem avatar>
              <Left>
                <Thumbnail source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBh7iwdQMDJWVFAt4XrNhNpiw__owMns5hz0Ocgy9DHihF-GXO' }} />
              </Left>
              <Body>
                <Text style={{ fontFamily: 'sans-serif-light',fontSize:12}}>Kumar Pratik</Text>
                <Text note style={{ fontFamily: 'sans-serif-light',fontSize:10}}>Doing what you like will always keep you happy . .</Text>
              </Body>
              <Right>
                <Text note style={{ fontFamily: 'sans-serif-light',fontSize:10}}>3:43 pm</Text>
              </Right>
            </ListItem>
          </List>


          <List>
            <ListItem avatar>
              <Left>
                <Thumbnail source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBh7iwdQMDJWVFAt4XrNhNpiw__owMns5hz0Ocgy9DHihF-GXO' }} />
              </Left>
              <Body>
                <Text style={{ fontFamily: 'sans-serif-light',fontSize:12}}>Kumar Pratik</Text>
                <Text note style={{ fontFamily: 'sans-serif-light',fontSize:10}}>Doing what you like will always keep you happy . .</Text>
              </Body>
              <Right>
                <Text note style={{ fontFamily: 'sans-serif-light',fontSize:10}}>3:43 pm</Text>
              </Right>
            </ListItem>
          </List>


          <List>
            <ListItem avatar>
              <Left>
                <Thumbnail source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBh7iwdQMDJWVFAt4XrNhNpiw__owMns5hz0Ocgy9DHihF-GXO' }} />
              </Left>
              <Body>
                <Text style={{ fontFamily: 'sans-serif-light',fontSize:12}}>Kumar Pratik</Text>
                <Text note style={{ fontFamily: 'sans-serif-light',fontSize:10}}>Doing what you like will always keep you happy . .</Text>
              </Body>
              <Right>
                <Text note style={{ fontFamily: 'sans-serif-light',fontSize:10}}>3:43 pm</Text>
              </Right>
            </ListItem>
          </List>


          <List>
            <ListItem avatar>
              <Left>
                <Thumbnail source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBh7iwdQMDJWVFAt4XrNhNpiw__owMns5hz0Ocgy9DHihF-GXO' }} />
              </Left>
              <Body>
                <Text style={{ fontFamily: 'sans-serif-light',fontSize:12}}>Kumar Pratik</Text>
                <Text note style={{ fontFamily: 'sans-serif-light',fontSize:10}}>Doing what you like will always keep you happy . .</Text>
              </Body>
              <Right>
                <Text note style={{ fontFamily: 'sans-serif-light',fontSize:10}}>3:43 pm</Text>
              </Right>
            </ListItem>
          </List>


          <List>
            <ListItem avatar>
              <Left>
                <Thumbnail source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBh7iwdQMDJWVFAt4XrNhNpiw__owMns5hz0Ocgy9DHihF-GXO' }} />
              </Left>
              <Body>
                <Text style={{ fontFamily: 'sans-serif-light',fontSize:12}}>Kumar Pratik</Text>
                <Text note style={{ fontFamily: 'sans-serif-light',fontSize:10}}>Doing what you like will always keep you happy . .</Text>
              </Body>
              <Right>
                <Text note style={{ fontFamily: 'sans-serif-light',fontSize:8}}>3:43 pm</Text>
              </Right>
            </ListItem>
          </List>




        </Content>
      </Container>
    );
  }
}
