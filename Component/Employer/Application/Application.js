import React from 'react';
import { Constants, ImagePicker, Permissions } from 'expo';
import { StyleSheet, Text, TextInput,  TouchableOpacity, View,
         Image, AppRegistry, SafeAreaView, FlatList, AsyncStorage
} from 'react-native';
import { Ionicons,Entypo } from '@expo/vector-icons'
import { Avatar, Card, Icon} from 'react-native-elements'
import { AntDesign } from '@expo/vector-icons'; 


export default class Application extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data:[{sex:'male', name:'ประสงค์', lastName:'พานทอง', age:'20', star:'5'},
                  {sex:'male', name:'ประยุทธ์', lastName:'จันทร์ดี', age:'22', star:'4.5'}, 
                  {sex:'male', name:'ประสิทธ์', lastName:'หวานใจ', age:'24', star:'4.5'}, 
                  {sex:'male', name:'แดง', lastName:'รักชาติ', age:'26', star:'4'}],
        };
    }
    _renderItem(item){
        return(
            
            <View style={{flex:1, backgroundColor:'#690DBA', flexDirection:'row', borderRadius:10, marginBottom:10}}>
                <TouchableOpacity style={{flex:1, backgroundColor:'transparent', flexDirection:'row'}}
                                   onPress={() => this.props.navigation.navigate('Application_Profile')}>

                    <View style={{ borderRadius:90,justifyContent:'center', margin:10}}>
                        <Image 
                            style={{width:90, height:90, borderRadius:90}}
                            source={require("../../image/person.png")}
                        />
                    </View>

                    <View style={{flex:0.9 ,backgroundColor:'transparent', alignSelf:'center'}}>
                        <Text style={{fontSize:20, color:'white', margin:3}}>{item.name} {item.lastName}</Text>
                        <Text style={{fontSize:18, color:'white', margin:3}}>อายุ : {item.age}</Text>
                        <Text style={{fontSize:14, color:'white', margin:3}}>Rating : {item.star}</Text>
                    </View>
                </TouchableOpacity>
            </View>
            
        )
    }
    render(){
        return(
            <View style={{flex:1,width:'100%',marginTop:37}}>
                <View style={{flex:0.05, alignItems:'flex-start', backgroundColor:'transparent'}}>
                <TouchableOpacity style={{height:'100%',justifyContent:'center',marginLeft:'2%', width:'20%',height:'70%',
                                    borderRadius:10, flexDirection:'row',alignItems:'center'}} 
                                    onPress={()=>this.props.navigation.goBack()}>
                        <AntDesign name="leftcircleo" size={24} color="black" style={{marginLeft:'5%',marginRight:'10%'}}/>
                        <Text>Back</Text>
                    </TouchableOpacity>
                    
                </View>

                <View style={{flex:1, margin:10}}>

                    <FlatList  
                        data={this.state.data}  
                        renderItem={({item}) =>  this._renderItem(item)}  
                    />  

                    </View>
                </View>
        );
    }

}    