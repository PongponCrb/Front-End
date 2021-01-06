import * as React from 'react';
import { StyleSheet, FlatList, TouchableOpacity, View ,Text,TextInput,KeyboardAvoidingView, TouchableWithoutFeedback,Image, Alert} from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import { ScrollView } from 'react-native-gesture-handler';
import { Icon  } from 'react-native-elements'

export default class Job_Annoucement extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            jobTitle: 'ต้องการผู้ช่วยซ่อมเรือดำน้ำ',
            location: 'Si Racha,Chonburi',
            profit: 'ตามตกลง',
            jobTypeShow: 'ช่างซ่อม,ช่าง,ช่างเทคนิค',
            experience : 0,
        };
      }
    render(){
        return(
            <View style={{flex:1, margin:10, marginTop:37}}>
                <View style={{flex:0.05, backgroundColor:'transparent', flexDirection:'row'}}>
                    <TouchableOpacity style={{flex:0.15, backgroundColor:'transparent', justifyContent:'center', height:35, width:35}}>
                        <Icon name='menu' />
                    </TouchableOpacity>
                    
                </View>

                {/* Flat list View */}
                <View style={{flex:1, backgroundColor:'transparent'}}>
                        <TouchableOpacity style={{height: 150, width:'90%',borderColor: 'gray', borderWidth: 1,borderRadius:10 ,
                                paddingHorizontal:10, backgroundColor:'#6914B3', alignSelf:'center', margin:10}}
                                onPress={() => this.props.navigation.navigate('Job_Annoucement_Description')}>
                                <View style={{flex:1, flexDirection:'row'}}>
                                    

                                    <View style={{flex:0.9,margin:5 , marginTop:15, backgroundColor:'tranparent'}}>
                                        <Text style={{fontSize:18, color:'white', margin:3}}>{this.state.jobTitle}</Text>
                                        <Text style={{fontSize:14, color:'white', margin:3}}>พื้นที่ : {this.state.location}</Text>
                                        <Text style={{fontSize:14, color:'white', margin:3}}>ค่าตอบแทน : {this.state.profit}</Text>
                                        <Text style={{fontSize:14, color:'white', margin:3}}>ประเภทงาน : {this.state.jobTypeShow}</Text>
                                    </View>
                                    <View style={{flex:0.1, marginTop:10, backgroundColor:'transparent'}}>
                                        <TouchableOpacity style={{alignSelf:'flex-end'}}
                                            onPress={() => Alert.alert("delete?")}>
                                            <Image 
                                                style={{ width:25, height:25, borderRadius:20}}
                                                source={require("./image/trash.png")}
                                            />
                                        </TouchableOpacity>

                                        <TouchableOpacity style={{alignSelf:'flex-end', marginTop:20}}
                                            onPress={() => this.props.navigation.navigate('Job_Annoucement_Edit')}>
                                            <Image 
                                                style={{ width:25, height:25, borderRadius:20}}
                                                source={require("./image/pencil.png")}
                                            />
                                        </TouchableOpacity>

                                    </View>
                                </View>
                        </TouchableOpacity>

                        <TouchableOpacity style={{height: 150, width:'90%',borderColor: 'gray', borderWidth: 1,borderRadius:10 ,
                                paddingHorizontal:10, backgroundColor:'#B794F0', alignSelf:'center', margin:10, width:320}}
                                onPress={() => this.props.navigation.navigate('Job_Annoucement_Create')}>
                                <View style={{flex:1,justifyContent:'center', backgroundColor:'transparent', alignItems:'center'}}>
                                    <Icon name='add' 
                                        size={60}
                                        color='white'
                                        style={{borderWidth:2, height:63, width:63, borderRadius:10, borderColor:'white'}}/>
                                </View>
                        </TouchableOpacity>
                </View>


                <View style={{flex:0.1, backgroundColor:'blue', marginTop:10}}>
                    
                </View>

            </View>
        );
    }
}    