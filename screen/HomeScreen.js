import * as React from 'react';
import {Component} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Image,
  TouchableOpacity,
  StyleSheet,TouchableHighlight
} from 'react-native';
import {DrawerActions} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import {
  Card,
  Left,
  Body,
  cardBody,
  CardItem,
  Button,
  Input,
  Container,
  Content,
} from 'native-base';
import Swiper from 'react-native-swiper';
import Entypo from 'react-native-vector-icons/Entypo';
import FeatherI from 'react-native-vector-icons/Feather';
import IonIcon from 'react-native-vector-icons/Ionicons';
import FontAwesomeI from 'react-native-vector-icons/FontAwesome';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
export default class HomeScreen extends Component {
  render() {
    return (
      <>
       <StatusBar backgroundColor="#f2982f" barStyle="light-content" />

        <SafeAreaView >
          <ScrollView
            style={{backgroundColor: '#fff',}}
            contentInsetAdjustmentBehavior="automatic">
            <Container style={{backgroundColor:"white",height:"100%"}}>
            <View style={{height:31,backgroundColor:"#f2982f"}}/>
              <View>
                <LinearGradient
                  colors={['#f2982f', '#ffc340']}
                  start={{x: 0, y: 1}}
                  end={{x: 1, y: 1}}>
                  <View style={{height: hp("14%"), flexDirection: 'column'}}>
                    <View style={{flexDirection: 'row', height:hp("7%"),paddingTop:hp("2%"),paddingHorizontal:wp("4%"),justifyContent:"space-between"}}>
                      <TouchableOpacity
                        onPress={() =>
                          this.props.navigation.dispatch(
                            DrawerActions.toggleDrawer(),
                          )
                        }>
                        <Entypo
                          name="menu"
                          size={wp("7%")}
                          color="black"
                          style={{
                            
                          }}
                        />
                      </TouchableOpacity>
                      {/* <Text style={{fontWeight:"bold",fontSize:hp("3%")}}>Shoppon Logo</Text> */}
                      <Image
               style={{height:hp("5%"),resizeMode:"contain",marginTop:-5}}
                source={require('../assets/logo.png')}
              />

                      <Entypo
                        name="shopping-cart"
                        size={wp("6%")}
                        color="black"
                        style={{
                         
                        }}
                      />
                    </View>


                    <View
                      style={{
                        backgroundColor: '#fff',
                        width: '95%',
                        height: hp("4.7%"),
                        marginHorizontal: wp("2.5%"),
                        marginTop: 5,
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: 5,
                        paddingHorizontal: 10,
                        borderColor: '1px solid grey',
                        flexDirection: 'row',
                      }}>
                      <EvilIcons name="search" size={wp("6.5%")} color="#666666" />
                      <Input
                        style={{fontSize: 20, marginLeft: 5}}
                        placeholder="Search"
                      />
                      <Text
                        style={{
                          color: '#acacac',
                          marginRight: 6,
                          fontWeight: '400',
                          fontSize: wp("7%"),marginTop:-2
                        }}>
                        |
                      </Text>
                      <FeatherI name="camera" size={wp("5.5%")} color="grey" />
                    </View>
                  </View>
                </LinearGradient>


                
              </View>
              <Content style={{backgroundColor: '#ffe49c'}}>
                <View
                  style={{
                    flexDirection: 'row',
                    height: hp("6%"),
                    backgroundColor: '#ffebb5',
                    alignItems: 'center',
                  }}>
                  <Entypo
                    name="location-pin"
                    size={21}
                    color="black"
                    style={{marginLeft: 15}}
                  />
                  <Text style={{marginLeft: 5, fontSize: hp("2%")}}>
                    Select a location to see product availability
                  </Text>
                </View>

                <View
                  style={{
                    flexDirection: 'row',
                    height: hp("10%"),
                    width: '100%',
                    marginTop: 3,backgroundColor:"white"
                  }}>
                  <Image
                    style={{flex: 1,height: hp("9.5%"), width: wp("100%")/5.5,resizeMode:"contain"}}
                    source={require('../assets/menu0.jpeg')}
                  />
                  <Image
                    style={{flex: 1,height: hp("9.5%"),width: wp("100%")/5.5,resizeMode:"contain"}}
                    source={require('../assets/menu1.jpeg')}
                  />
                  <Image
                    style={{flex: 1, height: hp("9.5%"), width: wp("100%")/5.5,resizeMode:"contain"}}
                    source={require('../assets/menu2.jpeg')}
                  />
                  <Image
                    style={{flex: 1,height: hp("9.5%"),width: wp("100%")/5.5,resizeMode:"contain"}}
                    source={require('../assets/menu3.jpeg')}
                  />
                  <Image
                    style={{flex: 1, height: hp("9.5%"), width: wp("100%")/5.5,resizeMode:"contain"}}
                    source={require('../assets/menu4.jpeg')}
                  />
                </View>
                <View
                  style={{
                    height: hp("20%"),

                    marginTop: 4,
                  }}>
                  <Swiper
                    autoplay={true}
                    showsPagination={false}
                    style={{
                      height: hp("20%"),
                    }}>
                    <View style={{flex: 1}}>
                      <Image
                        style={{flex: 1, height: hp("20%"), width: wp("100%"),resizeMode:"cover"}}
                        source={require('../assets/swipe1.jpeg')}
                      />
                    </View>
                    <View style={{flex: 1}}>
                      <Image
                         style={{flex: 1, height: hp("20%"), width: wp("100%"),resizeMode:"cover"}}
                        source={require('../assets/swipe2.jpeg')}
                      />
                    </View>
                    <View style={{flex: 1}}>
                      <Image
                         style={{flex: 1, height: hp("20%"), width: wp("100%"),resizeMode:"cover"}}
                        source={require('../assets/swipe3.jpeg')}
                      />
                    </View>
                    <View style={{flex: 1}}>
                      <Image
                         style={{flex: 1, height: hp("20%"), width: wp("100%"),resizeMode:"cover"}}
                        source={require('../assets/swipe4.jpeg')}
                      />
                    </View>
                    {/* <View style={{flex: 1}}>
                      <Image
                        style={{flex: 1, height: hp("20%"), width: wp("100%"),resizeMode:"cover"}}
                        source={require('../assets/swipe5.jpeg')}
                      />
                    </View> */}
                    <View style={{flex: 1}}>
                      <Image
                         style={{flex: 1, height: hp("20%"), width: wp("100%"),resizeMode:"cover"}}
                        source={require('../assets/swipe6.jpeg')}
                      />
                    </View>


                    
                    <View style={{flex: 1}}>
                      <Image
                         style={{flex: 1, height: hp("20%"), width: wp("100%"),resizeMode:"cover"}}
                        source={require('../assets/bb.jpg')}
                      />
                    </View>
                    <View style={{flex: 1}}>
                      <Image
                         style={{flex: 1, height: hp("20%"), width: wp("100%"),resizeMode:"cover"}}
                        source={require('../assets/aa.jpg')}
                      />
                    </View>
                    <View style={{flex: 1}}>
                      <Image
                         style={{flex: 1, height: hp("20%"), width: wp("100%"),resizeMode:"cover"}}
                        source={require('../assets/swipe7.jpeg')}
                      />
                    </View>
                    <View style={{flex: 1}}>
                      <Image
                         style={{flex: 1, height: hp("20%"), width: wp("100%"),resizeMode:"cover"}}
                        source={require('../assets/swipe8.jpeg')}
                      />
                    </View>
                  </Swiper>
                </View>
                <View
                  style={{
                    flexDirection: 'column',
                    height: hp("15%"),
                    width: '100%',
                    marginTop: hp("1%"),
                    backgroundColor: 'white',
                  }}>
                  <Text
                    style={{
                     // fontFamily: 'notoserif',
                      fontSize: wp("5%"),
                      marginLeft: 6,
                      marginTop: hp(".6"),
                    }}>
                    Sign in for the best experience
                  </Text>
                  <View style={{marginTop: hp("1.5%"), width: '100%',paddingHorizontal:"2.5%"}}>
              <TouchableHighlight
                style={{
                  backgroundColor: '#ffc340',
                  paddingVertical: 9,
                  borderRadius: 5,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderWidth: 1,
                  borderColor: '#dfdecb',
                }}
                underlayColor="#f2982f"
                onPress={() =>
                  this.props.navigation.navigate('Hello. Sign In')
                }>
                <Text>  SignIn </Text>
              </TouchableHighlight>
            </View>
                    
                  <View style={{flexDirection: 'row',justifyContent:"space-between",paddingHorizontal:10}}>
                    <Text
                      onPress={() =>
                        this.props.navigation.navigate('Create account')
                      }
                      style={{
                        marginTop:hp("1.1%"),
                        fontSize: hp("2%"),
                        //marginLeft: 10,
                        color: '#377fbb',
                      }}>
                      Create an account
                    </Text>
                    <MaterialIcons
                      name="keyboard-arrow-right"
                      size={wp("5.5%")}
                      color="#377fbb"
                      style={{
                        marginTop:hp("1.1%"),
                        
                      }}
                    />
                  </View>
                </View>
                <ScrollView
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                  pagingEnabled={false}>
                  <View
                    style={{
                      flexDirection: 'row',
                      height: 125,
                      marginTop: 5,
                    }}>
                    {/* <Image
                      style={{height: 120, width: 95}}
                      source={require('../assets/menu11.jpeg')}
                    /> */}
                    <Image
                      style={{height: 120, width: 95}}
                      source={require('../assets/menu12.jpeg')}
                    />
                    <Image
                      style={{height: 120, width: 95}}
                      source={require('../assets/menu13.jpeg')}
                    />
                    <Image
                      style={{height: 120, width: 95}}
                      source={require('../assets/menu14.jpeg')}
                    />
                    <Image
                      style={{height: 120, width: 95}}
                      source={require('../assets/menu15.jpeg')}
                    />
                    <Image
                      style={{height: 120, width: 95}}
                      source={require('../assets/menu16.jpeg')}
                    />
                  </View>
                </ScrollView>



           
                <View style={{marginTop: -5}}>
                  <Card>
                    <CardItem>
                      <Body>
                        <Text style={{fontSize: hp("3%"), marginLeft: -4}}>
                          Up to 50% off| Mobile mounts, selfie sticks & more
                        </Text>
                      </Body>
                    </CardItem>
                    <CardItem cardBody style={{paddingHorizontal: wp("2.5%")}}>
                      <Image
                        source={require('../assets/big5.jpeg')}
                        style={{
                          height:hp("50%"),
                          width:wp("100%"),
                          flex: 1,
                          resizeMode:"cover",
                        marginTop:-hp("1%"),marginBottom:hp("1.5%")
                        }}
                      />
                    </CardItem>
                  </Card>
                </View>



               

                <ScrollView
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                  pagingEnabled={false}>
                  <View
                    style={{
                      flexDirection: 'column',
                      height: hp("25%"),
                      backgroundColor: '#fff1cc',
                    }}>
                    <View>
                      <Text style={{fontSize: hp("2.5%"), margin: 3, marginLeft: 10}}>
                        Shop from top categories
                      </Text>
                    </View>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-around',
                        marginTop: hp("1%"),marginHorizontal:wp("2%"),paddingBottom:hp("1%")
                      }}>
                    
