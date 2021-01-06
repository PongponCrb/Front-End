import * as React from 'react';
import { StyleSheet, FlatList, TouchableOpacity, View ,Text,TextInput,KeyboardAvoidingView, TouchableWithoutFeedback,Keyboard} from 'react-native';


export default class Annoucement_Create extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            job: '',
            type: '',
            location: '',
            Compensation: '25,000',
        };
      }
    render(){
        return(
            <View style={{flex:1, margin:0, marginTop:32,}}>

                <View style={{flex:0.1, justifyContent:'center', backgroundColor:'white', alignItems:'center', flexDirection:'row'}}>
                    <TouchableOpacity 
                        onPress={()=>this.props.navigation.goBack()}
                        style={{ flex:0.15, height:40, justifyContent:'center', margin:5}}> 
                        <Text style={{color:'#720DBA', fontSize:14}}>Cancle</Text>
                    </TouchableOpacity>
                    <View style={{flex:0.85, justifyContent:'center', backgroundColor:'transparent', alignItems:'center'}}>
                        <Text style={{fontSize:24, color:'#720DBA', backgroundColor:'transparent'}}>Annoucement</Text>
                    </View>
                    <TouchableOpacity 
                        onPress={()=>this.props.navigation.goBack()}
                        style={{ flex:0.15, height:40, justifyContent:'center', margin:5}}> 
                        <Text style={{color:'#720DBA', fontSize:14}}>Save</Text>
                    </TouchableOpacity>
                </View>


                <View style={{flex:0.9, backgroundColor:'white', alignItems:'center'}}>
                    <Text style={{fontSize:20, color:"#450887", marginTop:20, marginLeft:10, alignSelf:'flex-start'}}>งานที่ต้องการ</Text>
                        <View style={{flexDirection:'row', height:50, marginTop:10}}>
                            <TextInput style={{height: 50, width:'95%',borderColor: 'gray',borderRadius:10 ,
                                paddingHorizontal:10, backgroundColor:'#EBEBEB', margin:10}} />
                        </View>
                    
                    <Text style={{fontSize:20, color:"#450887", marginTop:20, marginLeft:10, alignSelf:'flex-start'}}>ประเภทงาน</Text>
                        <View style={{flexDirection:'row', height:50, marginTop:10}}>
                            <TextInput style={{height: 50, width:'95%',borderColor: 'gray',borderRadius:10 ,
                                paddingHorizontal:10, backgroundColor:'#EBEBEB', margin:10}} />
                        </View>
                    <Text style={{fontSize:20, color:"#450887", marginTop:20, marginLeft:10, alignSelf:'flex-start'}}>พื้นที่ที่ต้องการ</Text>
                        <View style={{flexDirection:'row', height:50, marginTop:10}}>
                            <TextInput style={{height: 50, width:'95%',borderColor: 'gray',borderRadius:10 ,
                                paddingHorizontal:10, backgroundColor:'#EBEBEB', margin:10}} />
                        </View>
                    <Text style={{fontSize:20, color:"#450887", marginTop:20, marginLeft:10, alignSelf:'flex-start'}}>ค่าตอบแทน</Text>
                        <View style={{flexDirection:'row', height:50, marginTop:10}}>
                            <TextInput style={{height: 50, width:'95%',borderColor: 'gray',borderRadius:10 ,
                                paddingHorizontal:10, backgroundColor:'#EBEBEB', margin:10}} />
                        </View>

                    <Text style={{fontSize:20, color:"#450887", marginTop:20, marginLeft:10, alignSelf:'flex-start'}}>ประสบการณ์ทำงาน</Text>
                        <View style={{flexDirection:'row', height:50, marginTop:10}}>
                            <TextInput style={{height: 50, width:'95%',borderColor: 'gray',borderRadius:10 ,
                                paddingHorizontal:10, backgroundColor:'#EBEBEB', margin:10}} />
                        </View>

                </View>  
 
            </View>
        );
    }
}    