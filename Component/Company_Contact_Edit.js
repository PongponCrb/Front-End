import * as React from 'react';
import { StyleSheet, FlatList, TouchableOpacity, View ,Text,TextInput,KeyboardAvoidingView, TouchableWithoutFeedback,Keyboard} from 'react-native';


export default class Company_Contact_Edit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            contact:'',
        };
      }
    render(){
        return(
            <View style={{flex:1, margin:0, marginTop:32,}}>

                <View style={{flex:0.1, justifyContent:'center', backgroundColor:'transparent', alignItems:'center', flexDirection:'row'}}>
                    <TouchableOpacity 
                        onPress={()=>this.props.navigation.goBack()}
                        style={{ flex:0.15, height:40, justifyContent:'center', margin:15}}> 
                        <Text style={{color:'#720DBA', fontSize:14}}>Cancle</Text>
                    </TouchableOpacity>
                    <View style={{flex:0.7, justifyContent:'center', backgroundColor:'transparent', alignItems:'center'}}>
                        <Text style={{fontSize:24, color:'#720DBA', backgroundColor:'transparent'}}>Contact</Text>
                    </View>
                    <TouchableOpacity 
                        onPress={()=>this.props.navigation.goBack()}
                        style={{ flex:0.15, height:40, justifyContent:'center', margin:10}}> 
                        <Text style={{color:'#720DBA', fontSize:14}}>Save</Text>
                    </TouchableOpacity>
                </View>


                <View style={{flex:0.9, backgroundColor:'#E0E0E0', alignItems:'center'}}>
                    <View style={{flexDirection:'row', backgroundColor:'white', height:250, marginTop:10, width:'95%',
                                borderColor:'#EBEBEB', paddingHorizontal:10, alignItems:'flex-start'}}>
                        <TextInput
                            style={{flex:1, margin:5, borderBottomWidth:1}}
                            value={this.state.contact}
                            onChangeText={text=>this.setState({contact:text})}
                            multiline={true}
                            underlineColorAndroid='transparent'
                        />
                    </View>
                </View>     

            </View>
        );
    }
}    