                      <View style={{flexDirection: 'column', width: wp("26%")}}>
                        <Image
                          style={{height: hp("15%"), width: wp("23%")}}
                          source={require('../assets/menu22.jpeg')}
                        />
                        <Text style={{fontSize:hp("1.5%"),marginVertical:hp(".5%")}}>Mobiles and accessories</Text>
                      </View>
                      <View style={{flexDirection: 'column', width: wp("26%")}}>
                        <Image
                         style={{height: hp("15%"), width: wp("23%")}}
                          source={require('../assets/menu23.jpeg')}
                        />
                        <Text style={{fontSize:hp("1.5%"),marginVertical:hp(".5%")}}>Electronics and accessories</Text>
                      </View>
                      <View style={{flexDirection: 'column', width: wp("26%")}}>
                        <Image
                         style={{height: hp("15%"), width: wp("23%")}}
                          source={require('../assets/menu24.jpeg')}
                        />
                        <Text style={{fontSize:hp("1.5%"),marginVertical:hp(".5%")}}>ACs, Furniture and more</Text>
                      </View>
                      <View style={{flexDirection: 'column', width: wp("26%")}}>
                        <Image
                           style={{height: hp("15%"), width: wp("23%")}}
                          source={require('../assets/menu25.jpeg')}
                        />
                        <Text style={{fontSize:hp("1.5%"),marginVertical:hp(".5%")}}>Home and Kitchen appliances</Text>
                      </View>
                      <View style={{flexDirection: 'column', width: wp("26%")}}>
                        <Image
                           style={{height: hp("15%"), width: wp("23%")}}
                          source={require('../assets/menu26.jpeg')}
                        />
                        <Text style={{fontSize:hp("1.5%"),marginVertical:hp(".5%")}}>Toys, baby products & more</Text>
                      </View>
                      <View style={{flexDirection: 'column', width: wp("26%")}}>
                        <Image
                          style={{height: hp("15%"), width: wp("23%")}}
                          source={require('../assets/menu27.jpeg')}
                        />
                        <Text style={{fontSize:hp("1.5%"),marginVertical:hp(".5%")}}>Books, gaming & more</Text>
                      </View>
                      <View style={{flexDirection: 'column', width: wp("26%")}}>
                        <Image
                           style={{height: hp("15%"), width: wp("23%")}}
                          source={require('../assets/menu28.jpeg')}
                        />
                        <Text style={{fontSize:hp("1.5%"),marginVertical:hp(".5%")}}>Smart TVs</Text>
                      </View>
                      <View style={{flexDirection: 'column', width: wp("26%")}}>
                        <Image
                          style={{height: hp("15%"), width: wp("23%")}}
                          source={require('../assets/menu29.jpeg')}
                        />
                        <Text style={{fontSize:hp("1.5%"),marginVertical:hp(".5%")}}>Watches, bags & more</Text>
                      </View>
                      <View style={{flexDirection: 'column', width: wp("26%")}}>
                        <Image
                          style={{height: hp("15%"), width: wp("23%")}}
                          source={require('../assets/menu20.jpeg')}
                        />
                        <Text style={{fontSize:hp("1.5%"),marginVertical:hp(".5%")}}>Alexa devices & more</Text>
                      </View>
                    </View>
                  </View>
                </ScrollView>




                
                


