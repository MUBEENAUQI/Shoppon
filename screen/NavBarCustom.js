import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Drawer, Text} from 'react-native-paper';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';

import Icon from 'react-native-vector-icons/Ionicons';
export function NavBarCustom(props) {
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView {...props}>
        <Drawer.Section style={{flex: 1}}>
          <DrawerItem
            style={{
              backgroundColor: '#ffc340',
              fontFamily: 'notoserif',
              fontSize: 20,
              height: 65,
              fontWeight: 'bold',
              marginLeft: -5,
              marginRight: -10,
              marginTop: -4,
            }}
            label="Hello. Sign In"
            onPress={() => {
              props.navigation.navigate('Hello. Sign In');
            }}
          />
          <DrawerItem
            label="Home"
            onPress={() => {
              props.navigation.navigate('Home');
            }}
          />
          <DrawerItem
            label="Shop by Category"
            onPress={() => null
            //   {
            //   props.navigation.navigate('Shop by Category');
            // }
          }
          />
        </Drawer.Section>
        <Drawer.Section style={{flex: 1}}>
          <DrawerItem
            label="Your Orders"
            onPress={() => null}
         // onPress={() => {
            //   props.navigation.navigate('Your Orders');
            // }}
          />
          <DrawerItem
            label="Buy Again"
            // onPress={() => {
            //   props.navigation.navigate('Buy Again');
            // }}
            onPress={() => null}
          />
          <DrawerItem
            label="Your Wish List"
            // onPress={() => {
            //   props.navigation.navigate('Your Wish List');
            // }}
            onPress={() => null}
          />
          <DrawerItem
            label="Your Account"
            // onPress={() => {
            //   props.navigation.navigate('Your Account');
            // }}
            onPress={() => null}
          />

          <DrawerItem
            label="Try Prime"
            // onPress={() => {
            //   props.navigation.navigate('Try Prime');
            // }}
          />

          <DrawerItem
            label="Programs and features           >"
            // onPress={() => {
            //   props.navigation.navigate('Programs and features');
            // }}
            onPress={() => null}
          />
          <DrawerItem
            label="Fun Zone"
            // onPress={() => {
            //   props.navigation.navigate('Fun Zone');
            // }}
            onPress={() => null}
          />
        </Drawer.Section>
        <Drawer.Section style={{flex: 1}}>
          <DrawerItem
            label="Language A/क"
            // onPress={() => {
            //   props.navigation.navigate('Language A/क');
            // }}
            onPress={() => null}
          />
          <DrawerItem
            label="Your Notifications"
            // onPress={() => {
            //   props.navigation.navigate('Your Notifications');
            // }}
            onPress={() => null}
          />
          <DrawerItem
            label="Settings                                    >"
            // onPress={() => {
            //   props.navigation.navigate('Settings ');
            // }}
            onPress={() => null}
          />
          <DrawerItem
            label="Customer Service"
            // onPress={() => {
            //   props.navigation.navigate('Customer Service');
            // }}
            onPress={() => null}
          />
        </Drawer.Section>
      </DrawerContentScrollView>
    </View>
  );
}
