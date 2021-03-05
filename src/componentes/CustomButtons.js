import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import VectorIcons from 'react-native-vector-icons/AntDesign';
import Color from '../layout/colors.js';
class CustomButtons extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        const {title, iconname, onPress}= this.props
        var icon = iconname;
        if(icon == null){
            icon='checksquare';
        }
        return (
            <TouchableOpacity 
            style={styles.btnstyles}
            onPress={() =>{
                onPress();
            }} >
                <VectorIcons 
                    name={icon} 
                    size={24} 
                    color={Color[Color.key].fourthcolor} />
                <Text style={styles.txt}>{title}</Text>
            </TouchableOpacity>
        );
    }
}
const styles  = StyleSheet.create({
    btnstyles:{
        backgroundColor:Color[Color.key].forthcolor,
        flexDirection: 'row',
        padding: 15,
        width:'40%',
        alignContent:'center',
        justifyContent: 'center',
        borderRadius:20,
    },
    txt: {
        color: Color[Color.key].maincolor,
        marginLeft:10,
    }
});
export default CustomButtons;