import * as React from 'react';
import { Image, StyleSheet, FlatList, TouchableOpacity, View ,Text,TextInput,KeyboardAvoidingView, TouchableWithoutFeedback,Keyboard} from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import { ScrollView } from 'react-native-gesture-handler';
import { Icon } from 'react-native-elements'

export default class Hiring_Profile extends React.Component {
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
            gpa: '4.00',
            degree: 'ปริญญาตรี',
            jobTitle: 'รับซ่อมเครื่องยนต์ทุกชนิด',
            location: 'Si Racha,Chonburi',
            profit: 'ตามตกลง',
            jobType: ['ช่างซ่อม','ช่าง','ช่งเทคนิค'],
            jobTypeShow: 'ช่างซ่อม,ช่าง,ช่างเทคนิค',
            experience : 0,
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
            <View style={{flex:1, flexDirection:'column'}}>
                <View style={{flex:0.1}}>
                    <TouchableOpacity style={{ height:50,justifyContent:'center',marginLeft:'2%',backgroundColor:'transparent',
                                        opacity:10,width:40,borderRadius:10,flexDirection:'row',alignItems:'center', marginTop:30}} 
                                        onPress={()=>this.props.navigation.goBack()}>
                            <AntDesign name="left" size={26} color="black" style={{marginLeft:'5%',marginRight:'10%'}}/>
                    </TouchableOpacity> 
                </View>
                <View style={{flex:0.25, alignItems:'center', flexDirection:'row'}}>
                    
                    <View style={{flex:0.7, borderRadius:60, marginTop:0, alignItems:'flex-end'}}>
                        <Image 
                            style={{width:140, height:140, margin:5, borderRadius:75}}
                            source={require("../../image/person.png")}
                        />
                    </View>
                    <View style={{flex:0.3, alignSelf:'flex-end'}}>
                        <TouchableOpacity style={{flex:1, alignSelf:'flex-end', margin:20}}
                                                    onPress={() => this.pressBookmark()}>
                                    <Icon name='bookmark' type='font-awesome-5' color={this.state.bookmarkColor} size={30} solid={this.state.bookmarkSolid} />

                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{flex:0.75, marginTop:10}}>
                    <ScrollView style={{backgroundColor:'white'}}>

                        {/* Education */}
                        <View style={{ backgroundColor:'#7400BD', borderWidth:15, borderColor:'transparent'}}>
                            <Text style={{fontSize:20, color:'white', margin:3}}>{this.state.jobTitle}</Text>
                            <Text style={{fontSize:18, color:'white', margin:3}}>ชื่อ-นามสกุล : {this.state.firstName} {this.state.lastName}</Text>
                            <Text style={{fontSize:14, color:'white', margin:3}}>อายุ : {this.state.age}</Text>
                            <Text style={{fontSize:14, color:'white', margin:3}}>เพศ : {this.state.sex}</Text>
                            <Text style={{fontSize:14, color:'white', margin:3}}>พื้นที่ที่ต้องการ : {this.state.location}</Text>
                            <Text style={{fontSize:14, color:'white', margin:3}}>ค่าตอบแทน : {this.state.profit}</Text>
                            <Text style={{fontSize:14, color:'white', margin:3}}>ประเภทงาน : {this.state.jobTypeShow}</Text>

                        </View>

                        <View style={{marginTop:10}}/>

                        <View style={{ backgroundColor:'white', borderWidth:15, borderColor:'transparent'}}>
                            <View style={{flexDirection:'row'}}>
                                <Text style={{fontSize:20, width:'85%'}}>ข้อมูลการศึกษา</Text>
                            </View>
                            
                            <Text style={{fontSize:14, margin: 3}}>มหาวิทยาลัย : {this.state.university}</Text>
                            <Text style={{fontSize:14, margin: 3}}>ระดับการศึกษา : {this.state.degree}</Text>
                            <Text style={{fontSize:14, margin: 3}}>สาขา : {this.state.major}</Text>
                            <Text style={{fontSize:14, margin: 3}}>ปีที่จบ : {this.state.year}</Text>
                            <Text style={{fontSize:14, margin: 3}}>เกรดเฉลี่ย : {this.state.gpa}</Text>

                            <View style={{margin: 20, borderWidth:1, backgroundColor:'gray'}}></View>

                            <View >
                                <Text style={{fontSize:20, width:'85%'}}>งานที่ต้องการ</Text>
                            </View>
                            
                            <FlatList
                                data={this.state.interest}
                                keyExtractor={(item, index) => index.toString()}
                                renderItem={({item}) => <Text style={{fontSize:14, margin:5}}>{item.num}. {item.interest}</Text>
                                    }
                                style={{marginTop:10,flex:1}}
                            />
                            <View style={{margin: 20, borderWidth:1, backgroundColor:'gray'}}></View>

                            <View >
                                <Text style={{fontSize:20, width:'85%'}}>ประสบการณ์ทำงาน</Text>
                            </View>
                            <Text style={{fontSize:14, margin: 3}}>{this.state.experience} ปี</Text>

                            
                        </View>

                        <View style={{flex:1, alignItems:'center', backgroundColor:'transparent'}}>
                            <View style={{flex:0.5, alignItems:'center', margin:10}}
                                onPress={() => this.props.navigation.navigate('Contact')}>
                                <TouchableOpacity style={{width:135, height:45, backgroundColor:'#152D65', borderRadius:10, justifyContent:'center'}}
                                    onPress={() => this.props.navigation.navigate('Contact')}>
                                    <Text style={{fontSize:16, color:'white', alignSelf:'center'}}>Contact</Text>
                                </TouchableOpacity>
                            </View>

                            
                        </View>
                        <View style={{height:50}}/>
                        


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