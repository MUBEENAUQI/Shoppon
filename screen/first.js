import React, {Component} from 'react';
import {TouchableHighlight, View, Text, Image, StatusBar,Dimensions,SafeAreaView} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
export default class First extends Component {
  render() {
    return (
      <>
      <SafeAreaView>
        <StatusBar backgroundColor="#f2982f" barStyle="light-content" />
        <View>
          <View
            style={{
              //justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#ffffff',
              flexDirection: 'column',height:hp("135%")
            }}>
            <View style={{height:hp("35%"),paddingTop:hp("10%")}}>
              <Image
                style={{width:wp("80%"), height:Dimensions.get('window').height/5,resizeMode:"center"}}
                source={require('../assets/Logo1.jpg')}
              />
            </View>
            <View style={{fontWeight: 'bold'}}>
              <Text style={{fontWeight: 'bold', fontSize: wp("5%")}}>
                Sign in to your account
              </Text>
            </View>
            <View style={{paddingTop: 10, marginLeft: -wp("30%")}}>
              <Text style={{paddingTop: 5,fontSize: wp("4%")}}>View your wishlist</Text>
              <Text style={{paddingTop: 5,fontSize: wp("4%")}}>
                Find and reorder past purchases
              </Text>
              <Text style={{paddingTop: 5,fontSize: wp("4%")}}>Track your purchases</Text>
            </View>

            <View style={{marginTop: hp("3%"), width: '90%'}}>
              <TouchableHighlight
                style={{
                  backgroundColor: '#ffc340',
                  paddingVertical: 9,
                  borderRadius: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderWidth: 1,
                  borderColor: '#dfdecb',
                }}
                underlayColor="#f2982f"
                onPress={() =>
                  this.props.navigation.navigate('Hello. Sign In')
                }>
                <Text> Already a customer? SignIn </Text>
              </TouchableHighlight>
            </View>
            <View style={{marginTop:3, width: '90%'}}>
              <TouchableHighlight
                style={{
                  paddingVertical: 9,
                  backgroundColor: '#ffc340',
                  borderRadius: 10,
                  borderWidth: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderColor: '#dfdecb',
                }}
                underlayColor="#f2982f"
                onPress={() => this.props.navigation.navigate('Create account')}>
                <Text> New to Shoppon.in? Create an account </Text>
              </TouchableHighlight>
            </View>
            <View style={{marginTop: 3, width: '90%'}}>
              <TouchableHighlight
                style={{
                  backgroundColor: '#ffc340',
                  paddingVertical: 9,
                  borderRadius:10,
                  borderWidth: 1,
                  borderColor: '#dfdecb',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                underlayColor="#f2982f"
                onPress={() => this.props.navigation.navigate('Home')}>
                <Text> Skip SignIn ?</Text>
              </TouchableHighlight>
            </View>
          </View>
        </View>
        </SafeAreaView>
      </>
    );
  }
}
