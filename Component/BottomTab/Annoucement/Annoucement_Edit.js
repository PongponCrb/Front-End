import * as React from 'react';
import { StyleSheet, FlatList, TouchableOpacity, View ,Text,TextInput,KeyboardAvoidingView, TouchableWithoutFeedback,Keyboard, ScrollView} from 'react-native';
import data from '../../data.json';
import DropDownPicker from 'react-native-dropdown-picker';
import RNPickerSelect from 'react-native-picker-select';

export default class Annoucement_Edit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            jobTitle: 'รับซ่อมเครื่องยนต์ทุกชนิด',
            location: 'Si Racha,Chonburi',
            profit: 'ตามตกลง',
            jobTypeShow: 'ช่างซ่อม,ช่าง,ช่างเทคนิค',
            experience : '0 ปี',
            profit: '25,000',
            province:data.province,
            province_value: '0',
            district_value: '0',
            district:[],
            provincePlaceholder:'กรุงเทพมหานคร',
            districtPlaceholder:'เขตดุสิต',
            status: true,
        };
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
    render(){
        return(
            <View style={{flex:1, margin:0, marginTop:32,}}>
                
                <View style={{flex:0.1, justifyContent:'center', backgroundColor:'white', alignItems:'center', flexDirection:'row'}}>
                    <TouchableOpacity 
                        onPress={()=>this.props.navigation.goBack()}
                        style={{ flex:0.15, height:40, justifyContent:'center', margin:10}}> 
                        <Text style={{color:'#720DBA', fontSize:14}}>Cancle</Text>
                    </TouchableOpacity>
                    <View style={{flex:0.85, justifyContent:'center', backgroundColor:'transparent', alignItems:'center'}}>
                        <Text style={{fontSize:24, color:'#720DBA', backgroundColor:'transparent'}}>Annoucement Edit</Text>
                    </View>
                    <TouchableOpacity 
                        onPress={()=>this.props.navigation.goBack()}
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
                                        placeholder={this.state.jobTitle} />
                                </View>
                            
                            <Text style={{fontSize:20, color:"#450887", marginTop:20, marginLeft:10, alignSelf:'flex-start'}}>ประเภทงาน</Text>
                                <View style={{flexDirection:'row', height:50, marginTop:10}}>
                                    <TextInput style={{height: 50, width:'90%',borderColor: 'gray',borderRadius:10 ,
                                        paddingHorizontal:10, backgroundColor:'#EBEBEB', margin:10}}
                                        placeholder={this.state.jobTypeShow} />
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
                                                    <View style={{flexDirection:'row', height:50, marginTop:10, justifyContent:'center'}}>
                                                        <TextInput style={{height: 50, width:'100%',borderColor: 'gray',borderRadius:10 ,
                                                            paddingHorizontal:10, backgroundColor:'#EBEBEB', margin:10}}
                                                            placeholder={this.state.profit} />
                                                    </View>
                                            </View>
                                        </View>

                                    </View>
                            
                            <Text style={{fontSize:20, color:"#450887", marginTop:20, marginLeft:10, alignSelf:'flex-start'}}>ประสบการณ์ทำงาน</Text>
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