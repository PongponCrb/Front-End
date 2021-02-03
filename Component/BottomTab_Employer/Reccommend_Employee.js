import * as React from 'react';
import { StyleSheet, FlatList, TouchableOpacity, View ,Text,Image} from 'react-native';
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
    
    render(){
        return(
            <View style={{flex:1, margin:10, marginTop:37}}>
                <View style={{flex:0.05, backgroundColor:'transparent', flexDirection:'row'}}>
                    <TouchableOpacity style={{flex:0.15, backgroundColor:'transparent', justifyContent:'center', height:35, width:35}}>
                        <Icon name='menu' />
                    </TouchableOpacity>
                    
                </View>

                {/* Flat list View */}
                <View style={{flex:0.9, backgroundColor:'transparent', marginTop:5}}>
                    

                        

                </View>


            </View>
        );
    }
}    