                <View
                  style={{
                    paddingVertical:hp(".6%"),
                    flexDirection: 'column',
                    backgroundColor: 'white',marginVertical:hp("1.5%"),
                  }}>
                  <View>
                    <Text
                      style={{
                        fontSize:hp("2.5%"),
                       paddingHorizontal:wp("2.5%"),
                       // marginTop: hp("1%"),
                        fontWeight: '400',paddingBottom:hp("1%")
                      }}>
                      Home storage and organization products
                    </Text>
                  </View>
                  <View
                    style={{
                      width: '100%',
                      paddingHorizontal:wp("3"),
                      flexWrap: 'wrap',
                      marginBottom: 5,
                      flexDirection: 'row',justifyContent:"space-between"
                    }}>
                    <View style={{flexDirection: 'column'}}>
                      <Image
                        style={{
                          height: wp("100%")/2-15,
                          width: wp("100%")/2-15,
                          marginBottom: 3,
                        }}
                        source={require('../assets/box2.1.jpeg')}
                      />
                      <Text style={{fontSize:wp("3.3%"),marginBottom:hp("1%")}}>Laundry organization</Text>
                    </View>
                    <View style={{flexDirection: 'column'}}>
                      <Image
                        style={{
                          height: wp("100%")/2-15,
                          width: wp("100%")/2-15,
                          marginBottom: 3,marginLeft:3
                        }}
                        source={require('../assets/box2.2.jpeg')}
                      />
                      <Text  style={{fontSize:wp("3.3%"),marginBottom:hp("1%"),marginLeft:3}}>Closet organisation</Text>
                    </View>
                    <View style={{flexDirection: 'column'}}>
                      <Image
                        style={{
                          height: wp("100%")/2-15,
                          width: wp("100%")/2-15,
                          marginBottom: 3,
                        }}
                        source={require('../assets/box2.3.jpeg')}
                      />
                      <Text  style={{fontSize:wp("3.3%"),marginBottom:hp("1%")}}>Dustinbins</Text>
                    </View>
                    <View style={{flexDirection: 'column'}}>
                      <Image
                        style={{
                          height: wp("100%")/2-15,
                          width: wp("100%")/2-15,
                          marginBottom: 3,marginLeft:3
                        }}
                        source={require('../assets/box2.4.jpeg')}
                      />
                      <Text  style={{fontSize:wp("3.3%"),marginBottom:hp("1%"),marginLeft:3}}>Storage units</Text>
                    </View>
                  </View>
                  <View style={{flexDirection: 'row',justifyContent:"space-between",paddingHorizontal:10,marginTop: hp("1%"),}}>
                    <Text
                      onPress={() =>null
                        
                      }
                      style={{
                      
                        fontSize: hp("2.2%"),
                        
                        color: '#377fbb',
                      }}>
                      See More
                    </Text>
                    <MaterialIcons
                      name="keyboard-arrow-right"
                      size={wp("5.5%")}
                      color="#377fbb"
                      style={{
                        
                        
                      }}
                    />
                  </View>
                </View>

               
                <View style={{marginTop: -5}}>
                  <Card>
                    <CardItem>
                      <Body>
                        <Text style={{fontSize: hp("3%"), marginLeft: -4}}>
                        Customers' Most Loved Fashion | 4 star+ rated, 100+
                          reviews
                        </Text>
                      </Body>
                    </CardItem>
                    <CardItem cardBody style={{paddingHorizontal: wp("2.5%")}}>
                      <Image
                       source={require('../assets/big3.jpeg')}
                        style={{
                          height:hp("50%"),
                          width:wp("100%"),
                          flex: 1,
                          resizeMode:"cover",
                        marginTop:-hp("1%"),marginBottom:hp("1.5%")
                        }}
                      />
                    </CardItem>
                  </Card>
                </View>
               






                


