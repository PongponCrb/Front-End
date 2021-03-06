import * as React from 'react';
import { StyleSheet,FlatList, TouchableOpacity, View ,Text,TextInput,Alert, TouchableWithoutFeedback,Keyboard} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { AntDesign } from '@expo/vector-icons'; 
import { ScrollView } from 'react-native-gesture-handler';

const styles = StyleSheet.create({
    item: {
      padding: 10,
      fontSize: 18,
      height: 45,
    },
  });

export default class Forgot_Password extends React.Component {

    render(){
        return(
            <View style={{flex:1, backgroundColor:'#ffffff'}}>
                <View style={{flex:0.12, borderBottomColor: 'black', borderBottomWidth: 1, flexDirection:'row',
                             alignItems:'center', marginTop:20, backgroundColor:'transparent', marginBottom:20, height:80}}>
                    <TouchableOpacity style={{flex:0.1, height:'100%',justifyContent:'center',marginLeft:'2%',backgroundColor:'transparent',
                                    opacity:10,width:'20%',height:'70%',borderRadius:10,flexDirection:'row',alignItems:'center'}} 
                                    onPress={()=>this.props.navigation.goBack()}>
                        <AntDesign name="left" size={26} color="black" style={{marginLeft:'5%',marginRight:'10%'}}/>
                    </TouchableOpacity> 

                    <View style={{flex:0.85, justifyContent:'center', backgroundColor:'transparent', alignItems:'center'}}>
                        <Text style={{fontSize:24, color:'#720DBA'}}>Forgot Password</Text>
                    </View>
                </View>
                
                <View style={{flex:0.8, margin:5, backgroundColor:'transparent', flexDirection:'column', alignItems:'center'}}>
                    <Text style={{fontSize:20, color:'black', alignSelf:'flex-start', marginLeft:'5%', margin:10}}>New Password</Text>
                    <TextInput  secureTextEntry={true}
                                style={{height: 50, width:'90%',borderColor: 'gray', borderWidth: 1,borderRadius:10 ,
                                paddingHorizontal:10, backgroundColor:'#EBEBEB', margin:10}}
                                placeholder="New Password" placeholderTextColor='#AAAAAA' />

                    <Text style={{fontSize:20, color:'black', alignSelf:'flex-start', marginLeft:'5%', margin:10}}>Confirm Password</Text>
                    <TextInput  secureTextEntry={true}
                                style={{height: 50, width:'90%',borderColor: 'gray', borderWidth: 1,borderRadius:10 ,
                                paddingHorizontal:10, backgroundColor:'#EBEBEB', margin:10}}
                                placeholder="Confirm Password" placeholderTextColor='#AAAAAA' />

                </View>
                
                <TouchableOpacity style={{height: 50, width:'90%',borderRadius:10 , alignSelf:'center',
                                paddingHorizontal:10, backgroundColor:'#720DBA', margin:10, flexDirection:'column', justifyContent:'center'}}
                                onPress={() => this.props.navigation.navigate('HomePage')}>
                        <Text style={{fontSize:20, color:'white',alignSelf:'center', backgroundColor:'transparent'}}>Confirm</Text>
                </TouchableOpacity>

            </View>
        );
    }
}