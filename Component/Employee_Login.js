import * as React from 'react';
import { TouchableOpacity, View ,Text,TextInput,Alert, TouchableWithoutFeedback,Keyboard} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { AntDesign } from '@expo/vector-icons'; 
import { ScrollView } from 'react-native-gesture-handler';
export default class Employee_Login extends React.Component {

    render() {
      return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={{flex: 1,backgroundColor:'#E7E7E7'}}>
        <View style={{flex:0.05}}></View>
          <View style={{flex:0.1,justifyContent:'center'}}>
          <TouchableOpacity style={{height:'100%',justifyContent:'center',marginLeft:'2%',opacity:10,width:'20%',height:'70%',borderRadius:10,flexDirection:'row',alignItems:'center'}} onPress={()=>this.props.navigation.goBack()}>
              <AntDesign name="leftcircleo" size={24} color="black" style={{marginLeft:'5%',marginRight:'10%'}}/>
              <Text>Back</Text>
         </TouchableOpacity> 
          </View>
          <View style={{flex:0.4}}>

          </View>
          
          <View style={{flex:0.6,backgroundColor:'#E7E7E7',flexDirection:'column',alignItems:'center',}}>
            <Text style={{color:'#000000',fontSize:24,fontWeight:'bold',padding:'5%'}}>Employee Sign In</Text>
            <TextInput style={{height: 40, width:'80%',borderColor: 'gray', borderWidth: 1,borderRadius:10 ,paddingHorizontal:10,backgroundColor:'#EBEBEB'}} 
                placeholder="E-mail" placeholderTextColor='#AAAAAA'/>

            <TextInput style={{marginTop:'5%', height: 40, width:'80%',borderColor: 'gray', borderWidth: 1,borderRadius:10 ,paddingHorizontal:10,backgroundColor:'#EBEBEB'}} 
                placeholder="Password" placeholderTextColor='#AAAAAA' secureTextEntry={true}/>

            <TouchableOpacity onPress={() => this.props.navigation.navigate('Home_Employee')}
                              style={{alignItems:'center',justifyContent:'center',marginTop:'5%',height: '15%', width:'80%',borderRadius:10 ,paddingHorizontal:10,backgroundColor:'#720DBA'}}>
              <Text style={{fontSize:14,fontWeight:'bold',color:'#FFFFFF'} }>Login</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{alignItems:'flex-end',justifyContent:'center',height: '10%', width:'80%',borderRadius:10 ,paddingHorizontal:10}}
                              onPress={() => this.props.navigation.navigate('Forgot_Password')}>
              <Text style={{fontSize:12,fontWeight:'bold',color:'#636363'}}>Forgot Password</Text>
            </TouchableOpacity>
          </View>
       
          
          <View style={{flex:0.1,flexDirection:'column',alignItems:'center'}}>
            <View style={{backgroundColor:'#707070',height:'1%',width:'100%'}}/>

            <TouchableOpacity style={{marginTop:'5%',alignItems:'center',justifyContent:'center',height: '40%', width:'80%',borderRadius:10 ,paddingHorizontal:10}}
                              onPress={() => this.props.navigation.navigate('Create_Account')}>
              <Text style={{fontSize:16,fontWeight:'bold',color:'#636363'}}>Create an account? Register</Text>
            </TouchableOpacity>

          </View>

        </View>
        </TouchableWithoutFeedback>
      );
    }
  }

