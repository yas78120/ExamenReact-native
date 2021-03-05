import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, FlatList} from 'react-native';
import Request from '../server/Request.js';
import {SHOW_TAREAS} from '../server/EndPoints.js';
import Item from '../componentes/item.js';
import Color from '../layout/colors.js';
class ListTareas extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            list:[],
        }
    }
    componentDidMount(){
        var request =  new Request('get', SHOW_TAREAS, {}, (response)=>{
            if(response.status== 200){
                this.setState({
                    list:response.data,
                })
            }
        });
        request.start();
    }
    render(){
        return (<View style = {styles.container}>   
            <View style={{
                alignItems:'center',
                backgroundColor: Color[Color.key2].forthcolor,
                height:50,
                alignContent:'center',
            }}>
                <Text style={{
                    color: Color[Color.key2].maincolor,
                    fontSize:25,
                    paddingTop:8,
                    fontFamily:'Lobster',
                    }}>LISTA DE TAREAS</Text>
            </View> 
            <FlatList
                data= {this.state.list}
                renderItem= {({item}) => {
                    <Item 
                        name={item.name}
                        path={item.path}
                        id={item._id}
                        ondelete={(id) => {
                            this.removeData(id);
                        }}
                    />
                }}
                keyExtractor={(item) => item._id}
            />
        </View>
        );
    }
}
const styles = StyleSheet.create({
    container :{
        flex: 1,
        backgroundColor: Color[Color.key2].maincolor,
        
    },
});
export default ListTareas;