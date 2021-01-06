import * as React from 'react';
import { TouchableOpacity, View ,Text} from 'react-native';

export default class HomePage extends React.Component {
  
    render() {
      return (
        <View style={{flex: 1,}}>
            <View style={{flex:0.9,width: '100%',justifyContent: 'center',alignItems: 'center'}}>
                <TouchableOpacity
                    style={{alignItems:'center',justifyContent:'center',width:283,height:199,backgroundColor:'#720DBA',marginTop:'20%',borderRadius:10}}
                    onPress={() => this.props.navigation.navigate('Annoucement')}
                ><Text style={{color:'#FFFFFF',fontSize:16,fontWeight:'bold'}}>Employer</Text></TouchableOpacity>
                <TouchableOpacity
                    style={{alignItems:'center',justifyContent:'center',width:283,height:199,backgroundColor:'#720DBA',marginTop:'10%',borderRadius:10}}
                    onPress={() => this.props.navigation.navigate('Employee_Login')}
                ><Text style={{color:'#FFFFFF',fontSize:16,fontWeight:'bold'}}>Employee</Text></TouchableOpacity>
            </View>
            <View style={{flex:0.1,width: '100%',justifyContent: 'center',alignItems: 'center'}}/>
          
        </View>
      );
    }
  }

