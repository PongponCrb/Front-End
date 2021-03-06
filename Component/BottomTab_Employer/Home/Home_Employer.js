import * as React from 'react';
import { AsyncStorage,Alert, FlatList, TouchableOpacity, View ,Keyboard,TextInput,Text,Image} from 'react-native';
import { Icon  } from 'react-native-elements'
import AntIcon from "react-native-vector-icons/AntDesign";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {url} from '../../var.js'
export default class Home_Employee extends React.Component {

    constructor(props)
    {
        super(props);
        this.state = {
            search:'หางานช่าง',
            datasource: []
        };
        this.getAnnouncement();
        //this.RedirectAuth();

    }

    getAnnouncement = async() => {
        var email = await AsyncStorage.getItem('email')
        console.log(email)
        await fetch(url+'/Employee_Annoucment?want=all', {
            method: 'GET',
        }).then((response) => response.json()).then((respone) => {
            if(respone.response == 'Pass')
            {
                var datax = [];
                var x = JSON.parse(respone.data);
                this.setState({datasource:x});
                console.log(this.state.datasource)
                
            }
            else
            {
                Alert.alert('กรุณาลองอีกครั้ง!!');
            }
        })
    }


    RedirectAuth = async () => {
        var value = await AsyncStorage.getItem('login');
        var mode = await AsyncStorage.getItem('mode');
        console.log(value+' '+mode)
        if(value == 'yes')
        {
          if(mode == 'Employee')
          {
            this.props.navigation.reset({
                index: 0,
                routes: [{ name: 'Employee' }],
              });
          }
          
        }
      }
    
    
    onChangesearch = (Text)=>{
        this.setState({search:Text});
    }

    onSearch = async () =>{
        console.log(this.state.search);
        await fetch(url+'/search_job?search='+this.state.search,{method: 'GET'})
        .then((response) => response.json())
        .then((json) => {
         
          var obj = [];
          for (let userObject of json.response) {
            obj.push(userObject);
          }
          this.setState({datasource:obj});
          console.log(this.state.datasource)
        })
          .catch(err => {
              console.log(err);
              Alert.alert('กรุณาลองอีกครั้ง');
        });
    }
    render(){
        return(
            <View style={{flex:1,marginTop:37}}>
                <View style={{flex:0.15, flexDirection:'row',height:'20%',width:'100%',alignItems:'flex-start'}}>
                    <View style={{flexDirection:'column'}}>
                        <View style={{flexDirection:'row'}}>
                            <TouchableOpacity style={{backgroundColor:'#0099FF',justifyContent:'center',backgroundColor:'transparent', width:'10%',margin:5}} onPress={() => this.props.navigation.toggleDrawer()}>
                                <Icon name='menu' />
                            </TouchableOpacity>
                            <TextInput style={{height: 40, width:'74%',borderColor: 'gray', borderWidth: 1,borderRadius:10 ,backgroundColor:'#EBEBEB',paddingHorizontal: 10,}} 
                            placeholder="กรุณากรอกข้อมูลที่ต้องการค้นหา" onSubmitEditing={Keyboard.dismiss} placeholderTextColor='#AAAAAA' onChangeText = {text => this.onChangesearch(text)}/>
                            <TouchableOpacity onPress={()=>this.onSearch()} style={{alignItems:'center',justifyContent:'center',backgroundColor:'transparent', width:'10%',margin:5}}>
                                <AntIcon name="search1" color="black" size={25} />
                            </TouchableOpacity>
                        </View>
                        <View style={{height:40,padding:5,alignItems:'flex-end',marginTop:10}}>
                            <TouchableOpacity style={{ borderRadius:10,justifyContent:'center',alignItems:'center',marginBottom:'3%',width:'20%',height:'100%'}} onPress={()=>this.onSearch()} >
                                <View style={{height:'100%',flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                                    <Text style={{fontSize:16, color:'black', alignSelf:'center'}}>Filter</Text>
                                    <MaterialCommunityIcons name="tune" size={24} color="black" />
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                <View style={{flex:1}}>
                    <FlatList
                        data={this.state.datasource}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({item}) => 
                                                    <TouchableOpacity style={{width:'90%',borderColor: 'gray', borderWidth: 1,borderRadius:10 ,
                                paddingHorizontal:10, backgroundColor:'#6914B3', alignSelf:'center', margin:10}}
                                onPress={() => this.props.navigation.navigate('Annoucement_Profile')}>
                                <View style={{flex:1, flexDirection:'row'}}>
                                    <View style={{ justifyContent:'center'}}>
                                        <View style={{ borderRadius:60, margin:5}}>
                                            <Image 
                                                style={{width:80, height:80, borderRadius:80}}
                                                source={require("../../image/person.png")}
                                            />
                                        </View>
                                    </View>

                                    <View style={{felx:1 ,margin:5, marginTop:15, marginBottom:15, width:220}}>
                                        <Text style={{fontSize:20,marginLeft:5, color:'white', margin:1,fontWeight:'bold'}}>{item.job}</Text>
                                        <Text style={{fontSize:18,marginLeft:5, color:'white', margin:1}}>{item.firstName} {item.lastName}</Text>
                                        <Text style={{fontSize:16,marginLeft:5, color:'white', margin:1}}>อายุ : {item.age}</Text>
                                    </View>
                                </View>
                        </TouchableOpacity>

                            }
                        style={{marginTop:5,flex:1}}
                    />
                    </View>
                </View>
        );
    }

    
}    