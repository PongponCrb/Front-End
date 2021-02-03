import * as React from 'react';
import { Image, StyleSheet, FlatList, TouchableOpacity, View ,Text,TextInput,KeyboardAvoidingView, TouchableWithoutFeedback,Keyboard} from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import { ScrollView } from 'react-native-gesture-handler';
import { Icon  } from 'react-native-elements'

export default class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            employer:'Example Employer',
        };
      }
    render(){
        return(
            <View style={{flex:1}}>

                <View style={{flex:0.13, backgroundColor:'#720DBA', flexDirection:'row'}}>

                        <TouchableOpacity style={{ height:50,justifyContent:'center',marginLeft:'2%',backgroundColor:'transparent',
                                            opacity:10,width:40,borderRadius:10,flexDirection:'row',alignItems:'center', marginTop:40}} 
                                            onPress={()=>this.props.navigation.goBack()}>
                                <AntDesign name="left" size={26} color="white" style={{marginLeft:'5%',marginRight:'10%'}}/>
                        </TouchableOpacity> 
                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate('Annoucement_Profile')}>
                            <Text style={{fontSize:24, marginTop:50, marginLeft:10, color:'white'}}>{this.state.employer}</Text>
                        </TouchableOpacity>
                </View>

                <View style={{flex:0.75}}>

                </View>

                <View style={{flex:0.15, backgroundColor:'#720DBA',  justifyContent:'center', flexDirection:'row'}}>
                    <TextInput style={{borderRadius:10, width:'80%', borderWidth:1, height:50, backgroundColor:'white', marginTop:20}}></TextInput>
                    <TouchableOpacity style={{width:50, height:50, justifyContent:'center', marginTop:20}}>
                    <Icon
                        name='send'
                        type='material'
                        color='white'
                        size='30'
                        />
                    </TouchableOpacity>
                </View>
            
            </View>
        );
    }
}    