import * as React from 'react';
import { Image, StyleSheet, FlatList, TouchableOpacity, View ,Text,TextInput,KeyboardAvoidingView, TouchableWithoutFeedback,Keyboard, Alert} from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import { ScrollView } from 'react-native-gesture-handler';
import { Icon  } from 'react-native-elements'

export default class Currenting_Job extends React.Component {
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
                
                <View style={{flex:0.1, borderBottomColor: 'black', borderBottomWidth: 1, flexDirection:'row',
                             alignItems:'center', backgroundColor:'transparent', marginBottom:20}}>
                    <TouchableOpacity style={{flex:0.1, height:'100%',justifyContent:'center',marginLeft:'2%',backgroundColor:'transparent',
                                    borderRadius:10,flexDirection:'row',alignItems:'center'}} 
                                    onPress={()=>this.props.navigation.goBack()}>
                        <AntDesign name="left" size={26} color="black" style={{marginLeft:'5%',marginRight:'10%'}}/>
                    </TouchableOpacity> 

                    <View style={{flex:0.8, justifyContent:'center', backgroundColor:'transparent', alignItems:'center'}}>
                        <Text style={{fontSize:24, color:'#720DBA'}}>Currenting Jobs</Text>
                    </View>
                </View>

                {/* Flat list View */}
                <View style={{flex:1}}>
                        <TouchableOpacity style={{height:150, width:'90%',borderColor: 'gray', borderWidth: 1,borderRadius:10 ,
                                paddingHorizontal:10, backgroundColor:'#6914B3', alignSelf:'center', margin:10}}
                                onPress={() => this.props.navigation.navigate('Job_Description_Agree')}>
                                <View style={{flex:1, flexDirection:'row'}}>
                                    

                                    <View style={{flex:0.9,margin:5 , marginTop:15, backgroundColor:'tranparent'}}>
                                        <Text style={{fontSize:18, color:'white', margin:3}}>{this.state.jobTitle}</Text>
                                        <Text style={{fontSize:14, color:'white', margin:3}}>พื้นที่ : {this.state.location}</Text>
                                        <Text style={{fontSize:14, color:'white', margin:3}}>ค่าตอบแทน : {this.state.profit}</Text>
                                        <Text style={{fontSize:14, color:'white', margin:3}}>ประเภทงาน : {this.state.jobTypeShow}</Text>
                                    </View>
                                    
                                </View>
                        </TouchableOpacity>

                        
                </View>

            </View>
        );
    }
}    