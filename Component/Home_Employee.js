import * as React from 'react';
import { StyleSheet, FlatList, TouchableOpacity, View ,Text,TextInput,KeyboardAvoidingView, TouchableWithoutFeedback,Image} from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import { ScrollView } from 'react-native-gesture-handler';
import { Icon  } from 'react-native-elements'

export default class Home_Employee extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            datasource: [{title:'title', location:'location', profit:'profit'}, 
                        {title:'title', location:'location', profit:'profit'},]
        };
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
                <View style={{flex:0.8, backgroundColor:'transparent'}}>
                    <FlatList
                        data={this.state.datasource}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({item}) => <View style={{flex:1,marginLeft:'2%',width:'96%',marginBottom:20,borderRadius:10}}>
                                                    <TouchableOpacity style={{flex:1, width:'100%', backgroundColor:'#690DBA', borderRadius:10}}
                                                        onPress={() => this.props.navigation.navigate('Job_Description_Not_Agree')}>
                                                        <View style={{marginLeft:'5%',marginTop:'5%'}} >
                                                            <Text style={{color:'white',fontWeight:'bold',fontSize:20}}>{item.title}</Text>
                                                            <Text style={{color:'white',fontWeight:'bold',fontSize:20}}>{item.location}</Text>
                                                            <Text style={{color:'white',fontWeight:'bold',fontSize:20}}>{item.profit}</Text>
                                                        </View>
                                                    </TouchableOpacity>
                                                </View>
                            }
                        style={{marginTop:10,flex:1}}
                    />
                </View>


                <View style={{flex:0.1, backgroundColor:'blue', marginTop:10}}>
                    
                </View>

            </View>
        );
    }
}    