                <View
                  style={{
                    paddingVertical:hp(".6%"),
                    flexDirection: 'column',
                    backgroundColor: 'white',marginVertical:hp("1.5%"),
                  }}>
                  <View>
                    <Text
                      style={{
                        fontSize:hp("2.5%"),
                       paddingHorizontal:wp("2.5%"),
                       // marginTop: hp("1%"),
                        fontWeight: '400',paddingBottom:hp("1%")
                      }}>
                      All your academics needs at one place
                    </Text>
                  </View>
                  <View
                    style={{
                      width: '100%',
                      paddingHorizontal:wp("3"),
                      flexWrap: 'wrap',
                      marginBottom: 5,
                      flexDirection: 'row',justifyContent:"space-between"
                    }}>
                    <View style={{flexDirection: 'column'}}>
                      <Image
                        style={{
                          height: wp("100%")/2-15,
                          width: wp("100%")/2-15,
                          marginBottom: 3,
                        }}
                        source={require('../assets/box5.1.jpeg')}
                      />
                      <Text style={{fontSize:wp("3.3%"),marginBottom:hp("1%")}}>College Textbooks</Text>
                    </View>
                    <View style={{flexDirection: 'column'}}>
                      <Image
                        style={{
                          height: wp("100%")/2-15,
                          width: wp("100%")/2-15,
                          marginBottom: 3,marginLeft:3
                        }}
                        source={require('../assets/box5.2.jpeg')}
                      />
                      <Text  style={{fontSize:wp("3.3%"),marginBottom:hp("1%"),marginLeft:3}}>Exam prep books</Text>
                    </View>
                    <View style={{flexDirection: 'column'}}>
                      <Image
                        style={{
                          height: wp("100%")/2-15,
                          width: wp("100%")/2-15,
                          marginBottom: 3,
                        }}
                        source={require('../assets/box5.3.jpeg')}
                      />
                      <Text  style={{fontSize:wp("3.3%"),marginBottom:hp("1%")}}>Student supplies</Text>
                    </View>
                    <View style={{flexDirection: 'column'}}>
                      <Image
                        style={{
                          height: wp("100%")/2-15,
                          width: wp("100%")/2-15,
                          marginBottom: 3,marginLeft:3
                        }}
                        source={require('../assets/box5.4.jpeg')}
                      />
                      <Text  style={{fontSize:wp("3.3%"),marginBottom:hp("1%"),marginLeft:3}}>Student laptops</Text>
                    </View>
                  </View>
                  <View style={{flexDirection: 'row',justifyContent:"space-between",paddingHorizontal:10,marginTop: hp("1%"),}}>
                    <Text
                      onPress={() =>null
                        
                      }
                      style={{
                      
                        fontSize: hp("2.2%"),
                        
                        color: '#377fbb',
                      }}>
                      See More
                    </Text>
                    <MaterialIcons
                      name="keyboard-arrow-right"
                      size={wp("5.5%")}
                      color="#377fbb"
                      style={{
                        
                        
                      }}
                    />
                  </View>
                </View>




