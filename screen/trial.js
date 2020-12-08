{/* <View
style={{
  marginBottom: 5,

  flexDirection: 'column',
  backgroundColor: 'white',
}}>
<View style={{flexDirection: 'row'}}>
  <Text
    style={{
      fontSize: 20,
      marginBottom: 5,
      marginLeft: 17,
      marginTop: 5,
      fontWeight: '400',
    }}>
    Alexa enabled devices & more
  </Text>
</View>
<View
  style={{
    width: '100%',

    flexWrap: 'wrap',
    marginBottom: 5,
    flexDirection: 'row',
  }}>
  <View style={{flexDirection: 'column'}}>
    <Image
      style={{
        flex: 1,
        height: 160,
        width: 160,
        margin: 5,
        marginBottom: 3,
        marginLeft: 17,
      }}
      source={require('../assets/box6.1.jpeg')}
    />
    <Text style={{marginLeft: 17}}>Echo Dot</Text>
  </View>
  <View style={{flexDirection: 'column'}}>
    <Image
      style={{
        flex: 1,
        height: 160,
        width: 160,
        margin: 5,
        marginBottom: 3,
        marginLeft: 8,
      }}
      source={require('../assets/box6.2.jpeg')}
    />
    <Text style={{marginLeft: 8}}>Fire TV Stick</Text>
  </View>
  <View style={{flexDirection: 'column'}}>
    <Image
      style={{
        flex: 1,
        height: 160,
        width: 160,
        margin: 5,
        marginBottom: 3,
        marginLeft: 17,
      }}
      source={require('../assets/box6.3.jpeg')}
    />
    <Text style={{marginLeft: 17}}>Echo Show 5</Text>
  </View>
  <View style={{flexDirection: 'column'}}>
    <Image
      style={{
        flex: 1,
        height: 160,
        width: 160,
        margin: 5,
        marginBottom: 3,
        marginLeft: 8,
      }}
      source={require('../assets/box6.4.jpeg')}
    />
    <Text style={{marginLeft: 8}}>Kindle E-readers</Text>
  </View>
</View>
<View style={{flexDirection: 'row', height: 45}}>
  <Text
    onPress={() =>
      this.props.navigation.navigate('createaccount')
    }
    style={{
      marginTop: 13,
      fontSize: 16,
      marginLeft: 10,
      color: '#377fbb',
    }}>
    See more
  </Text>
  <IonIcon
    name="ios-arrow-forward"
    size={13}
    color="#377fbb"
    style={{
      marginTop: 15,
      marginLeft: 218,
    }}
  />
</View>
</View>

<View
style={{
  marginBottom: 5,

  flexDirection: 'column',
  backgroundColor: 'white',
}}>
<View style={{flexDirection: 'row'}}>
  <Text
    style={{
      fontSize: 20,
      marginBottom: 5,
      marginLeft: 17,
      marginTop: 5,
      fontWeight: '400',
    }}>
    Starting
  </Text>
  <FontAwesomeI
    name="rupee"
    size={16}
    color="black"
    style={{marginTop: 10, marginLeft: 7}}
  />
  <Text
    style={{
      fontSize: 20,
      marginBottom: 5,
      marginLeft: 2,
      marginTop: 5,
      fontWeight: '400',
    }}>
    249 | Clothing, footwear & more
  </Text>
</View>
<View
  style={{
    width: '100%',

    flexWrap: 'wrap',
    marginBottom: 5,
    flexDirection: 'row',
  }}>
  <View style={{flexDirection: 'column'}}>
    <Image
      style={{
        flex: 1,
        height: 160,
        width: 160,
        margin: 5,
        marginBottom: 3,
        marginLeft: 17,
      }}
      source={require('../assets/box4.1.jpeg')}
    />
    <Text style={{marginLeft: 17}}>Women's apparel</Text>
  </View>
  <View style={{flexDirection: 'column'}}>
    <Image
      style={{
        flex: 1,
        height: 160,
        width: 160,
        margin: 5,
        marginBottom: 3,
        marginLeft: 8,
      }}
      source={require('../assets/box4.2.jpeg')}
    />
    <Text style={{marginLeft: 8}}>Men's apparel</Text>
  </View>
  <View style={{flexDirection: 'column'}}>
    <Image
      style={{
        flex: 1,
        height: 160,
        width: 160,
        margin: 5,
        marginBottom: 3,
        marginLeft: 17,
      }}
      source={require('../assets/box4.3.jpeg')}
    />
    <Text style={{marginLeft: 17}}>Shoes & handbags</Text>
  </View>
  <View style={{flexDirection: 'column'}}>
    <Image
      style={{
        flex: 1,
        height: 160,
        width: 160,
        margin: 5,
        marginBottom: 3,
        marginLeft: 8,
      }}
      source={require('../assets/box4.4.jpeg')}
    />
    <Text style={{marginLeft: 8, marginLeft: -2}}>
      Save more with coupons
    </Text>
  </View>
</View>
<View style={{flexDirection: 'row'}}>
  <Text
    onPress={() =>
      this.props.navigation.navigate('createaccount')
    }
    style={{
      marginTop: 13,
      fontSize: 16,
      marginLeft: 10,
      color: '#377fbb',
    }}>
    See more
  </Text>
  <IonIcon
    name="ios-arrow-forward"
    size={13}
    color="#377fbb"
    style={{
      marginTop: 15,
      marginLeft: 218,
    }}
  />
</View>
</View>

<View
style={{
  marginBottom: 5,

  flexDirection: 'column',
  backgroundColor: 'white',
}}>
<View>
  <Text
    style={{
      fontSize: 20,
      marginBottom: 5,
      marginLeft: 5,
      marginTop: 5,
      fontWeight: '350',
    }}>
    Join Prime to enjoy benefits
  </Text>
</View>
<View
  style={{
    width: '100%',
paddingHorizontal:10,
    flexWrap: 'wrap',
    marginBottom: 5,
    flexDirection: 'row',
  }}>
  <View style={{flexDirection: 'column'}}>
    <Image
      style={{
        height: wp("100%")/2-15,
        width: wp("100%")/2-15,
        marginBottom: 3,
      }}
      source={require('../assets/box3.1.jpeg')}
    />
    <Text style={{marginLeft: 20}}>Gaming with Prime</Text>
  </View>
  <View style={{flexDirection: 'column'}}>
    <Image
      style={{
        height: wp("100%")/2-15,
        width: wp("100%")/2-15,
        marginBottom: 3,marginLeft:3
      }}
      source={require('../assets/box3.2.jpeg')}
    />
    <Text style={{marginLeft: 8}}>Prime Video</Text>
  </View>
  <View style={{flexDirection: 'column'}}>
    <Image
      style={{
        height: wp("100%")/2-15,
        width: wp("100%")/2-15,
        marginBottom: 3,
      }}
      source={require('../assets/box3.3.jpeg')}
    />
    <Text style={{marginLeft: 17}}>Prime Music</Text>
  </View>
  <View style={{flexDirection: 'column'}}>
    <Image
      style={{
        height: wp("100%")/2-15,
        width: wp("100%")/2-15,
        marginBottom: 3,marginLeft:3
      }}
      source={require('../assets/box3.4.jpeg')}
    />
    <Text style={{marginLeft: 8}}>FREE delivery</Text>
  </View>
</View>
<View style={{flexDirection: 'row', height: 45}}>
  <Text
    onPress={() =>
      this.props.navigation.navigate('createaccount')
    }
    style={{
      marginTop: 13,
      fontSize: 16,
      marginLeft: 10,
      color: '#377fbb',
    }}>
    See more
  </Text>
  <IonIcon
    name="ios-arrow-forward"
    size={13}
    color="#377fbb"
    style={{
      marginTop: 15,
      marginLeft: 218,
    }}
  />
</View>
</View>

<View style={{marginTop: -5}}>
<Card>
  <CardItem>
    <Body>
      <Text style={{fontSize: 20, marginLeft: -1}}>
        Echo dot with Alexa | Listen to music, news & more
      </Text>
    </Body>
  </CardItem>
  <CardItem cardBody style={{padding: 8}}>
    <Image
      source={require('../assets/big2.jpeg')}
      style={{
        height: 360,
        width: null,
        flex: 1,

        marginBottom: 10,
      }}
    />
  </CardItem>
</Card>
</View> */}