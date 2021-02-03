import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

import Annoucement from './Annoucement/Annoucement';
import Annoucement_Profile from './Annoucement/Annoucement_Profile';
import Annoucement_Create from './Annoucement/Annoucement_Create';

import Home_Employee from './Home/Home_Employee';
import Notification from './Notification/Notification'
import Reccommend_Jobs from './Reccommend_Jobs';

import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer} from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs';
import AntIcon from "react-native-vector-icons/AntDesign";
import { FontAwesome,Feather } from '@expo/vector-icons'; 


const  state = { numberNotify: 1 };


const stackPage1 = createStackNavigator({
  Page1Screen:{screen:Home_Employee,navigationOptions: {
  headerShown:false}},
});

const stackPage2 = createStackNavigator({
  Page2Screen:{screen:Reccommend_Jobs,navigationOptions: {
    headerShown:false}},
});

const stackPage3 = createStackNavigator({
  Page3Screen:{screen:Annoucement,navigationOptions: {
    headerShown:false}},
});

const stackPage4 = createStackNavigator({
  Page4Screen:{screen:Notification,navigationOptions: {
    headerShown:false}},
},);

const stackPage5 = createStackNavigator({
  Page4Screen:{screen:Annoucement_Profile,navigationOptions: {
    headerShown:false}},
},);

const navigator = createBottomTabNavigator({
  buttomPage1:{screen:stackPage1,navigationOptions: {
  title: 'Home'}},
  buttomPage2:{screen:stackPage2,navigationOptions: {
  title: 'Recommend'}},
  buttomPage3:{screen:stackPage3,navigationOptions: {
  title: 'Annoucement'}},
  buttomPage4:{screen:stackPage4,navigationOptions: {
  title: 'Notification'}},

},
{
  defaultNavigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, tintColor }) => {
      const { routeName } = navigation.state;
      if (routeName == 'buttomPage1') {
        return <AntIcon name="home" color={tintColor} size={18} />;
      }
      else if(routeName == 'buttomPage2'){
        return <Feather name="users" color={tintColor} size={18} />;
      }
      else if(routeName == 'buttomPage3'){
        return <FontAwesome name="pencil-square-o" size={18} color={tintColor}/>;
      }
      else if(routeName == 'buttomPage4'){
        return state.numberNotify > 0 ? 
              <View style={{flex:1}}>
                <View style={{flex:1, backgroundColor:'transpareny', justifyContent:'center', width:20}}>
                  <FontAwesome name="bell" size={18} color={tintColor} />
                </View>
                <View style={{flex:1, backgroundColor:'transparent', position:"absolute", justifyContent:'çenter', marginLeft:9, marginTop:2}}>
                  <FontAwesome name="circle" size={14} color="red" />
                </View>
              </View> :
              <View style={{flex:1}}>
                <View style={{flex:1, backgroundColor:'transparent', justifyContent:'center', width:20}}>
                  <FontAwesome name="bell" size={18} color={tintColor} />
                </View>
              </View>
              ;}
            },
          }),

  tabBarOptions: {
    showLabel: true,
    tabStyle:{alignItems:'center',justifyContent:'center'},
    activeTintColor: 'white',
    activeBackgroundColor: '#720DBA',
    inactiveTintColor: 'black',
    labelStyle:{fontSize:14},
    style: {
      backgroundColor: '#FFFFFF',
    },
  }

})

export default createAppContainer(navigator);
