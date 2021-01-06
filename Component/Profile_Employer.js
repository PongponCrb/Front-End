import * as React from 'react';
import { Image, StyleSheet, FlatList, TouchableOpacity, View ,Text,TextInput,KeyboardAvoidingView, TouchableWithoutFeedback,Keyboard} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { AntDesign } from '@expo/vector-icons'; 


export default class Profile_Employer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: 'email@example.com',
            tel: '+66 0999493360',
            firstName: 'FirstName',
            lastName: 'LastName',
            companyName : 'S T R(2003) Co.,Ltd',
            information: 'We was founded on July 24, 2003with registered capital of THB 50 millions.We located at 404 Watcharakarn Building,Ladprao 71, Ladprao, Bangkok 10230,Thailand. We provided CommunicationTechnology Solutions and Services which included designation and installation of telecommunication network, IT solutions business, and related Software & Hardware support for Private Enterprises and Government Institutions. ',
            contact:'S T R (2003) Company Limited.Khun Sirirat Boonsirimongkolchai 404 Sukhonthasawat Road,Ladprao District, Bangkok 10230, Thailand Tel : 02-578-8228 #204 Fax : 02-578-8128',
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
                
                <View style={{flex:0.35, backgroundColor:'white', alignItems:'center'}}>
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

                        {/* Information */}
                        <View style={{ backgroundColor:'white', borderWidth:15, borderColor:'transparent'}}>
                            <View style={{flexDirection:'row', alignItems:'center'}}>
                                <Image
                                    source={require('./image/book.png')}
                                />
                                <Text style={{fontSize:20,}}> Company Information </Text>

                            </View>
                            <View style={styles.spaceView}/>
                            <View style={{flexDirection:'row'}}>
                                <View style={{flex:1}}>
                                    <Text style={{fontSize:14, fontWeight:'bold'}}>{this.state.companyName}</Text>
                                    <Text style={{fontSize:14}}>{this.state.information}</Text>

                                </View>
                                <View style={{flex:0.1, justifyContent:'flex-start', alignItems:'flex-start'}}>
                                    <TouchableOpacity style={{margin:0}}
                                                    onPress={() => this.props.navigation.navigate('Company_Information_Edit')}>
                                        <Image
                                            style={{height:25, width:25}}
                                            source={require('./image/pencil.png')}
                                        />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                        {/*End Information*/}

                        <View style={{marginTop:10}}/>

                        {/* Contact */}
                        <View style={{ backgroundColor:'white', borderWidth:15, borderColor:'transparent'}}>
                            <View style={{flexDirection:'row', alignItems:'center'}}>
                                <Image
                                    style={{height:35, width:35}}
                                    source={require('./image/phone.png')}
                                />
                                <Text style={{fontSize:20,}}> Contact </Text>
                            </View>
                            <View style={styles.spaceView}/>
                            <View style={{flexDirection:'row'}}>
                                <View style={{flex:1}}>
                                
                                <Text style={{fontSize:14, margin:5}}>{this.state.contact}</Text>

                                </View>
                                <View style={{flex:0.1, justifyContent:'flex-start', alignItems:'flex-start'}}>
                                    <TouchableOpacity style={{margin:0}}
                                                        onPress={() => this.props.navigation.navigate('Company_Contact_Edit')}>
                                                    
                                        <Image
                                            style={{height:25, width:25}}
                                            source={require('./image/pencil.png')}
                                        />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                        {/*End Contact*/}
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