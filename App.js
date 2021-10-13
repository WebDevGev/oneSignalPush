
import React, { useEffect } from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';
import OneSignal from 'react-native-onesignal';



const App = () => {

  useEffect(() => {
    //OneSignal Init Code
    OneSignal.setLogLevel(6, 0);
    OneSignal.setAppId("8c5bb3a2-c823-4bad-89c5-e96cdb021de0");
    //END OneSignal Init Code

    //Method for handling notifications opened
    OneSignal.setNotificationOpenedHandler(notification => {
      console.log("OneSignal: notification opened:", notification);
    });
  }, [])

  return (
    <View>
      <Text style={styles.textContainer}>OneSignal Push Notifications</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  textContainer: {
    marginTop: 50,
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold'
  }
})
export default App;
