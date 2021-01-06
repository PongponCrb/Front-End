import * as React from 'react';
import { Button, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from './Component/HomePage.js'
import Employer_Login from './Component/Employer_Login.js'
import Employee_Login from './Component/Employee_Login.js'
import Forgot_Password from './Component/Forgot_Password.js'
import Create_Account from './Component/Create_Account.js'
import Reset_Password from './Component/Reset_Password.js'
import Home_Employee from './Component/Home_Employee.js'
import Home_Employer from './Component/Home_Employer.js'
import Reccommend_Jobs from './Component/Reccommend_Jobs.js'
import Annoucement from './Component/Annoucement.js'
import Bookmark_Employee from './Component/Bookmark_Employee.js'
import Profile_Employee from './Component/Profile_Employee.js'
import Education from './Component/Education.js'
import Education_Edit from './Component/Education_Edit.js'
import Interesting_Edit from './Component/Interesting_Edit.js'
import Status_Edit from './Component/Status_Edit.js'
import Annoucement_Create from './Component/Annoucement_Create.js'
import Annoucement_Profile from './Component/Annoucement_Profile.js'
import Jobs_Apply from './Component/Jobs_Apply.js'
import Job_Description from './Component/Job_Description.js'
import Agreement from './Component/Agreement.js'
import Profile_Employer from './Component/Profile_Employer.js'
import Company_Contact_Edit from './Component/Company_Contact_Edit.js'
import Company_Information_Edit from './Component/Company_Information_Edit.js'
import Hiring_Profile from './Component/Hiring_Profile.js'
import Job_Annoucement_Create from './Component/Job_Annoucement_Create.js'
import Job_Annoucement_Edit from './Component/Job_Annoucement_Edit.js'
import Application from './Component/Application.js'
import Application_Profile from './Component/Application_Profile.js'
import Watch_Profile_Employer from './Component/Watch_Profile_Employer.js'
import Contact from './Component/Contact.js'
import All_Hiring from './Component/All_Hiring.js'
import Reccommend_Employee from './Component/Reccommend_Employee.js'
import Bookmark_Employer from './Component/Bookmark_Employer.js'
import Application_Profile_Not_Apply from './Component/Application_Profile_Not_Apply.js'
import Job_Description_Not_Agree from './Component/Job_Description_Not_Agree.js'
import Job_Annoucement from './Component/Job_Annoucement.js'
import Job_Annoucement_Description from './Component/Job_Annoucement_Description.js'
import Annoucement_Edit from './Component/Annoucement_Edit.js'

function ProfileScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        title="Go to Notifications"
        onPress={() => navigation.navigate('Notifications')}
      />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        title="Go to Settings"
        onPress={() => navigation.navigate('Settings')}
      />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}


const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomePage" component={HomePage} options={{headerShown: false}}/>
      <Stack.Screen name="Employer_Login" component={Employer_Login} options={{headerShown: false}}/>
      <Stack.Screen name="Employee_Login" component={Employee_Login} options={{headerShown: false}}/>
      <Stack.Screen name="Forgot_Password" component={Forgot_Password} options={{headerShown: false}}/>
      <Stack.Screen name="Create_Account" component={Create_Account} options={{headerShown: false}}/>
      <Stack.Screen name="Reset_Password" component={Reset_Password} options={{headerShown: false}}/>
      <Stack.Screen name="Home_Employee" component={Home_Employee} options={{headerShown: false}}/>
      <Stack.Screen name="Home_Employer" component={Home_Employer} options={{headerShown: false}}/>
      <Stack.Screen name="Reccommend_Jobs" component={Reccommend_Jobs} options={{headerShown: false}}/>
      <Stack.Screen name="Annoucement" component={Annoucement} options={{headerShown: false}}/>
      <Stack.Screen name="Bookmark_Employee" component={Bookmark_Employee} options={{headerShown: false}}/>
      <Stack.Screen name="Profile_Employee" component={Profile_Employee} options={{headerShown: false}}/>
      <Stack.Screen name="Education" component={Education} options={{headerShown: false}}/>
      <Stack.Screen name="Education_Edit" component={Education_Edit} options={{headerShown: false}}/>
      <Stack.Screen name="Interesting_Edit" component={Interesting_Edit} options={{headerShown: false}}/>
      <Stack.Screen name="Status_Edit" component={Status_Edit} options={{headerShown: false}}/>
      <Stack.Screen name="Annoucement_Create" component={Annoucement_Create} options={{headerShown: false}}/>
      <Stack.Screen name="Annoucement_Profile" component={Annoucement_Profile} options={{headerShown: false}}/>
      <Stack.Screen name="Jobs_Apply" component={Jobs_Apply} options={{headerShown: false}}/>
      <Stack.Screen name="Job_Description" component={Job_Description} options={{headerShown: false}}/>
      <Stack.Screen name="Agreement" component={Agreement} options={{headerShown: false}}/>
      <Stack.Screen name="Profile_Employer" component={Profile_Employer} options={{headerShown: false}}/>
      <Stack.Screen name="Company_Contact_Edit" component={Company_Contact_Edit} options={{headerShown: false}}/>
      <Stack.Screen name="Company_Information_Edit" component={Company_Information_Edit} options={{headerShown: false}}/>
      <Stack.Screen name="Hiring_Profile" component={Hiring_Profile} options={{headerShown: false}}/>
      <Stack.Screen name="Job_Annoucement_Create" component={Job_Annoucement_Create} options={{headerShown: false}}/>
      <Stack.Screen name="Job_Annoucement_Edit" component={Job_Annoucement_Edit} options={{headerShown: false}}/>
      <Stack.Screen name="Application" component={Application} options={{headerShown: false}}/>
      <Stack.Screen name="Application_Profile" component={Application_Profile} options={{headerShown: false}}/>
      <Stack.Screen name="Watch_Profile_Employer" component={Watch_Profile_Employer} options={{headerShown: false}}/>
      <Stack.Screen name="Contact" component={Contact} options={{headerShown: false}}/>
      <Stack.Screen name="All_Hiring" component={All_Hiring} options={{headerShown: false}}/>
      <Stack.Screen name="Reccommend_Employee" component={Reccommend_Employee} options={{headerShown: false}}/>
      <Stack.Screen name="Bookmark_Employer" component={Bookmark_Employer} options={{headerShown: false}}/>
      <Stack.Screen name="Application_Profile_Not_Apply" component={Application_Profile_Not_Apply} options={{headerShown: false}}/>
      <Stack.Screen name="Job_Description_Not_Agree" component={Job_Description_Not_Agree} options={{headerShown: false}}/>
      <Stack.Screen name="Job_Annoucement" component={Job_Annoucement} options={{headerShown: false}}/>
      <Stack.Screen name="Job_Annoucement_Description" component={Job_Annoucement_Description} options={{headerShown: false}}/>
      <Stack.Screen name="Annoucement_Edit" component={Annoucement_Edit} options={{headerShown: false}}/>

    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
