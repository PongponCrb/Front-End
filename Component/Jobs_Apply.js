import * as React from 'react';
import { StyleSheet, FlatList, TouchableOpacity, View ,Text,TextInput,KeyboardAvoidingView, TouchableWithoutFeedback,Keyboard} from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import { ScrollView } from 'react-native-gesture-handler';

export default class Jobs_Apply extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            jobTitle: 'ต้องการผู้ช่วยซ่อมเรือดำน้ำ',
            profit: '2,5000',
            location: 'Si Racha, Chonburi',
        };
      }
    render(){
        return(
            <View style={{flex:1, margin:10, marginTop:37}}>
                <View style={{flex:0.07, flexDirection:'row', alignItems:'center'}}>
                    <TouchableOpacity style={{height:'100%',justifyContent:'center',marginLeft:'2%',width:'20%',height:'70%',borderRadius:10,flexDirection:'row',alignItems:'center'}} onPress={()=>this.props.navigation.goBack()}>
                        <AntDesign name="leftcircleo" size={24} color="black" style={{marginLeft:'5%',marginRight:'10%'}}/>
                        <Text>Back</Text>
                    </TouchableOpacity>
                    <View style={{flex:0.75, justifyContent:'center', backgroundColor:'transparent', alignItems:'center'}}>
                        <Text style={{fontSize:24, color:'#720DBA', backgroundColor:'transparent'}}>All Job Apply</Text>
                    </View>
                </View>
                
                <ScrollView>
                    <View style={{ backgroundColor:'#7400BD', borderWidth:15, borderColor:'transparent', borderRadius:10, marginTop:25}}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Job_Description')}>
                            <View style={{flexDirection:'row'}}>
                                <Text style={{fontSize:20, color:'white', width:'85%', margin:5}}>{this.state.jobTitle}</Text>
                            </View>
                            <Text style={{fontSize:14, color:'white', margin:5}}>พื้นที่ : {this.state.location}</Text>
                            <Text style={{fontSize:14, color:'white', margin:5}}>ค่าตอบแทน : {this.state.profit}</Text>
                            
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        );
    }
}    