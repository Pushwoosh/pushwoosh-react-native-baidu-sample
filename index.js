/**
 * @format
 */

import {AppRegistry} from 'react-native';
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    DeviceEventEmitter,
    NativeEventEmitter,
    NativeModules
  } from 'react-native';
  
  
  export default class PushwooshSample extends Component {
    render() {
      return (
        <View style={styles.container}>
          <Text style={styles.welcome}>
            Welcome to React Native!
          </Text>
          <Text style={styles.instructions}>
            To get started, edit index.ios.js
          </Text>
          <Text style={styles.instructions}>
            Press Cmd+R to reload,{'\n'}
            Cmd+D or shake for dev menu
          </Text>
        </View>
      );
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    },
  });
  
  import Pushwoosh from 'pushwoosh-react-native-baidu-plugin';

  AppRegistry.registerComponent('PushwooshSample', () => PushwooshSample);

DeviceEventEmitter.addListener('pushOpened', (e: Event) => {
  console.warn("pushOpened: " + JSON.stringify(e));
  alert(JSON.stringify(e));
});

// Alternative way
 // const pushwooshEmitter = new NativeEventEmitter(NativeModules.Pushwoosh);
 // pushwooshEmitter.addListener('pushOpened', (e: Event) => {
 //   console.warn("pushOpened: " + JSON.stringify(e));
 //   alert(JSON.stringify(e));
 // });

Pushwoosh.init({ "pw_appid" : "5F4B2-01599", "secret_key":"ubyTXQu6rUkGY2Bw04yAbO9k"});

Pushwoosh.register(
  (token) => {
    console.warn("Registered for pushes: " + token);
    Pushwoosh.getPushToken(function(token) {
        console.warn("Push token: " + token);
    });
  },
  (error) => {
    console.warn("Failed to register: " + error);
  }
);

Pushwoosh.getHwid((hwid) => {
  console.warn("Pushwoosh hwid: " + hwid);
});


//Inbox example
//Pushwoosh.presentInboxUI();


// Segmentation example
//Pushwoosh.setTags({ "testTag" : "testValue" });
//Pushwoosh.getTags(
//  (tags) => {
//    console.warn("Application tags: " + JSON.stringify(tags));
//  },
//  (error) => {
//    console.error(error);
//  }
//);


// In-App messaging example
//Pushwoosh.setUserId("%userId%");
//Pushwoosh.postEvent("applicationOpened", { "attribute" : "value" });


// Application icon badge number example
//Pushwoosh.setApplicationIconBadgeNumber(2);
//Pushwoosh.addToApplicationIconBadgeNumber(2);
//Pushwoosh.getApplicationIconBadgeNumber((badgeNumber) => {
//  console.warn("Application icon badge number = " + badgeNumber);
//});

// Other examples

// Set notification icon background color
// Pushwoosh.setNotificationIconBackgroundColor("#FF0000");

// Create local notification
// Pushwoosh.createLocalNotification({ "msg" : "my local notification", "seconds" : 10 })