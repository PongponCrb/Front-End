import * as React from 'react';
import { StyleSheet, FlatList, TouchableOpacity, View ,Text,TextInput,KeyboardAvoidingView, TouchableWithoutFeedback,Keyboard} from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import { ScrollView } from 'react-native-gesture-handler';
import { Icon } from 'react-native-elements'

export default class Job_Description_Agree extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            jobTitle: 'ต้องการผู้ช่วยซ่อมเรือดำน้ำ',
            profit: '25,000',
            location: 'แหลมฉบัง ชลบุรี บ้านเลขที่ 7 หมู่ 11 ซอยอะไรซักอย่าง',
            description: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
            properties: '',
            benefit: '',
            people: '3',
        };
      }

    pressBookmark(){
        
        if(!this.state.bookmarkSolid){
            this.setState({bookmarkColor:'yellow', bookmarkSolid:true});
        }else{
            this.setState({bookmarkColor:'black', bookmarkSolid:false});
        }
        
    }
    render(){
        return(
            <View style={{flex:1, flexDirection:'column', marginTop:32}}>
                <View style={{flex:0.1, flexDirection:'row', alignItems:'center', backgroundColor:'transparent'}}>
                    <TouchableOpacity style={{height:'100%',justifyContent:'center',marginLeft:'2%', width:'20%',height:'70%',
                                    borderRadius:10, flexDirection:'row',alignItems:'center'}} 
                                    onPress={()=>this.props.navigation.goBack()}>
                        <AntDesign name="leftcircleo" size={24} color="black" style={{marginLeft:'5%',marginRight:'10%'}}/>
                        <Text>Back</Text>
                    </TouchableOpacity>
                </View>
                
                <View style={{flex:0.8, backgroundColor:'blue', borderRadius:10}}>
                </View>
                
                <View style={{flex:1}}>
                <ScrollView>
                    <View style={{ borderColor:'transparent', flexDirection:'row', height:180}}>
                        <View style={{flex:0.9, backgroundColor:'#B8B8B8', marginTop:5, opacity:10}}>
                            <TouchableOpacity >
                                <View style={{flexDirection:'row', marginTop:15, margin:5}}>
                                    <Text style={{fontSize:22}}>{this.state.jobTitle}</Text>
                                </View>
                                <Text style={{fontSize:14, margin:5}}>พื้นที่ : {this.state.location}</Text>
                                <Text style={{fontSize:14, margin:5}}>ค่าตอบแทน : {this.state.profit}</Text>
                                <Text style={{fontSize:14, margin:5}}>จำนวน : {this.state.people} คน</Text>
                            </TouchableOpacity>
                        </View>


                        <View style={{flex:0.25, backgroundColor:'#B8B8B8', marginTop:5}}>
                            <TouchableOpacity style={{flex:0.2, borderRadius:10, backgroundColor:'#720DBA', margin:5, justifyContent:'center', 
                                                alignItems:'center', width:70, height:30, marginTop: 10}}
                                                onPress={() => this.props.navigation.navigate('Contact')}>
                                <Text style={{fontSize:12, color:'white'}}>Contact</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={{flex:0.2, borderRadius:10, margin:5, justifyContent:'center', 
                                                alignItems:'center', width:70, height:30, marginTop: 10}}
                                                onPress={() => this.pressBookmark()}>
                                <Icon name='bookmark' type='font-awesome-5' color={this.state.bookmarkColor} size={30} solid={this.state.bookmarkSolid} />

                            </TouchableOpacity>
                        </View>

                    </View>

                    <View style={{marginTop:15}}>
                        <Text style={{fontSize:22, margin:5}}>Job Description</Text>
                        <Text style={{fontSize:14, margin:5}}>{this.state.description}</Text>

                    </View>

                    <View style={{marginTop:15}}>
                        <Text style={{fontSize:22, margin:5}}>Properties</Text>
                        <Text style={{fontSize:14, margin:5}}>{this.state.description}</Text>

                    </View>

                    
                    <View style={{marginTop:15}}>
                        <Text style={{fontSize:22, margin:5}}>Benefits</Text>
                        <Text style={{fontSize:14, margin:5}}>{this.state.description}</Text>

                    </View>

                    <View style={{height:100, justifyContent:'center'}}> 
                        <TouchableOpacity style={{borderRadius:5, borderWidth:1, alignSelf:'center'}}
                            onPress={() => this.props.navigation.navigate('Watch_Profile_Employer')}>
                            <Text> Employer Information </Text>
                        </TouchableOpacity>
                    </View>

                </ScrollView>
                </View>
            </View>
        );
    }
}    