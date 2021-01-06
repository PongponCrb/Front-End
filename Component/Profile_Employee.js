import * as React from 'react';
import { Image, StyleSheet, FlatList, TouchableOpacity, View ,Text,TextInput,KeyboardAvoidingView, TouchableWithoutFeedback,Keyboard} from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import { ScrollView } from 'react-native-gesture-handler';
import { Icon  } from 'react-native-elements'
import { withSafeAreaInsets } from 'react-native-safe-area-context';

export default class Profile_Employee extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: 'email@example.com',
            tel: '+66 0999493360',
            firstName: 'FirstName',
            lastName: 'LastName',
            age: '25',
            sex: 'Male',
            nation: 'Thailand',
            religion: 'Buddhist',
            degree: 'Bachelor Degree',
            interest :[{num:1, interest:'ช่างยนต์/ช่างกลโรงงาน'},
                        {num:2, interest:'ช่างซ่อมบำรุง'},
                        {num:3, interest:'ช่างอิเล็กทรอนิกส'},
                        {num:4, interest:'ช่างเทคนิค'}],
            university : 'Stanford University',
            major: 'Mechanical Engineering',
            year: '2021',
        };
      }

    render(){
        return(
            <View style={{flex:1, flexDirection:'column', marginTop:32}}>

                <View style={{flex:0.05, alignItems:'flex-start', backgroundColor:'white', flexDirection:'row'}}>
                    <View style={{flex:0.2}}>
                        <TouchableOpacity style={{flex:1,justifyContent:'center',marginLeft:'2%',backgroundColor:'transparent',
                                        width:'50%',height:'50%',borderRadius:10,flexDirection:'row',alignItems:'center'}} 
                                        onPress={()=>this.props.navigation.goBack()}>
                            <AntDesign name="left" size={26} color="black" style={{marginLeft:'5%',marginRight:'10%'}}/>
                        </TouchableOpacity> 
                    </View>

                    <View style={{flex:0.7}}/>
                    
                    <View style={{flex:0.2}}>
                        <TouchableOpacity style={{flex:1, backgroundColor:'#0099FF', justifyContent:'center', borderRadius:20,height:25, width:50,
                                        marginLeft:10, marginTop:10}}
                                        onPress={()=>this.props.navigation.goBack()}>
                            <Text style={{fontSize:12, color:'white', alignSelf:'center'}}>Save</Text>
                        </TouchableOpacity>
                    </View>
                    
                </View>
                
                <View style={{flex:0.4, backgroundColor:'white', alignItems:'center'}}>
                    <View style={{ borderRadius:60}}>
                        <Image 
                            style={{width:140, height:140, margin:5, borderRadius:75}}
                            source={require("./image/person.png")}
                        />
                        <TouchableOpacity style={{width:40, height:40, borderRadius:20, position:'absolute',alignSelf:'flex-end', backgroundColor:'#E6E6E6', marginTop:80, justifyContent:'center'}}>
                            <Image
                                style={{width:30, height:30, borderRadius:10, position:'absolute', alignSelf:'center'}}
                                source={require("./image/camera.png")}
                            />
                        </TouchableOpacity>
                    </View>
                <Text style={{fontSize:26, margin:5}}> {this.state.firstName}  {this.state.lastName} </Text>
                    <Text style={{fontSize:18 , margin:5}}> {this.state.email} </Text>
                    <Text style={{fontSize:14 , margin:5}}> {this.state.tel} </Text>
                </View>



                <View style={{flex:0.65, marginTop:10}}>
                    <ScrollView>

                        <View style={{ backgroundColor:'white', borderWidth:15, borderColor:'transparent'}}>
                            <View style={{flexDirection:'row', alignItems:'center'}}>
                                <Image
                                    source={require('./image/book.png')}
                                />
                                <Text style={{fontSize:20,}}> Education </Text>
                                <View style={{flex:1,alignItems:'flex-end'}}>
                                    <TouchableOpacity style={styles.purpleBtn}
                                                    onPress={() => this.props.navigation.navigate('Education')}>
                                        <Text style={{fontSize:16, color:'white'}}>  Add  </Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={styles.spaceView}/>
                            <View style={{flexDirection:'row'}}>
                                <View style={{flex:0.5}}>
                                    <Text style={{fontSize:14, fontWeight:'bold', margin:3}}>{this.state.university}</Text>
                                    <Text style={{fontSize:14, margin:3}}>{this.state.year}</Text>
                                    <Text style={{fontSize:14, margin:3}}>{this.state.major}</Text>
                                </View>
                                <View style={{flex:0.5, justifyContent:'flex-start', alignItems:'flex-end'}}>
                                    <TouchableOpacity style={{margin:10}}
                                                    onPress={() => this.props.navigation.navigate('Education_Edit')}>
                                        <Image
                                            style={{height:25, width:25}}
                                            source={require('./image/pencil.png')}
                                        />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>

                        <View style={{marginTop:10}}/>

                        <View style={{ backgroundColor:'white', borderWidth:15, borderColor:'transparent'}}>
                            <View style={{flexDirection:'row', alignItems:'center'}}>
                                <Image
                                    style={{height:35, width:35}}
                                    source={require('./image/share.png')}
                                />
                                <Text style={{fontSize:20,}}> Interesting </Text>
                            </View>
                            <View style={styles.spaceView}/>
                            <View style={{flexDirection:'row'}}>
                                <View style={{flex:0.5}}>
                                
                                <FlatList
                                    data={this.state.interest}
                                    keyExtractor={(item, index) => index.toString()}
                                    renderItem={({item}) => <Text style={{fontSize:14, margin:5}}>{item.num}. {item.interest}</Text>
                                        }
                                    style={{marginTop:10,flex:1}}
                                />

                                </View>
                                <View style={{flex:0.5, justifyContent:'flex-start', alignItems:'flex-end'}}>
                                    <TouchableOpacity style={{margin:10}}
                                                        onPress={() => this.props.navigation.navigate('Interesting_Edit')}>
                                                    
                                        <Image
                                            style={{height:25, width:25}}
                                            source={require('./image/pencil.png')}
                                        />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                        
                        <View style={{marginTop:10}}/>

                        <View style={{ backgroundColor:'white', borderWidth:15, borderColor:'transparent'}}>
                            <View style={{flexDirection:'row', alignItems:'center'}}>
                                <Image
                                    style={{height:35, width:35}}
                                    source={require('./image/status.png')}
                                />
                                <Text style={{fontSize:20,}}> Status </Text>
                                <View style={{flex:1,alignItems:'flex-end'}}>
                                    <TouchableOpacity style={styles.purpleBtn}
                                        onPress={() => this.props.navigation.navigate('Status_Edit')}>
                                        <Text style={{fontSize:16, color:'white'}}>  Edit  </Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={styles.spaceView}/>
                            <View style={{flexDirection:'row'}}>
                                <View style={{flex:1}}>
                                    
                                    <View style={{flexDirection:'row'}}>
                                        <Text style={{fontSize:16}}>Age : </Text>
                                        <Text style={styles.fontStatus}> {this.state.age} </Text>
                                    </View> 
                                    <View style={styles.statusLine}/>
                                    <View style={{flexDirection:'row'}}>
                                        <Text style={{fontSize:16}}>Sex :</Text>
                                        <Text style={styles.fontStatus}> {this.state.sex} </Text>
                                    </View>
                                    <View style={styles.statusLine}/>
                                    <View style={{flexDirection:'row'}}>
                                        <Text style={{fontSize:16}}>Nationality : </Text>
                                        <Text style={styles.fontStatus}> {this.state.nation} </Text>
                                    </View>
                                    <View style={styles.statusLine}/>
                                    <View style={{flexDirection:'row'}}>  
                                        <Text style={{fontSize:16}}>Religion : </Text>
                                        <Text style={styles.fontStatus}> {this.state.religion} </Text>
                                    </View>
                                    <View style={styles.statusLine}/>
                                    <View style={{flexDirection:'row'}}>  
                                        <Text style={{fontSize:16}}>Highest Education : </Text>
                                        <Text style={styles.fontStatus}> {this.state.degree} </Text>
                                    </View>
                                    <View style={styles.statusLine}/>

                                </View>
                
                            </View>
                        </View>

                        <View style={{height:50, backgroundColor:'white'}}/>

                    </ScrollView>
                </View>

            </View>
        );
    }
}
const styles = StyleSheet.create({
    statusLine : {
        borderWidth:0.5,
        borderColor:'#B2B3B3', 
        width:'95%', 
        alignSelf:'center', 
        margin:10
    },
    fontStatus : {
        fontSize:16, 
        fontWeight:'bold'
    },
    purpleBtn : {
        backgroundColor:'#720DBA', 
        borderRadius:15, 
        height:30, 
        justifyContent:'center'
    },
    spaceView : {
        borderWidth:1, 
        borderColor:'gray', 
        width:'90%', 
        alignSelf:'center', 
        margin:20
    }
})