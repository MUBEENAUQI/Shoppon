import {Component} from 'react';
import * as React from 'react';

import {RadioButton} from 'react-native-paper';
import {Input, Content, Footer} from 'native-base';
import {
  View,
  Text,
  Image,
  StatusBar,
  TouchableOpacity,
  Button,
  TouchableOpacityBase,SafeAreaView,TouchableHighlight,ScrollView
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesomeI from 'react-native-vector-icons/FontAwesome';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
export default class SignIn extends Component {
  state = {
    checked: 'second',
  };
  render() {
    const {checked} = this.state;
    return (
      <>
        <StatusBar backgroundColor="#f2982f" barStyle="light-content" />
        <ScrollView><SafeAreaView style={{backgroundColor:"white",height:hp("100%")+35}}>
        <View style={{height:31,backgroundColor:"#f2982f"}}/>
        <View style={{}}>
          <LinearGradient colors={['#f3982f', '#ffd25b']}>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                height: hp("10%"),
              }}>
                {/* <Text style={{fontWeight:"bold",fontSize:hp("3%")}}>Shoppon name Logo</Text> */}
              <Image
               style={{height:hp("9%"),resizeMode:"contain",paddingBottom:5}}
                source={require('../assets/logo.png')}
              />
            </View>
          </LinearGradient>
        </View>
        <Content
          style={{
            backgroundColor: '#ffffff',
            paddingBottom: 10,
          }}>
          <View>
            <Text style={{fontWeight:"bold",fontSize:hp("3%"),paddingLeft:hp("3%"),paddingVertical:hp("2%")}}>Welcome</Text>
          </View>

          <View style={{paddingHorizontal: wp("5%"),width:"100%"}}>
            <View
              style={{
                borderWidth: 1,
                borderColor: '#e0e0e0',
                width:"100%",
                flexDirection: 'row',
                marginLeft: 3,
                alignItems: 'center',
                backgroundColor: '#ffeec4',
                height: 50,
              }}>
              <View style={{marginLeft: 15}} />
              <RadioButton
                value="first"
                color="#e77600"
                uncheckedColor="#f2982f"
                status={'unchecked'}
                onPress={() => this.props.navigation.navigate('Create account')}
              />
              <Text style={{fontWeight: 'bold', fontSize: hp("2%")}}>
                Create account.
              </Text>
              <Text style={{marginLeft: 3,fontSize: hp("1.8%")}}>New to Shoppon</Text>
            </View>
            <View
              style={{
               
                alignItems: 'center',
                marginLeft: 3,
                backgroundColor: 'white',
                borderWidth: 1,
                borderColor: '#e0e0e0',
                width: "100%",
               
                borderTopWidth:.2
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  paddingVertical: 5,

                  width:"92%",

                  
                }}>
                <RadioButton
                  value="second"
                
                  color="#f2982f"
                  uncheckedColor="#f2982f"
                  status={ 'checked'}
                  onPress={() => this.props.navigation.navigate('Hello. Sign In')}
                />
                <Text style={{fontWeight: 'bold', fontSize: hp("2%")}}>Login.</Text>
                <Text style={{marginLeft: 3,fontSize: hp("1.8%")}}>Already a customer?</Text>
              </View>
              <View
                style={{
                  height: hp("6%"),
                  width: '90%',
                }}>
                <Input
                  style={{
                    fontSize: hp("2%"),
                    marginLeft: 5,
                    borderTopWidth: 1,
                    borderColor: '#afafaf',
                    borderWidth: 1,
                  }}
                  placeholderTextColor="#9c9c9c"
                  placeholder="   Mobile number or Email"
                />
              </View>
              {/* <View
                style={{
                  height: hp("6%"),
                  width: '88%',
                  marginTop:hp("1%"),marginLeft:wp("1.5%")
                }}>
                <LinearGradient colors={['#f3982f', '#ffd25b']}>
                  <View
                    style={{
                      height: 33,
                      
                      marginTop: 10,
                      alignItems: 'center',
                      borderBottomWidth: 1,
                      borderColor: '#b29242',
                    }}>
                    <TouchableOpacity
                      onPress={() => this.props.navigation.navigate('Home')}>
                      <Text style={{fontSize: 18}}>Continue</Text>
                    </TouchableOpacity>
                  </View>
                </LinearGradient>
              </View> */}
 <View style={{marginTop: hp("1.5%"), width: '90%',marginLeft:3}}>
              <TouchableHighlight
                style={{
                  backgroundColor: '#ffc340',
                  paddingVertical: 9,
                  borderRadius:5,
                  borderWidth: 1,
                  borderColor: '#dfdecb',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                underlayColor="#f2982f"
                onPress={() => this.props.navigation.navigate('Home')}>
                <Text style={{fontWeight: "500", fontSize: wp("5%")}}>Continue</Text>
              </TouchableHighlight>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                  paddingHorizontal: wp("5%"),
                  fontSize: 10,
                  marginTop: hp("1%"), marginBottom: hp("1.5%"),
                }}>
                <Text style={{marginRight: 3,fontSize: wp("3.5%")}}>
                  By continuing, you agree to Shoppon's
                </Text>
                <Text style={{color: '#377fbb',fontSize: wp("3.5%")}}>Conditions of Use</Text>
                <Text style={{fontSize: wp("3.5%")}}>and</Text>
                <Text style={{color: '#377fbb', marginLeft: 3,fontSize: wp("3.5%")}}>
                  Privacy Notice.
                </Text>
              </View>
            </View>
          </View>
          
        </Content>
        </SafeAreaView></ScrollView>
        <Footer
          style={{backgroundColor: '#ffeec4', flexWrap: 'wrap', height: hp("7"),justifyContent:"space-between",width:wp("100%"),paddingHorizontal:wp("3%")}}>
          <Text
            style={{
              color: '#377fbb',
             fontSize:wp("4%")
             
            }}>
            Conditions of Use
          </Text>
          <Text style={{color: '#377fbb', fontSize:wp("4%") }}>
            Privacy Notice
          </Text>
          <Text style={{color: '#377fbb', fontSize:wp("4%") }}>
            Help
          </Text>
          <Text style={{color: '#377fbb', fontSize:wp("4%") }}>
            {"     "}
          </Text>
          <View
            style={{flexDirection: 'row', alignItems: 'center',justifyContent:"flex-end",width:"100%",marginTop:hp("1.5%")}}>
            <FontAwesomeI
              name="copyright"
              size={8}
              color="#797979"
              style={{}}
            />
            <View style={{marginLeft: 5}} />
            <Text style={{color: '#797979', fontSize: 8, marginRight: 5}}>
              1996-2020, Amazon.com, inc. or affiliates
            </Text>
          </View>
        </Footer>
      </>
    );
  }
}
