import React from 'react';
import Color from '../layout/colors.js';
import VectorIcons from "react-native-vector-icons/AntDesign";
import {View, Text, StyleSheet, TouchableOpacity, TextInput} from 'react-native';
class TextCustomInput extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        const {placeholder, iconname, secureTextEntry, keyboardType, onChangeText} = this.props;
        var key = keyboardType;
        if(key == null){
            key = 'default';
        }
        return (
          
              <View style={styles.inputtext} >
            <VectorIcons 
                name={iconname}
                size ={25} 
                color= {Color[Color.key].thirthcolor}/>
            <TextInput style= {styles.textinputcolor}
            placeholder= {placeholder}
            secureTextEntry={secureTextEntry}
            keyboardType= {key} 
            onChangeText={(text) => {
                if(onChangeText != null){
                    onChangeText(text);
                }
               
            }}/>
        
          </View>
        );
    }
}
const styles = StyleSheet.create({
   
    inputtext:{
        
        flexDirection: 'row',
        padding:5,
        backgroundColor: Color[Color.key].forthcolor,
        borderRadius:10,
        elevation:4,
        alignItems:'center',
        textAlign: 'center',
        marginBottom: 10,
        width:'80%',
        
    },
    textinputcolor: {
        color: Color[Color.key].maincolor,
    }
});
export default TextCustomInput;