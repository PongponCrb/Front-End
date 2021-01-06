import React from 'react';
import { Constants, ImagePicker, Permissions } from 'expo';
import { StyleSheet, Text, TextInput,  TouchableOpacity, View,
         Image, AppRegistry, SafeAreaView, FlatList, AsyncStorage
} from 'react-native';
import { Ionicons,Entypo } from '@expo/vector-icons'
import { Avatar, Card, Icon} from 'react-native-elements'
import { AntDesign } from '@expo/vector-icons'; 

export default class Bookmark_Employee extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data:[{title:'ต้องการผู้ช่วยซ่อมเรือดำน้ำxxxxxx', location:'แหลมฉบัง ชลบุรี บ้านเลขที่ 7 หมู่ 11 ซอยอะไรซักอย่าง', profit:'25,000', people:'2'},
                {title:'ต้องการผู้ช่วยซ่อมเรือดำน้ำxxxxxxxxxxx', location:'แหลมฉบัง ชลบุรี บ้านเลขที่ 7 หมู่ 11 ซอยอะไรซักอย่าง', profit:'25,000', people:'2'},
                {title:'ต้องการผู้ช่วยซ่อมเรือดำน้ำxxxxxxxxxxxxxx', location:'แหลมฉบัง ชลบุรี บ้านเลขที่ 7 หมู่ 11 ซอยอะไรซักอย่าง', profit:'25,000', people:'2'},
            ]};
    }
    _renderItem(item){
        return(
            
            <View style={{flex:1, backgroundColor:'#690DBA', flexDirection:'row', borderRadius:10, marginBottom:10}}>
                <TouchableOpacity style={{flex:1, backgroundColor:'transparent', flexDirection:'row'}}
                                   onPress={() => this.props.navigation.navigate('Job_Description_Not_Agree')}>

                    <View style={{ borderRadius:90,justifyContent:'center', margin:10}}>
                        <Image 
                            style={{width:90, height:90, borderRadius:90}}
                            source={require("./image/person.png")}
                        />
                    </View>

                    <View style={{flex:0.9 ,backgroundColor:'transparent', alignSelf:'center', margin:10}}>
                        <Text style={{fontSize:20, color:'white', margin:3}}>{item.title}</Text>
                        <Text style={{fontSize:14, color:'white', margin:3}}>สถานที่ : {item.location}</Text>
                        <Text style={{fontSize:14, color:'white', margin:3}}>ค่าตอบแทน : {item.profit}</Text>
                        <Text style={{fontSize:14, color:'white', margin:3}}>จำนวน : {item.people}</Text>
                    </View>
                </TouchableOpacity>
            </View>
            
        )
    }

    render(){
        return(
            <View style={{flex:1, margin:10, marginTop:37}}>
                <View style={{flex:0.05, backgroundColor:'transparent', flexDirection:'row', margin:10}}>
                    <TouchableOpacity style={{flex:0.15, backgroundColor:'transparent', justifyContent:'center', height:35, width:35}}>
                        <Icon name='menu' />
                    </TouchableOpacity>
                    
                </View>

                {/* Flat list View */}
                
                <View style={{flex:1}}>  
                    <FlatList  
                        data={this.state.data}  
                        renderItem={({item}) =>  this._renderItem(item)}  
                    />  
                </View>  

                <View style={{flex:0.1, backgroundColor:'blue', marginTop:10}}>
                    
                </View>

            </View>
        );
    }
}    