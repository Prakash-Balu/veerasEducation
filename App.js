// import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Linking } from 'react-native';
import Button from '@material-ui/core/Button';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { CountryPicker, CountryButton } from "react-native-country-codes-picker";
// import {CountryList} from "react-native-country-codes-picker";
const image = require('./assets/logoKApp.png');
function ListHeaderComponent({ countries, lang, onPress }) {
  return (
    <View
      style={{
        paddingBottom: 20,
      }}
    >
      <Text>
        Popular countries
      </Text>
      {/* {countries?.map((country, index) => {
              return (
                  <CountryButton key={index} item={country} name={country?.name?.[lang || 'en']} onPress={() => onPress(country) />
              )
          })} */}
    </View>
  )
}

export default function App() {
  const [show, setShow] = useState(false);
  const [countryCode, setCountryCode] = useState('+91');
  return (
    <View style={styles.container}>
      <Text style={styles.loginHeader}>welcome to kadalaiapp</Text>
      <View style={styles.logoImg}>
        <Image source={image} style={{ width: 100, height: 100 }} />
      </View>

      <View >
        <Text style={styles.RegNum}> Register Your Number </Text>
      </View>
      <View >
        <Text style={styles.Text1}> Please choose your country code and enter your mobile number to get the verification code.</Text>
      </View>
      <View style={styles.TextInput1}>
        <TouchableOpacity
          onPress={() => setShow(true)}
          style={{
            width: '15%',
            height: 40,
            backgroundColor: 'grey',
            padding: 10,
          }}
        >
          <Text style={{
            color: 'white',
            fontSize: 11
          }}>
            {countryCode}
          </Text>
        </TouchableOpacity>
        {/* For showing picker just put show state to show prop */}
        <CountryPicker
          show={show}
          // when picker button press you will get the country object with dial code
          pickerButtonOnPress={(item) => {
            setCountryCode(item.dial_code);
            setShow(false);
          }}
          ListHeaderComponent={ListHeaderComponent}
          popularCountries={['en', 'ua', 'pl']}
        />
        <TextInput style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 20, position: 'absolute', left: 75 }}
          onChangeText={text => setValue(text)}
          keyboardType="numeric"
          placeholder="Enter your text here" />
        <Button
        style={styles.SubmitBtn}
          key="submitBtn"
          variant="contained"
          color="default"
          startIcon={<ArrowForwardIcon />}
          onClick={() => this.onInputChange(submitBtn)}
        >
          
        </Button>
      </View>


      <View >
        <Text style={styles.Text2}> Read and accept the KadalaiApp
          <Text style={{ color: 'blue' }}
            onPress={() => Linking.openURL('http://google.com')}>
            Terms of Service and Privacy Policy
          </Text>
        </Text>
      </View>

    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    // backgroundColor: 'aqua',
    // alignItems: 'center',
    // justifyContent: 'center',
    borderWidth: 2,
    // borderColor: 'red',
    fontWeight: 'bold',
    maxWidth: '390px',
    paddingRight: '32px',
    paddingLeft: '32px',
    marginTop: '120px',
    marginBottom: '60px',
    marginRight: 'auto',
    marginLeft: 'auto'
  },
  loginHeader: {
    marginTop: '70px',
    fontWeight: 'bold',
    textAlign: 'center',
    textTransform: 'capitalize',
  },
  logoImg: {
    marginTop: '27px',
    alignSelf: 'center',

  },
  RegNum: {
    marginTop: '30px',
    fontWeight: 'bold',
    textAlign: 'center',
    textTransform: 'capitalize',

  },
  Text1: {
    marginTop: '30px',
    textAlign: 'center',
  },
  TextInput1: {
    marginTop: 72,
    textAlign: 'center'
  },
  SubmitBtn: {
    position: 'absolute',
    right: 0
  },
  Text2: {
    marginTop: 81.44,
    marginBottom: 139,
    textAlign: 'center',
  },
});