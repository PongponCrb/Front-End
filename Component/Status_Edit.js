import * as React from 'react';
import { StyleSheet, FlatList, TouchableOpacity, View ,Text,TextInput,KeyboardAvoidingView, TouchableWithoutFeedback,Keyboard} from 'react-native';

export default class Status_Edit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            age: '25',
            sex: 'Male',
            nation: 'Thailand',
            religion: 'Buddhist',
            degree: 'Bachelor Degree',
        };
      }
    render(){
        return(
            <View style={{flex:1, margin:0, marginTop:32,}}>

                <View style={{flex:0.1, justifyContent:'center', backgroundColor:'transparent', alignItems:'center', flexDirection:'row'}}>
                    <TouchableOpacity 
                        onPress={()=>this.props.navigation.goBack()}
                        style={{ flex:0.15, height:40, justifyContent:'center', margin:5}}> 
                        <Text style={{color:'#720DBA', fontSize:14}}>Cancle</Text>
                    </TouchableOpacity>
                    <View style={{flex:0.85, justifyContent:'center', backgroundColor:'transparent', alignItems:'center'}}>
                        <Text style={{fontSize:24, color:'#720DBA', backgroundColor:'transparent'}}>Status</Text>
                    </View>
                    <TouchableOpacity 
                        onPress={()=>this.props.navigation.goBack()}
                        style={{ flex:0.15, height:40, justifyContent:'center', margin:5}}> 
                        <Text style={{color:'#720DBA', fontSize:14}}>Save</Text>
                    </TouchableOpacity>
                </View>


                <View style={{flex:0.9, backgroundColor:'#E0E0E0', alignItems:'center'}}>
                    <View style={{flexDirection:'row', backgroundColor:'white', height:50, marginTop:10, width:'95%',
                                borderColor:'#EBEBEB', borderRadius:10, alignItems:'center'}}>
                        <TextInput style={{fontSize:18, margin:15}}
                                    placeholder="Age">{this.state.age}</TextInput>
                    </View>
                    <View style={{flexDirection:'row', backgroundColor:'white', height:50, marginTop:10, width:'95%',
                                borderColor:'#EBEBEB', borderRadius:10, alignItems:'center'}}>
                        <TextInput style={{fontSize:18, margin:15}}
                                    placeholder="Sex">{this.state.sex}</TextInput>
                    </View>
                    <View style={{flexDirection:'row', backgroundColor:'white', height:50, marginTop:10, width:'95%',
                                borderColor:'#EBEBEB', borderRadius:10, alignItems:'center'}}>
                        <TextInput style={{fontSize:18, margin:15}}
                                    placeholder="Nationality">{this.state.nation}</TextInput>
                    </View>
                    <View style={{flexDirection:'row', backgroundColor:'white', height:50, marginTop:10, width:'95%',
                                borderColor:'#EBEBEB', borderRadius:10, alignItems:'center'}}>
                        <TextInput style={{fontSize:18, margin:15}}
                                    placeholder="Religion">{this.state.religion}</TextInput>
                    </View>
                    <View style={{flexDirection:'row', backgroundColor:'white', height:50, marginTop:10, width:'95%',
                                borderColor:'#EBEBEB', borderRadius:10, alignItems:'center'}}>
                        <TextInput style={{fontSize:18, margin:15}}
                                    placeholder="Heighest Education">{this.state.degree}</TextInput>
                    </View>
                </View>  
 
            </View>
        );
    }
}    