import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, TextInput} from 'react-native';
import Color from '../layout/colors.js';

import TextCustomInput from '../componentes/TextInput.js';
import CustomButtons from '../componentes/CustomButtons.js';
import Request from '../server/Request.js';
import {CREATE_USER} from "../server/EndPoints.js";
class CreateTareas extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name: "",
            description:"",
            hour:"",
        }
    }
    componentDidMount(){}
    registerData(){
        console.log(this.state);
        var req = new Request('post', CREATE_USER, this.state, (response) => {
            if(response.status == 200){
                alert('usuario registrado');
            }
        });
        req.start();
    }
    render(){
        return (<View style = {styles.container}>
            <View style={{alignItems:'center',}}>
                <TextCustomInput 
                    iconname="pluscircle" 
                    placeholder="Tarea"
                    onChangeText={(txt) => {
                       this.setState({
                         name: txt,
                       });
                    }} />
                <TextCustomInput 
                    iconname="pluscircle" 
                    placeholder="Descripcion" 
                    onChangeText={(txt) => {
                        this.setState({
                          description: txt,
                        });
                     }}/>
                <TextCustomInput 
                    iconname="pluscircle" 
                    placeholder="Hecho"
                    onChangeText={(txt) => {
                        this.setState({
                          hour: txt,
                        });
                     }} />
                
                <CustomButtons 
                title="Crear Tarea"
                onPress={( )=> {
                    this.registerData();
                }} />  
            </View>
        </View>
        );
    }
}
const styles = StyleSheet.create({
    container :{
        flex: 1,
        backgroundColor: Color[Color.key].maincolor,
        paddingTop:50,
    },
});
export default CreateTareas; 