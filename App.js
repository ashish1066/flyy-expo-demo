import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import Flyy from 'react-native-flyy';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  const [username, onChangeUsername] = React.useState(null);
  const [number, onChangeNumber] = React.useState(null);

  useEffect(() => {
    //console.log("ON START CALLED")
    Flyy.setPackageName("com.theflyy.demo");
    //Flyy.initSDK("e60a13ddc96e376bdb77", Flyy.STAGE);
    Flyy.initSDKWithReferralCallback("e60a13ddc96e376bdb77", Flyy.STAGE,
      (referralData) => {
        console.log("REFERRALCODE :::" + referralData)
        Flyy.verifyReferralCode(referralData[0], (success, isValid) => {
          console.log("Referral response " + success, isValid);
      });
      });
  });

  return (
    <View style={styles.main}>
    <View style={styles.container}>
      <TextInput style={styles.input}
        placeholder="Username"
        onChangeText={onChangeUsername}
        keyboardType='default'
        value={username}
      />

      <TextInput style={styles.input}
        placeholder="Mobile"
        onChangeText={onChangeNumber}
        keyboardType='number-pad'
        value={number}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          if (username != null && number != null) {
            Flyy.setThemeColor("#CC911D", "#CC911D");
            Flyy.setUser(number);
            Flyy.setUserName(username);
            Flyy.openOffersScreen();
          }
        }
          //this.openOffersScreen()
        }>
        <Text style={styles.buttonText}>LOGIN</Text>
      </TouchableOpacity>
    </View>
  </View>
  );
}

const styles = StyleSheet.create({
  main: {
    height: '100%',
    width: '100%',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  container: {
    height: '100%',
    width: '80%',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  input: {
    height: 40,
    width: '100%',
    borderRadius: 10,
    borderColor: 'deepskyblue',
    borderWidth: 1,
    padding: 10,
    margin: 25,
  },
  buttonText: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
    color: 'white'
  },
  button: {
    width: 150,
    height: 50,
    backgroundColor: 'deepskyblue',
    textAlign: 'center',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30
  }
});

