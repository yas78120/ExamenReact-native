import React from 'react';
import {View, Text, StyleSheet, Image, Button} from 'react-native';
class Item  extends React.Component{
   constructor(props){
    super(props);
   }
   onDelete(id){
       const {ondelete} = this.props;
        ondelete(id);
   }
   render(){
       return (
         <View style={styles.containerList}>
           <View style={styles.textstyle}>
               <Text>{this.props.name}</Text>
           </View>
         
            <View>
                <Button
                    title="Borrar"
                    onPress={()=> {
                        this.onDelete(this.props.id);
                    }}/>
            </View>
        </View>
       );
   }
}
const styles = StyleSheet.create({
    containerList:{
        flexDirection:'row',
        backgroundColor: '#fff',
        marginTop: 5,
        padding:10,
        borderRadius: 10,
        elevation:4,
    },
    textstyle:{
        justifyContent:'flex-start',
        
    }
})
export default  Item;