                  {/* <View style={{marginTop: 10}}>
                  <Card>
                    <CardItem>
                      <Body>
                        <Text style={{fontSize: 20, marginLeft: -1}}>
                          Household essentials | Amazon Brands & more
                        </Text>
                      </Body>
                    </CardItem>
                    <CardItem cardBody style={{padding: 8}}>
                      <Image
                        source={require('../assets/householdimg1.jpeg')}
                        style={{
                          height: 360,
                          width: null,
                          flex: 1,

                          marginBottom: 10,
                        }}
                      />
                    </CardItem>
                  </Card>
                </View>
                <View
                  style={{
                    marginBottom: 4,

                    flexDirection: 'column',
                    backgroundColor: 'white',
                  }}>
                  <View>
                    <Text
                      style={{
                        fontSize: 20,
                        marginBottom: 5,
                        marginLeft: 17,
                        marginTop: 5,
                        fontWeight: '350',
                      }}>
                      Boost your device performance with computer upgrade
                    </Text>
                  </View>
                  <View
                    style={{
                      width: '100%',

                      flexWrap: 'wrap',
                      marginBottom: 5,
                      flexDirection: 'row',paddingHorizontal:wp("3.4%")
                    }}>
                    <View style={{flexDirection: 'column'}}>
                      <Image
                        style={{
                          flex: 1,
                          height: wp("100%")/2-15,
                          width: wp("100%")/2-15,
                          resizeMode:"contain",
                          marginBottom: 3,
                         
                        }}
                        source={require('../assets/box1.1.jpeg')}
                      />
                      <Text style={{marginLeft: 17}}>SSD</Text>
                    </View>
                    <View style={{flexDirection: 'column'}}>
                      <Image
                        style={{
                          flex: 1,
                          height: wp("100%")/2-15,
                          width: wp("100%")/2-15,
                          resizeMode:"contain",
                          marginBottom: 3,
                         
                        }}
                        source={require('../assets/box1.2.jpeg')}
                      />
                      <Text style={{marginLeft: 8}}>RAM</Text>
                    </View>
                    <View style={{flexDirection: 'column'}}>
                      <Image
                        style={{
                          flex: 1,
                          height: wp("100%")/2-15,
                          width: wp("100%")/2-15,
                          marginBottom: 3,
                          
                        }}
                        source={require('../assets/box1.3.jpeg')}
                      />
                      <Text style={{marginLeft: 17}}>Graphics card</Text>
                    </View>
                    <View style={{flexDirection: 'column'}}>
                      <Image
                        style={{
                          flex: 1,
                          height: wp("100%")/2-15,
                          width: wp("100%")/2-15,
                          marginBottom: 3,
                          marginLeft:2
                        }}
                        source={require('../assets/box1.4.jpeg')}
                      />
                      <Text style={{marginLeft: 8}}>Explore All</Text>
                    </View>
                  </View>
                </View> */}
             
              </Content>
            </Container>
          </ScrollView>
        </SafeAreaView>
      </>
    );
  }
}
