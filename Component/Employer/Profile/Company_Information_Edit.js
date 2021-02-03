import * as React from 'react';
import { StyleSheet, FlatList, TouchableOpacity, View ,Text,TextInput,KeyboardAvoidingView, TouchableWithoutFeedback,Keyboard} from 'react-native';


export default class Company_Information_Edit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            information: 'We was founded on July 24, 2003with registered capital of THB 50 millions.We located at 404 Watcharakarn Building,Ladprao 71, Ladprao, Bangkok 10230,Thailand. We provided CommunicationTechnology Solutions and Services which included designation and installation of telecommunication network, IT solutions business, and related Software & Hardware support for Private Enterprises and Government Institutions. ',
            value:'',
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
                        <Text style={{fontSize:24, color:'#720DBA', backgroundColor:'transparent'}}>Information</Text>
                    </View>
                    <TouchableOpacity 
                        onPress={()=>this.props.navigation.goBack()}
                        style={{ flex:0.15, height:40, justifyContent:'center', margin:5}}> 
                        <Text style={{color:'#720DBA', fontSize:14}}>Save</Text>
                    </TouchableOpacity>
                </View>


                <View style={{flex:0.9, backgroundColor:'#E0E0E0', alignItems:'center'}}>
                    <View style={{flexDirection:'row', backgroundColor:'white', marginTop:10, width:'95%',
                                borderColor:'#EBEBEB', paddingHorizontal:10, alignItems:'flex-start'}}>
                        <TextInput
                            style={{flex:1, margin:5, borderBottomWidth:1}}
                            value={this.state.information}
                            onChangeText={text=>this.setState({information:text})}
                            multiline={true}
                            underlineColorAndroid='transparent'
                        />
                    </View>
                </View>     

            </View>
        );
    }
}    