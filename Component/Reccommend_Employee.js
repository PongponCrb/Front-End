import * as React from 'react';
import { StyleSheet, FlatList, TouchableOpacity, View ,Text,TextInput,KeyboardAvoidingView, TouchableWithoutFeedback,Image} from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import { ScrollView } from 'react-native-gesture-handler';
import { Icon  } from 'react-native-elements'

export default class Reccommend_Employee extends React.Component {
    constructor(props)
    {
        super(props);
        this.state = {
            search:'หางานช่าง',
            datasource: [{title:'title title', firstName:'firstname', lastName:'lastname',rating:'5'}, 
                         {title:'title title title title title title title title title title title title title title title title title', firstName:'firstname', lastName:'lastname', rating:'5'},]
        };
    }
    _renderItem(item){
        return(
            
            <View style={{flex:1, backgroundColor:'#690DBA', flexDirection:'row', borderRadius:10, marginBottom:10, borderWidth:5, borderColor:'#690DBA'}}>
                <TouchableOpacity style={{flex:1, backgroundColor:'transparent', flexDirection:'row'}}
                                   onPress={() => this.props.navigation.navigate('Application_Profile_Not_Apply')}>

                    <View style={{ borderRadius:90,justifyContent:'center', margin:10}}>
                        <Image 
                            style={{width:90, height:90, borderRadius:90}}
                            source={require("./image/person.png")}
                        />
                    </View>

                    <View style={{flex:0.9 ,backgroundColor:'transparent', alignSelf:'center', margin:10}}>
                        <Text style={{fontSize:20, color:'white', margin:3}}>{item.title}</Text>
                        <Text style={{fontSize:14, color:'white', margin:3}}>{item.firstName} {item.lastName}</Text>
                        <Text style={{fontSize:14, color:'white', margin:3}}>Rating : {item.rating}</Text>
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
                    
                </View>

                {/* Flat list View */}
                <View style={{flex:0.9, backgroundColor:'transparent'}}>
                    

                        <FlatList  
                            data={this.state.datasource}  
                            renderItem={({item}) =>  this._renderItem(item)}  
                        />  

                </View>


                <View style={{flex:0.1, backgroundColor:'blue', marginTop:10}}>
                    
                </View>

            </View>
        );
    }
}    