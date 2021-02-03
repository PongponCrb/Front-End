import * as React from 'react';
import { Alert, AsyncStorage, TouchableOpacity, View ,Text,TextInput,KeyboardAvoidingView, TouchableWithoutFeedback,Keyboard} from 'react-native';
import {url} from '../../var';
import { ScrollView } from 'react-native-gesture-handler';
import RNPickerSelect from 'react-native-picker-select';
import DropDownPicker from 'react-native-dropdown-picker';
import data from '../../data.json';

export default class Annoucement_Create extends React.Component {


    createAnnoucement = async() => {
        var datap = await AsyncStorage.getItem('data');
        datap = JSON.parse(datap);
        var data = {
            job: this.state.job,
            type: this.state.type,
            location: this.state.location,
            Compensation: this.state.Compensation,
            exper: this.state.exper,
            firstName:datap.firstName,
            lastName:datap.lastName,
            owner:datap.Email
        }
        await fetch(url+'/Employee_Annoucment', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then((response) => response.json()).then((respone) => {
            if(respone.response == 'Pass')
            {
                Alert.alert('เพิ่มสำเร็จ');
            }
            else
            {
                Alert.alert('เพิ่มไม่สำเร็จ!!');
            }
        })
    }

    constructor(props) {
        super(props);
        this.state = {
            job: 'รับซ่อมเครื่องยนต์ทุกชนิด',
            type: 'ช่างซ่อม,ช่าง,ช่างเทคนิค',
            location: 'Si Racha,Chonburi',
            Compensation: '25000',
            exper: '3',
            province:data.province,
            province_value: '0',
            district_value: '0',
            district:[],
            status: true,
            items: [{label: 'Type 1',value: '1',},
            {label: 'Type 2',value: '2',},
            {label: 'Type 3',value: '3',},
            {label: 'Type 4',value: '4',},
            {label: 'Type 5',value: '5',},
            {label: 'Type 6',value: '6',},
        ],
        money: [{label: 'ตามตกลง',value: '1',},
            {label: 'money1-2',value: '2',},
            {label: 'money2-3',value: '3',},
            {label: 'money3-4',value: '4',},
            {label: 'money4-5',value: '5',},
            {label: 'money5-6',value: '6',},
            {label: 'money6-7',value: '7',},
        ]};
    }
    Press(){
        this.setState({status:false})
        if(this.state.province[Number(this.state.province_value)].info == "Krabi"){
          const dis = data.Krabi
          this.setState({district:dis})
        }if(this.state.province[Number(this.state.province_value)].info == "Kanchanaburi"){
          const dis = data.Kanchanaburi
          this.setState({district:dis})
        }if(this.state.province[Number(this.state.province_value)].info == "Kalasin"){
          const dis = data.Kalasin
          this.setState({district:dis})
        }if(this.state.province[Number(this.state.province_value)].info == "Kalasin"){
          const dis = data.Kalasin
          this.setState({district:dis})
        }if(this.state.province[Number(this.state.province_value)].info == "KamphaengPhet"){
          const dis = data.KamphaengPhet
          this.setState({district:dis})
        }if(this.state.province[Number(this.state.province_value)].info == "KhonKaen"){
          const dis = data.KhonKaen
          this.setState({district:dis})
        }if(this.state.province[Number(this.state.province_value)].info == "Chanthaburi"){
          const dis = data.Chanthaburi
          this.setState({district:dis})
        }if(this.state.province[Number(this.state.province_value)].info == "Chachoengsao"){
          const dis = data.Chachoengsao
          this.setState({district:dis})
        }if(this.state.province[Number(this.state.province_value)].info == "ChonBuri"){
          const dis = data.ChonBuri
          this.setState({district:dis})
        }if(this.state.province[Number(this.state.province_value)].info == "ChaiNat"){
          const dis = data.ChaiNat
          this.setState({district:dis})
        }if(this.state.province[Number(this.state.province_value)].info == "Chaiyaphum"){
          const dis = data.Chaiyaphum
          this.setState({district:dis})
        }if(this.state.province[Number(this.state.province_value)].info == "Chumphon"){
          const dis = data.Chumphon
          this.setState({district:dis})
        }if(this.state.province[Number(this.state.province_value)].info == "ChiangRai"){
          const dis = data.ChiangRai
          this.setState({district:dis})
        }if(this.state.province[Number(this.state.province_value)].info == "ChiangMai"){
          const dis = data.ChiangMai
          this.setState({district:dis})
        }if(this.state.province[Number(this.state.province_value)].info == "Trang"){
          const dis = data.Trang
          this.setState({district:dis})
        }if(this.state.province[Number(this.state.province_value)].info == "Trat"){
          const dis = data.Trat
          this.setState({district:dis})
        }if(this.state.province[Number(this.state.province_value)].info == "Tak"){
          const dis = data.Tak
          this.setState({district:dis})
        }if(this.state.province[Number(this.state.province_value)].info == "NakhonNayok"){
          const dis = data.NakhonNayok
          this.setState({district:dis})
        }if(this.state.province[Number(this.state.province_value)].info == "NakhonPathom"){
          const dis = data.NakhonPathom
          this.setState({district:dis})
        }if(this.state.province[Number(this.state.province_value)].info == "NakhonPhanom"){
          const dis = data.NakhonPhanom
          this.setState({district:dis})
        }if(this.state.province[Number(this.state.province_value)].info == "NakhonRatchasima"){
          const dis = data.NakhonRatchasima
          this.setState({district:dis})
        }if(this.state.province[Number(this.state.province_value)].info == "NakhonSiThammarat"){
          const dis = data.NakhonSiThammarat
          this.setState({district:dis})
        }if(this.state.province[Number(this.state.province_value)].info == "NakhonSawan"){
          const dis = data.NakhonSawan
          this.setState({district:dis})
        }if(this.state.province[Number(this.state.province_value)].info == "Nonthaburi"){
          const dis = data.Nonthaburi
          this.setState({district:dis})
        }if(this.state.province[Number(this.state.province_value)].info == "Narathiwat"){
          const dis = data.Narathiwat
          this.setState({district:dis})
        }if(this.state.province[Number(this.state.province_value)].info == "Nan"){
          const dis = data.Nan
          this.setState({district:dis})
        }if(this.state.province[Number(this.state.province_value)].info == "BuengKan"){
          const dis = data.BuengKan
          this.setState({district:dis})
        }if(this.state.province[Number(this.state.province_value)].info == "BuriRam"){
          const dis = data.BuriRam
          this.setState({district:dis})
        }if(this.state.province[Number(this.state.province_value)].info == "PathumThani"){
          const dis = data.PathumThani
          this.setState({district:dis})
        }if(this.state.province[Number(this.state.province_value)].info == "PrachuapKhiriKhan"){
          const dis = data.PrachuapKhiriKhan
          this.setState({district:dis})
        }if(this.state.province[Number(this.state.province_value)].info == "PrachinBuri"){
          const dis = data.PrachinBuri
          this.setState({district:dis})
        }if(this.state.province[Number(this.state.province_value)].info == "Pattani"){
          const dis = data.Pattani
          this.setState({district:dis})
        }if(this.state.province[Number(this.state.province_value)].info == "PhraNakhonSiAyutthaya"){
          const dis = data.PhraNakhonSiAyutthaya
          this.setState({district:dis})
        }if(this.state.province[Number(this.state.province_value)].info == "Phangnga"){
          const dis = data.Phangnga
          this.setState({district:dis})
        }if(this.state.province[Number(this.state.province_value)].info == "Phatthalung"){
          const dis = data.Phatthalung
          this.setState({district:dis})
        }if(this.state.province[Number(this.state.province_value)].info == "Phichit"){
          const dis = data.Phichit
          this.setState({district:dis})
        }if(this.state.province[Number(this.state.province_value)].info == "Phetchaburi"){
          const dis = data.Phetchaburi
          this.setState({district:dis})
        }if(this.state.province[Number(this.state.province_value)].info == "Phetchabun"){
          const dis = data.Phetchabun
          this.setState({district:dis})
        }if(this.state.province[Number(this.state.province_value)].info == "Phrae"){
          const dis = data.Phrae
          this.setState({district:dis})
        }if(this.state.province[Number(this.state.province_value)].info == "Phayao"){
          const dis = data.Phayao
          this.setState({district:dis})
        }if(this.state.province[Number(this.state.province_value)].info == "Phuket"){
          const dis = data.Phuket
          this.setState({district:dis})
        }if(this.state.province[Number(this.state.province_value)].info == "MahaSarakham"){
          const dis = data.MahaSarakham
          this.setState({district:dis})
        }if(this.state.province[Number(this.state.province_value)].info == "Mukdahan"){
          const dis = data.Mukdahan
          this.setState({district:dis})
        }if(this.state.province[Number(this.state.province_value)].info == "MaeHongSon"){
          const dis = data.MaeHongSon
          this.setState({district:dis})
        }if(this.state.province[Number(this.state.province_value)].info == "Yala"){
          const dis = data.Yala
          this.setState({district:dis})
        }if(this.state.province[Number(this.state.province_value)].info == "Yasothon"){
          const dis = data.Yasothon
          this.setState({district:dis})
        }if(this.state.province[Number(this.state.province_value)].info == "RoiEt"){
          const dis = data.RoiEt
          this.setState({district:dis})
        }if(this.state.province[Number(this.state.province_value)].info == "Ranong"){
          const dis = data.Ranong
          this.setState({district:dis})
        }if(this.state.province[Number(this.state.province_value)].info == "Rayong"){
          const dis = data.Rayong
          this.setState({district:dis})
        }if(this.state.province[Number(this.state.province_value)].info == "Ratchaburi"){
          const dis = data.Ratchaburi
          this.setState({district:dis})
        }if(this.state.province[Number(this.state.province_value)].info == "LopBuri"){
          const dis = data.LopBuri
          this.setState({district:dis})
        }if(this.state.province[Number(this.state.province_value)].info == "Lampang"){
          const dis = data.Lampang
          this.setState({district:dis})
        }if(this.state.province[Number(this.state.province_value)].info == "Lamphun"){
          const dis = data.Lamphun
          this.setState({district:dis})
        }if(this.state.province[Number(this.state.province_value)].info == "Loei"){
          const dis = data.Loei
          this.setState({district:dis})
        }if(this.state.province[Number(this.state.province_value)].info == "SiSaKet"){
          const dis = data.SiSaKet
          this.setState({district:dis})
        }if(this.state.province[Number(this.state.province_value)].info == "SakonNakhon"){
          const dis = data.SakonNakhon
          this.setState({district:dis})
        }if(this.state.province[Number(this.state.province_value)].info == "Songkhla"){
          const dis = data.Songkhla
          this.setState({district:dis})
        }if(this.state.province[Number(this.state.province_value)].info == "Satun"){
          const dis = data.Satun
          this.setState({district:dis})
        }if(this.state.province[Number(this.state.province_value)].info == "SamutPrakarn"){
          const dis = data.SamutPrakarn
          this.setState({district:dis})
        }if(this.state.province[Number(this.state.province_value)].info == "SamutSongkhram"){
          const dis = data.SamutSongkhram
          this.setState({district:dis})
        }if(this.state.province[Number(this.state.province_value)].info == "SamutSakhon"){
          const dis = data.SamutSakhon
          this.setState({district:dis})
        }if(this.state.province[Number(this.state.province_value)].info == "Sakaeo"){
          const dis = data.Sakaeo
          this.setState({district:dis})
        }if(this.state.province[Number(this.state.province_value)].info == "Saraburi"){
          const dis = data.Saraburi
          this.setState({district:dis})
        }if(this.state.province[Number(this.state.province_value)].info == "SingBuri"){
          const dis = data.SingBuri
          this.setState({district:dis})
        }if(this.state.province[Number(this.state.province_value)].info == "Sukhothai"){
          const dis = data.Sukhothai
          this.setState({district:dis})
        }if(this.state.province[Number(this.state.province_value)].info == "SuphanBuri"){
          const dis = data.SuphanBuri
          this.setState({district:dis})
        }if(this.state.province[Number(this.state.province_value)].info == "SuratThani"){
          const dis = data.SuratThani
          this.setState({district:dis})
        }if(this.state.province[Number(this.state.province_value)].info == "Surin"){
          const dis = data.Surin
          this.setState({district:dis})
        }if(this.state.province[Number(this.state.province_value)].info == "NongKhai"){
          const dis = data.NongKhai
          this.setState({district:dis})
        }if(this.state.province[Number(this.state.province_value)].info == "NongBuaLamPhu"){
          const dis = data.NongBuaLamPhu
          this.setState({district:dis})
        }if(this.state.province[Number(this.state.province_value)].info == "AngThong"){
          const dis = data.AngThong
          this.setState({district:dis})
        }if(this.state.province[Number(this.state.province_value)].info == "UdonThani"){
          const dis = data.UdonThani
          this.setState({district:dis})
        }if(this.state.province[Number(this.state.province_value)].info == "UthaiThani"){
          const dis = data.UthaiThani
          this.setState({district:dis})
        }if(this.state.province[Number(this.state.province_value)].info == "Uttaradit"){
          const dis = data.Uttaradit
          this.setState({district:dis})
        }if(this.state.province[Number(this.state.province_value)].info == "UbonRatchathani"){
          const dis = data.UbonRatchathani
          this.setState({district:dis})
        }if(this.state.province[Number(this.state.province_value)].info == "AmnatCharoen"){
          const dis = data.AmnatCharoen
          this.setState({district:dis})
        }if(this.state.province[Number(this.state.province_value)].info == "bangkok"){
          const dis = data.bangkok
          this.setState({district:dis})
        }
        
        
      }
    onChangejob = (text) => {
        this.setState({job:text});
    }

    onChangetype = (text) => {
        this.setState({type:text});
    }

    onChangelocation = (text) => {
        this.setState({location:text});
    }

    onChangeCompensation = (text) => {
        this.setState({Compensation:text});
    }
    
    onChangeexper = (text) => {
        this.setState({exper:text})
    }
    onCreate = async() => {
        this.createAnnoucement()
        this.props.navigation.goBack()
    }
    render(){
        return(
            <View style={{flex:1, marginTop:37}}>

                <View style={{flex:0.1, justifyContent:'center', backgroundColor:'white', alignItems:'center', flexDirection:'row'}}>
                    <TouchableOpacity 
                        onPress={()=>this.props.navigation.goBack()}
                        style={{ flex:0.15, height:40, justifyContent:'center', margin:10}}> 
                        <Text style={{color:'#720DBA', fontSize:14}}>Cancle</Text>
                    </TouchableOpacity>
                    <View style={{flex:0.85, justifyContent:'center', backgroundColor:'transparent', alignItems:'center'}}>
                        <Text style={{fontSize:24, color:'#720DBA', backgroundColor:'transparent'}}>Annoucement</Text>
                    </View>
                    <TouchableOpacity 
                        onPress={()=>this.onCreate()}
                        style={{ flex:0.15, height:40, justifyContent:'center', margin:5}}> 
                        <Text style={{color:'#720DBA', fontSize:14}}>Save</Text>
                    </TouchableOpacity>
                </View>

                <View style={{flex:1, backgroundColor:'white'}}>
                    <ScrollView>
                    <View style={{flex:0.9, backgroundColor:'white', alignItems:'center'}}>
                        <Text style={{fontSize:20, color:"#450887", marginTop:20, marginLeft:10, alignSelf:'flex-start'}}>งานที่ต้องการ</Text>
                            <View style={{flexDirection:'row', height:50, marginTop:10}}>
                                <TextInput style={{height: 50, width:'90%',borderColor: 'gray',borderRadius:10 ,
                                    paddingHorizontal:10, backgroundColor:'#EBEBEB', margin:10}} 
                                    onChangeText={text => this.setState({position:text})}/>
                            </View>
                        
                            <Text style={{fontSize:20, color:"#450887", marginTop:20, marginLeft:10, alignSelf:'flex-start'}}>ประเภทงาน</Text>
                                <View style={{height: 50, width:'90%',borderColor: 'gray',borderRadius:10 ,
                                    paddingHorizontal:10, backgroundColor:'#EBEBEB', margin:10, justifyContent:'center'}}>
                                    <RNPickerSelect
                                        placeholder={{
                                            label: 'Select a type...',
                                            value: null,
                                            fontSize: 24
                                        }}
                                            items={this.state.items}
                                            onValueChange={(value) => {this.setState({ jobType: value,});
                                        }}
                                        style={{ fontSize: 24,paddingTop: 13,paddingHorizontal: 10,paddingBottom: 12,borderWidth: 1,
                                                borderColor: 'gray', borderRadius: 4, backgroundColor: 'white', color: 'black'}}
                                        value={this.state.jobType}
                                    />
                                </View>
                            <Text style={{fontSize:20, color:"#450887", marginTop:30, marginLeft:10, alignSelf:'flex-start'}}>สถานที่ทำงาน</Text>
                            <View style={{flex:1, marginTop:10, width:'95%'}}>
                                <View style={{flex:0.85, margin:10}}>
                                    <DropDownPicker
                                        items={this.state.province}
                                        defaultValue={data.value}
                                        containerStyle={{height: 50}}
                                        style={{width:'100%'}}
                                        itemStyle={{ justifyContent: 'flex-start' }}
                                        dropDownStyle={{width:'100%'}}
                                        placeholder="Province"
                                        labelStyle={{color:'black'}}
                                        searchable={true} 
                                        searchablePlaceholder="Search for a province"
                                        searchablePlaceholderTextColor="gray"
                                        placeholderStyle={{ fontWeight: 'bold',  textAlign: 'center', color:'black'}}
                                        onChangeItem={item => this.setState({ province_value: item.value })}
                                    />
                                    <View style={{flex:0.15, alignSelf:'flex-end', margin:10}}>
                                        <TouchableOpacity style={{borderWidth:0.5, borderRadius:10, justifyContent:'center' ,width:50, height:30}}
                                                            onPress={()=>this.Press()}>
                                            <Text style={{alignSelf:'center'}}> OK </Text>
                                        </TouchableOpacity>

                                    </View>

                                    <View style={{flex:1, margin:10, width:'100%', alignSelf:'center'}}>
                                        <DropDownPicker
                                            items={this.state.district}
                                            defaultValue={data.value}
                                            disabled={this.state.status}
                                            containerStyle={{height: 50}}
                                            style={{width:'100%'}}
                                            itemStyle={{ justifyContent: 'flex-start' }}
                                            dropDownStyle={{width:'100%'}}
                                            placeholder="District"
                                            labelStyle={{color:'black'}}
                                            searchable={true} 
                                            searchablePlaceholder="Search for a district"
                                            searchablePlaceholderTextColor="gray"
                                            placeholderStyle={{ fontWeight: 'bold',  textAlign: 'center' , color:'black'}}
                                            onChangeItem={item => this.setState({ district_value: item.value })}
                                        /> 
                                        <Text style={{fontSize:20, color:"#450887", marginTop:20, marginLeft:10, alignSelf:'flex-start'}}>ค่าตอบแทน</Text>
                                            <View style={{height: 50, width:'100%',borderColor: 'gray',borderRadius:10 , alignSelf:'center',
                                                    paddingHorizontal:10, backgroundColor:'#EBEBEB', margin:10, justifyContent:'center'}}>
                                                <RNPickerSelect
                                                    placeholder={{
                                                        label: 'Select a compensation...',
                                                        value: null,
                                                        fontSize: 24
                                                    }}
                                                        items={this.state.money}
                                                        onValueChange={(value) => {this.setState({ Compensation : value,});
                                                    }}
                                                    style={{ fontSize: 24,paddingTop: 13,paddingHorizontal: 10,paddingBottom: 12,borderWidth: 1,
                                                            borderColor: 'gray', borderRadius: 4, backgroundColor: 'white', color: 'black'}}
                                                    value={this.state.Compensation}
                                                />
                                            </View>
                                    </View>
                                </View>
                            </View>
                            <Text style={{fontSize:20, color:"#450887", marginTop:10, marginLeft:10, alignSelf:'flex-start'}}>ประสบการณ์ทำงาน</Text>
                                        <View style={{flexDirection:'row', height:50, marginTop:10}}>
                                            <TextInput style={{height: 50, width:'90%',borderColor: 'gray',borderRadius:10 ,
                                                paddingHorizontal:10, backgroundColor:'#EBEBEB', margin:10}}
                                                placeholder={this.state.experience} />
                                        </View>
                        <View style={{height:100, backgroundColor:'white'}} />
                    </View>
                    </ScrollView>
                </View>  
 
            </View>
        );
    }
}    