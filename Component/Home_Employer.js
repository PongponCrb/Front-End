import * as React from 'react';
import { StyleSheet, FlatList, TouchableOpacity, View ,Text,TextInput,KeyboardAvoidingView, TouchableWithoutFeedback,Keyboard, Image} from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import { ScrollView } from 'react-native-gesture-handler';
import { Icon  } from 'react-native-elements'

export default class Home_Employer extends React.Component {
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
                            source={require("./image/person.png")}
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
            <View style={{flex:1, margin:10, marginTop:37}}>


                <View style={{flex:0.05, backgroundColor:'transparent', flexDirection:'row'}}>
                    <TouchableOpacity style={{flex:0.15, backgroundColor:'transparent', justifyContent:'center', height:35, width:35}}>
                        <Icon name='menu' />
                    </TouchableOpacity>
                    <TextInput style={{flex:0.75, backgroundColor:'transparent', borderRadius:20, padding:10, borderWidth:1, borderColor:'black', height:30, alignSelf:'center'}}>

                    </TextInput>
                    <TouchableOpacity style={{flex:0.15,backgroundColor:'transparent', justifyContent:'center', height:35, width:35}}>
                        <Icon name='search' />
                    </TouchableOpacity>
                </View>
                <View style={{flex:0.05, backgroundColor:'transparent', justifyContent:'flex-end', flexDirection:'row'}}>
                    <TouchableOpacity style={{flex:0.25, backgroundColor:'transparent', justifyContent:'center', flexDirection:'row', margin:5}}>
                        <Text style={{fontSize:16, color:'black', alignSelf:'center'}}>Filter</Text>
                        <Icon style={{alignSelf:'center' , backgroundColor:'transparent', width:25, height:25, marginLeft:5}} name='tune' />
                    </TouchableOpacity>
                </View>

                {/* Flat list View */}
                <View style={{flex:0.8}}>

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