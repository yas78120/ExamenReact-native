/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import VectorIcons from 'react-native-vector-icons/EvilIcons';
import Color from './layout/colors.js';
import CreateUser from './views/CreateUser.js';
import CreateTareas from './views/CreateTareas.js';
import ListUser from './views/ListUser.js';
import ListTareas from './views/ListTareas.js';
const Tab = createBottomTabNavigator();
class App extends React.Component {
  constructor (props) {
    super(props);

  }
  listUser(){
    return <ListUser/>;
  }
  listTareas(){
    return <ListTareas/>;
  }
  createUser(){
    return <CreateUser/>;
  }
  createTareas(){
    return <CreateTareas/>;
  }
  render(){
    return (
    <NavigationContainer>
      <Tab.Navigator 
        screenOptions = {({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;
            switch(route.name) {
              case 'Lista de Usuarios': {
                if (focused){
                  return <VectorIcons 
                  name="navicon" 
                  size={23} 
                  color = {Color[Color.key].thirthcolor} />;
                } else {
                  return <VectorIcons 
                  name="navicon" 
                  size={23} 
                  color={Color[Color.key].secondcolor} />;
                }
              }
              case 'Crear Usuarios': {
                if (focused){
                  return <VectorIcons 
                  name="user" 
                  size={23} 
                  color={Color.option1.thirthcolor}/>;
                } else {
                  return <VectorIcons 
                  name="user" 
                  size={23} 
                  color={Color.option1.secondcolor}/>;
                }
              }
              case 'Crear Tareas': {
                if (focused){
                  return <VectorIcons 
                  name="user" 
                  size={23} 
                  color={Color.option1.thirthcolor}/>;
                } else {
                  return <VectorIcons 
                  name="user" 
                  size={23} 
                  color={Color.option1.secondcolor}/>;
                }
              }
              case 'Lista de Tareas': {
                if (focused){
                  return <VectorIcons 
                  name="navicon" 
                  size={23} 
                  color = {Color[Color.key].thirthcolor} />;
                } else {
                  return <VectorIcons 
                  name="navicon" 
                  size={23} 
                  color={Color[Color.key].secondcolor} />;
                }
              }
            }
          }
        })}
      >
        <Tab.Screen name= "Crear Usuarios" component = {this.createUser} />
        <Tab.Screen name= "Lista de Usuarios" component = {this.listUser} />
        <Tab.Screen name= "Crear Tareas" component = {this.createTareas} />
        <Tab.Screen name= "Lista de Tareas" component = {this.listTareas} />
      </Tab.Navigator>
    </NavigationContainer>
    );
  }
}

export default App;
