import * as React from 'react';
import { StyleSheet,FlatList, TouchableOpacity, View ,Text,TextInput,Alert, TouchableWithoutFeedback,Keyboard, Picker} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { AntDesign } from '@expo/vector-icons'; 

import { ScrollView } from 'react-native-gesture-handler';
import RNPickerSelect from 'react-native-picker-select';



const styles = StyleSheet.create({
    item: {
      padding: 10,
      fontSize: 18,
      height: 45,
    },
  });

export default class Forgot_Password extends React.Component {
    constructor(props)
    {
        super(props)
        this.state = {
            favColor: undefined,
            items: [
                {
                    label: 'Question1',
                    value: '1',
                },
                {
                    label: 'Question2',
                    value: '2',
                },
                {
                    label: 'Question3',
                    value: '3',
                },
                {
                    label: 'Question4',
                    value: '4',
                },
                {
                    label: 'Question5',
                    value: '5',
                },
                {
                    label: 'Question6',
                    value: '6',
                },
            ],
        }
    }

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
                    <Text style={{fontSize:20, color:'black', alignSelf:'flex-start', marginLeft:'5%', margin:10}}>E-mail</Text>
                    <TextInput style={{height: 50, width:'90%',borderColor: 'gray', borderWidth: 1,borderRadius:10 ,
                                paddingHorizontal:10, backgroundColor:'#EBEBEB', margin:10}}
                                placeholder="E-mail" placeholderTextColor='#AAAAAA' />

                    <Text style={{fontSize:20, color:'black', alignSelf:'flex-start', marginLeft:'5%', margin:10}}>ID card number</Text>
                    <TextInput style={{height: 50, width:'90%',borderColor: 'gray', borderWidth: 1,borderRadius:10 ,
                                paddingHorizontal:10, backgroundColor:'#EBEBEB', margin:10}}
                                placeholder="ID card number" placeholderTextColor='#AAAAAA' />

                    <Text style={{fontSize:20, color:'black', alignSelf:'flex-start', marginLeft:'5%', margin:10}}>Your Question</Text>
                    
                    <View style={{height: 50, width:'90%',borderColor: 'gray', borderWidth: 1,borderRadius:10 ,
                                paddingHorizontal:10, backgroundColor:'#EBEBEB', margin:10, justifyContent:'center'}}>
                        <RNPickerSelect
                            placeholder={{
                                label: 'Select a question...',
                                value: null,
                                fontSize: 24
                            }}
                                items={this.state.items}
                                onValueChange={(value) => {this.setState({ favColor: value,});
                            }}
                            style={{ fontSize: 24,paddingTop: 13,paddingHorizontal: 10,paddingBottom: 12,borderWidth: 1,
                                    borderColor: 'gray', borderRadius: 4, backgroundColor: 'white', color: 'black'}}
                            value={this.state.favColor}

                        />
                    </View>

                    <Text style={{fontSize:20, color:'black', alignSelf:'flex-start', marginLeft:'5%'}}>Your Answer</Text>
                    <TextInput style={{height: 50, width:'90%',borderColor: 'gray', borderWidth: 1,borderRadius:10 ,
                                paddingHorizontal:10, backgroundColor:'#EBEBEB', margin:10}}
                                placeholder="Your Answer" placeholderTextColor='#AAAAAA' />
                </View>
                
                
                <TouchableOpacity style={{height: 50, width:'90%',borderRadius:10 , alignSelf:'center',
                                paddingHorizontal:10, backgroundColor:'#720DBA', margin:10, flexDirection:'column', justifyContent:'center'}}
                                onPress={() => this.props.navigation.navigate('Reset_Password')}>
                        <Text style={{fontSize:20, color:'white',alignSelf:'center', backgroundColor:'transparent'}}>Reset</Text>
                </TouchableOpacity>

            </View>
        );
    }
}