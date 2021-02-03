import * as React from 'react';
import { StyleSheet, FlatList, TouchableOpacity, View ,Text,TextInput,KeyboardAvoidingView, TouchableWithoutFeedback,Keyboard} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';


export default class Education_Edit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            level: "Degree",
            university: "Stanford University",
            faculty: "Mechanical Engineering",
            year: 2020,
            grade: 3.55,
            items: [
                {
                    label: '1999',
                    value: '1',
                },
                {
                    label: '2000',
                    value: '2',
                },
                {
                    label: '2001',
                    value: '3',
                },
                {
                    label: '2002',
                    value: '4',
                },
                {
                    label: '2003',
                    value: '5',
                },
                {
                    label: '2004',
                    value: '6',
                },
            ],
            levels: [
                {
                    label: 'ปริญญาเอก',
                    value: '1',
                },
                {
                    label: 'ปริญญาโท',
                    value: '2',
                },
                {
                    label: 'ปริญญาตรี',
                    value: '3',
                },
                {
                    label: 'ปวช.',
                    value: '4',
                },
                {
                    label: 'ปวศ.',
                    value: '5',
                },
                {
                    label: 'กศน.',
                    value: '6',
                },
            ],
        };
      }
    render(){
        return(
            <View style={{flex:1, marginTop:32}}>

                <View style={{marginLeft:10,flex:0.1, justifyContent:'center', backgroundColor:'transparent', alignItems:'center', flexDirection:'row'}}>
                    <TouchableOpacity 
                        onPress={()=>this.props.navigation.navigate('Profile')}
                        style={{ flex:0.15, height:40, justifyContent:'center', margin:5}}> 
                        <Text style={{color:'#720DBA', fontSize:14}}>Cancle</Text>
                        
                    </TouchableOpacity>

                    <View style={{flex:0.85, justifyContent:'center', backgroundColor:'transparent', alignItems:'center'}}>
                        <Text style={{fontSize:24, color:'#720DBA', backgroundColor:'transparent'}}>Education</Text>
                    </View>

                    <TouchableOpacity 
                        onPress={()=>this.props.navigation.navigate('Profile')}
                        style={{ flex:0.15, height:40, justifyContent:'center', margin:5}}> 
                        <Text style={{color:'#720DBA', fontSize:14}}>Save</Text>
                    </TouchableOpacity>
                </View>

                <View style={{flex:0.9, backgroundColor:'#EBEBEB', alignItems:'center'}}>
                    <View style={{flexDirection:'row', backgroundColor:'white', height:50, marginTop:10, width:'95%',
                                borderColor:'#EBEBEB', paddingHorizontal:10, alignItems:'center', justifyContent:'center'}}>
                        <View style={{flex:1, alignItems:'flex-end', height:'100%', justifyContent:'center', margin:10}}>
                            <RNPickerSelect
                                placeholder={{
                                    label: this.state.level,
                                    value: null,
                                    fontSize: 28,
                                }}
                                    items={this.state.levels}
                                    onValueChange={(value) => {this.setState({ level: value});
                                }}
                                style={{ fontSize: 28,paddingTop: 13,paddingHorizontal: 10,paddingBottom: 12,borderWidth: 1,
                                        borderColor: 'gray', borderRadius: 4 ,color: 'black', alignItem:'flex-end'}}
                                value={this.state.level}

                            />
                        </View>
                    </View>

                    <View style={{flexDirection:'row', backgroundColor:'white', height:50, marginTop:10, width:'95%',
                                borderColor:'#EBEBEB', paddingHorizontal:10, alignItems:'center'}}>
                        <TextInput style={{ margin:10}}
                                placeholder={this.state.university} placeholderTextColor='#AAAAAA' />
                    </View>

                    <View style={{flexDirection:'row', backgroundColor:'white', height:50, marginTop:10, width:'95%',
                                borderColor:'#EBEBEB', paddingHorizontal:10, alignItems:'center'}}>
                        <TextInput style={{ margin:10}}
                                placeholder={this.state.faculty} placeholderTextColor='#AAAAAA' />
                    </View>

                    <View style={{flexDirection:'row', backgroundColor:'white', height:50, marginTop:30, width:'95%',
                                borderColor:'#EBEBEB', paddingHorizontal:10, alignItems:'center'}}>
                        <Text>Year of Graduation</Text>
                        <View style={{flex:1}}/>
                        <View style={{flex:1, alignItems:'flex-end', height:'100%', justifyContent:'center'}}>
                            <RNPickerSelect
                                placeholder={{
                                    label: 'ปีที่จบการศึกษา',
                                    value: null,
                                    fontSize: 28,
                                }}
                                    items={this.state.items}
                                    onValueChange={(value) => {this.setState({ year: value});
                                }}
                                style={{ fontSize: 28,paddingTop: 13,paddingHorizontal: 10,paddingBottom: 12,borderWidth: 1,
                                        borderColor: 'gray', borderRadius: 4 ,color: 'black', alignItem:'flex-end'}}
                                value={this.state.year}

                            />
                        </View>
                    </View>

                    <View style={{flexDirection:'row', backgroundColor:'white', height:50, marginTop:30, width:'95%',
                                borderColor:'#EBEBEB', paddingHorizontal:10, alignItems:'center'}}>
                        <Text>Grade (Optional)</Text>
                        <View style={{flex:1, alignItems:'flex-end'}}>
                                <TextInput style={{fontSize:16}}>{this.state.grade}</TextInput>
                        </View>
                    </View>
                </View>    

            </View>
        );
    }
}    