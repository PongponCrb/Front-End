import * as React from 'react';
import { StyleSheet, FlatList, TouchableOpacity, View ,Text,TextInput,KeyboardAvoidingView, TouchableWithoutFeedback,Keyboard, Alert } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import { ScrollView } from 'react-native-gesture-handler';
import { CheckBox } from 'react-native-elements'
import RNPickerSelect from 'react-native-picker-select';

const styles = StyleSheet.create({
    item: {
      padding: 10,
      fontSize: 14,
      height: 50,
    },
  });

export default class Create_Account extends React.Component {
    constructor(props)
    {
        super(props)
        this.state = {
            checked: false,
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
    checkBox(){
        if(this.state.checked == true){
            this.setState({checked:false})
        }else{
            this.setState({checked:true})
        }
    }

    Reset = async () => {
        if(this.state.checked == false )
        {
          Alert.alert("กรุณายอมรับเงื่อนไข");
        }else{
            Alert.alert("Complete");
            this.props.navigation.navigate('HomePage')
        }
      }


    render(){
        return(
            <ScrollView>
            <View style={{flex:1, backgroundColor:'#ffffff'}}>
                <View style={{flex:0.12, borderBottomColor: 'black', borderBottomWidth: 1, flexDirection:'row',
                             alignItems:'center', marginTop:20, backgroundColor:'transparent', marginBottom:20, height:80}}>
                    <TouchableOpacity style={{flex:0.1, height:'100%',justifyContent:'center',marginLeft:'2%',backgroundColor:'transparent',
                                    opacity:10,width:'20%',height:'70%',borderRadius:10,flexDirection:'row',alignItems:'center'}} 
                                    onPress={()=>this.props.navigation.goBack()}>
                        <AntDesign name="left" size={26} color="black" style={{marginLeft:'5%',marginRight:'10%'}}/>
                    </TouchableOpacity> 

                    <View style={{flex:0.85, justifyContent:'center', backgroundColor:'transparent', alignItems:'center'}}>
                        <Text style={{fontSize:24, color:'#720DBA', backgroundColor:'transparent'}}>Register</Text>
                    </View>
                </View>
                
                <View style={{flex:0.72, margin:5, backgroundColor:'transparent', flexDirection:'column', alignItems:'center'}}>

                    <TextInput style={{height: 50, width:'90%',borderColor: 'gray', borderWidth: 1,borderRadius:10 ,
                                paddingHorizontal:10, backgroundColor:'#EBEBEB', margin:10}}
                                placeholder='First Name' placeholderTextColor='#AAAAAA' />

                    <TextInput style={{height: 50, width:'90%',borderColor: 'gray', borderWidth: 1,borderRadius:10 ,
                                paddingHorizontal:10, backgroundColor:'#EBEBEB', margin:10}}
                                placeholder="Last Name" placeholderTextColor='#AAAAAA' />

                    <TextInput style={{height: 50, width:'90%',borderColor: 'gray', borderWidth: 1,borderRadius:10 ,
                                paddingHorizontal:10, backgroundColor:'#EBEBEB', margin:10}}
                                placeholder="ID" placeholderTextColor='#AAAAAA' />

                    <TextInput style={{height: 50, width:'90%',borderColor: 'gray', borderWidth: 1,borderRadius:10 ,
                                paddingHorizontal:10, backgroundColor:'#EBEBEB', margin:10}}
                                placeholder="Phone" placeholderTextColor='#AAAAAA' />
                    
                    <TextInput style={{height: 50, width:'90%',borderColor: 'gray', borderWidth: 1,borderRadius:10 ,
                                paddingHorizontal:10, backgroundColor:'#EBEBEB', margin:10}}
                                placeholder="E-mail" placeholderTextColor='#AAAAAA' />

                    <TextInput style={{height: 50, width:'90%',borderColor: 'gray', borderWidth: 1,borderRadius:10 ,
                                paddingHorizontal:10, backgroundColor:'#EBEBEB', margin:10}}
                                placeholder="Confirm E-mail" placeholderTextColor='#AAAAAA' />

                    <View style={{backgroundColor:'transparent', width:'100%'}}>            
                        <TextInput  secureTextEntry={true}
                                    style={{height: 50, width:'90%',borderColor: 'gray', borderWidth: 1,borderRadius:10 ,
                                    paddingHorizontal:10, backgroundColor:'#EBEBEB', margin:10, alignSelf:'center'}}
                                    placeholder="Password" placeholderTextColor='#AAAAAA' />
                    </View>

                    <View style={{backgroundColor:'transparent', width:'100%'}}>            
                        <TextInput  secureTextEntry={true}
                                    style={{height: 50, width:'90%',borderColor: 'gray', borderWidth: 1,borderRadius:10 ,
                                    paddingHorizontal:10, backgroundColor:'#EBEBEB', margin:10, alignSelf:'center'}}
                                    placeholder="Confirm Password" placeholderTextColor='#AAAAAA' />
                    </View>

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

                    <TextInput style={{height: 50, width:'90%',borderColor: 'gray', borderWidth: 1,borderRadius:10 ,
                                paddingHorizontal:10, backgroundColor:'#EBEBEB', margin:10}}
                                placeholder="Your Answer?" placeholderTextColor='#AAAAAA' />
                    

                </View>
                <View style={{flex:0.18, backgroundColor:'transparent', width:'90%', alignSelf:'center', flexDirection:'row'}}>
                    <CheckBox   style={{alignSelf:'center'}}
                                onPress={()=>this.checkBox()}
                                checked={this.state.checked}>
                    </CheckBox>
                    <View style={{flexDirection:'column', color:'red', margin:5}}>
                        <Text style={{fontSize:14, marginLeft: '0%'}}>I agree to ..... </Text>
                        <TouchableOpacity>
                            <Text style={{fontSize:14, marginLeft: '0%', color:'#720DBA'}}>Term of Service Agreement</Text>
                        </TouchableOpacity>
                        <Text style={{fontSize:14, marginLeft: '0%'}}>and Privacy Policy</Text>
                    </View>

                </View>

                <TouchableOpacity style={{height: 50, width:'90%',borderRadius:10 , alignSelf:'center',
                                paddingHorizontal:10, backgroundColor:'#720DBA', margin:10, flexDirection:'column', justifyContent:'center'}}
                                onPress={() => this.Reset()}>
                        <Text style={{fontSize:20, color:'white',alignSelf:'center', backgroundColor:'transparent'}}>Register</Text>
                </TouchableOpacity>

            </View>
            </ScrollView>
        );
    }
}