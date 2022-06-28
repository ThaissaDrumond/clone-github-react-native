
import React from "react";
import {
    View,
    StyleSheet,
} from 'react-native';


const App = () => ( 
                
        <View style= {style.calendar}>
          <View style = {style.box}/>
          <View style = {style.box}/>
          <View style = {style.box}/>
          <View style = {style.box}/>
          <View style = {style.box}/>
          <View style = {style.box}/>
          <View style = {style.box}/>
          <View style = {style.box}/>
          <View style = {style.box}/>
          <View style = {style.box}/>
          <View style = {style.box}/>
          <View style = {style.box}/>
          <View style = {style.box}/>
          <View style = {style.box}/>
          <View style = {style.box}/>
          <View style = {style.box}/>
          <View style = {style.box}/>
          <View style = {style.box}/>
          <View style = {style.box}/>
          <View style = {style.box}/>
          <View style = {style.box}/>
          <View style = {style.box}/>
          <View style = {style.box}/>
          <View style = {style.box}/>
        </View>
    
  
  );

export default App;

const style = StyleSheet.create({
  calendar:{
    backgroundColor:'gray',
    flexDirection:'row',
    alignContent:'center',
    flexWrap:'wrap',
    padding:90,
},
  box:{
    width:30,
    height:30,
    backgroundColor:'#58D68D',
    borderColor:'#58D68D',
    borderRadius:5,
    borderWidth:0,
    margin:2,
          
  },

});
