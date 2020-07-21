import React, { Component,useState} from 'react';
import { ImageBackground, Platform, StyleSheet, Text, View } from 'react-native';
import SpeechToText from './SpeechToText'
import ChatBot from './ChatBot';
import Example from './test_component';
import YourComponent from './TextToSpeech';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' + 'Shake or press menu button for dev menu',
});

const image = { uri: "https://raw.githubusercontent.com/AnuskaK10/React_Native_1/master/dine.png" };

export default class App extends Component {
  state = {
    text: 'Hi! I am your virtual assistant from Dell Technologies.\n\nHow may I help you today?'
  }
  constructor(props){
    super(props);
    this.textHandler = this.textHandler.bind(this);
  }
  
  textHandler (newtext) {
    // console.log("test")
    
    console.log("TEST"+newtext)
    this.setState({text: newtext});
  }

  render() {
    console.log("in app ");
    console.log("APP:" + this.state.text)
    return (
	     // <UserInactivity
    //   isActive={active}
    //   timeForInactivity={timer}
    //   onAction={isActive => { setActive(isActive); }}
    //   style={{ flex: 1 }}>
      // <SpeechToText />
      
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.image}>
     <YourComponent 
     text = {this.state.text}
     />

      <ChatBot
      text = 'Hi! I am your virtual assistant from Dell Technologies.\n\nHow may I help you today?'
      fortextHandle={this.textHandler} 
     /> 
     </ImageBackground>
    </View>
    

    
    
    
  
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  }
});
