import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, TextInput} from 'react-native';
import Color from '../layout/colors.js';

import TextCustomInput from '../componentes/TextInput.js';
import CustomButtons from '../componentes/CustomButtons.js';
import Request from '../server/Request.js';
import {CREATE_USER} from "../server/EndPoints.js";
class CreateUser extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name: "",
            lastname:"",
            email:"",
            password :null,
            repassword: null,
            age: 0,
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
            <View style={{alignItems:'center'}}>
                <TextCustomInput 
                    iconname="pluscircle" 
                    placeholder="Nombre"
                    onChangeText={(txt) => {
                       this.setState({
                         name: txt,
                       });
                    }} />
                <TextCustomInput 
                    iconname="pluscircle" 
                    placeholder="Apellido" 
                    onChangeText={(txt) => {
                        this.setState({
                          lastname: txt,
                        });
                     }}/>
                <TextCustomInput 
                    iconname="pluscircle" 
                    placeholder="Email"
                    onChangeText={(txt) => {
                        this.setState({
                          email: txt,
                        });
                     }} />
                <TextCustomInput 
                    iconname="pluscircle" 
                    placeholder="Password" 
                    secureTextEntry={true}
                    onChangeText={(txt) => {
                        this.setState({
                          password: txt,
                        });
                     }} />
                <TextCustomInput 
                    iconname="pluscircle" 
                    placeholder="Re. Password" 
                    secureTextEntry={true}
                    onChangeText={(txt) => {
                        this.setState({
                          repassword: txt,
                        });
                     }}   />
                <TextCustomInput 
                    iconname="pluscircle" 
                    placeholder="Edad"  
                    keyboardType="numeric"
                    onChangeText={(txt) => {
                       this.setState({
                         age: txt,
                       });
                    }} 
                />
                <CustomButtons 
                title="Crear Usuario"
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
        paddingTop: 50,
    },
});
export default CreateUser; 