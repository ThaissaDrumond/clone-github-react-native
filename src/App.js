
import React from "react";
import {
    View,
    Text,
    Image,
    StyleSheet,
    SafeAreaView,
    StatusBar,
    Pressable, 
    Linking
} from 'react-native';

const imageProfile = 'https://avatars.githubusercontent.com/u/90909646?v=4';
const fontGithub = '#C9D1D9';
const colorGithub = '#010409';
const colorDarkGit = '#4F565E';
const urlToMyGithub = 'https://github.com/ThaissaDrumond'
const App = () => {
  const handlePressGoToGithub = async () => {
    console.log('verificando');
    const res = await Linking.canOpenURL(urlToMyGithub);
    if(res){
      console.log('link aprovado');
      await Linking.openURL (urlToMyGithub);
    }
  };

  return (
  <SafeAreaView style={style.container}>
    <StatusBar backgoundColor = {colorGithub} barStyle='light-content' />
     <View style={style.content}>
      <Image 
        accessibilityLabel='Thaíssa sorrindo'
        style={style.avatar} source = {{uri:imageProfile}}  
      />
        <Text accessibilityLabel='Nome: Thaíssa Drumond' style = {[style.defaultText, style.name]}>Thaíssa Drumond</Text>
        <Text accessibilityLabel='Nickname: ThaíssaDrumond' style = {[style.defaultText, style.nickname]}>ThaíssaDrumond</Text>
        <Text accessibilityLabel='Descrição: Software Engineering Student | Software Developer Student | HTML | CSS | JavaScript | Java' style = {[style.defaultText, style.description]}>Software Engineering Student | Software Developer Student | HTML | CSS | JavaScript | Java</Text>
        <Pressable onPress={handlePressGoToGithub}>
          <View style = {style.button}>
            <Text style= {[style.defaultText, style.textButton]}>Open in GitHub</Text>
          </View>
        </Pressable>
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
          <View style = {[style.box, style.box2]}/>
          <View style = {[style.box, style.box2]}/>
          <View style = {style.box}/>
          <View style = {style.box}/>
          <View style = {style.box}/>
          <View style = {[style.box, style.box2]}/>
          <View style = {style.box}/>
          <View style = {style.box}/>
          <View style = {style.box}/>
          <View style = {[style.box, style.box2]}/>
          <View style = {style.box}/>
          <View style = {style.box}/>
          <View style = {style.box}/>
          <View style = {[style.box, style.box2]}/>
          <View style = {style.box}/>
          <View style = {[style.box, style.box2]}/>
          <View style = {style.box}/>
          <View style = {style.box}/>
          <View style = {[style.box, style.box2]}/>
          <View style = {style.box}/>
          <View style = {style.box}/>
          <View style = {[style.box, style.box2]}/>
          <View style = {style.box}/>
          <View style = {[style.box, style.box2]}/>
          <View style = {style.box}/>
          <View style = {style.box}/>
          <View style = {[style.box, style.box2]}/>
          <View style = {style.box}/>
          <View style = {[style.box, style.box2]}/>
          <View style = {style.box}/>
          <View style = {style.box}/>
          <View style = {[style.box, style.box2]}/>
          <View style = {style.box}/>
          <View style = {style.box}/>
          <View style = {[style.box, style.box2]}/>
          <View style = {style.box}/>
          <View style = {[style.box, style.box2]}/>
          <View style = {style.box}/>
          <View style = {style.box}/>
          <View style = {[style.box, style.box2]}/>
          <View style = {[style.box, style.box2]}/>
          <View style = {style.box}/>
          <View style = {style.box}/>
          <View style = {style.box}/>
          <View style = {[style.box, style.box2]}/>
          <View style = {style.box}/>
          <View style = {style.box}/>
          <View style = {style.box}/>
          <View style = {[style.box, style.box2]}/>
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
    
    </View>
  </SafeAreaView>
  );
};

export default App;

const style = StyleSheet.create({
container: {
    flex: 1, //preenche a tela inteira
    backgroundColor: colorGithub,
    alignItems: 'center',
    justifyContent: 'center',
   //flexDirection: 'row',
  },
content: {
    alignItems: 'center',
    padding:20,
  },
  avatar:{
    height: 200,
    width: 200,
    borderRadius:100,
    borderColor: 'gray',
    borderWidth: 2,
    
  },
    defaultText:{
    color: fontGithub,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',    
  },
  nickname:{
    fontSize: 18,
    color: colorDarkGit,
  },
  description:{
    fontSize: 14,
    fontWeight: 'bold',
  },
  button:{
    backgroundColor: colorDarkGit,
    borderRadius: 10,
    padding: 20,
    marginTop: 20,
  },
  textButton:{
    fontSize: 16,
    fontWeight: 'bold',
  },
  calendar:{
    //backgroundColor:'gray',
    flexDirection:'row',
    alignContent:'center',
    flexWrap:'wrap',
    padding:20,
},
  box:{
    width:20,
    height:20,
    backgroundColor:'#fad8d8',
    borderColor:'#fad8d8',
    borderRadius:5,
    borderWidth:0,
    margin:2,
          
  },
  box2:{
    width:20,
    height:20,
    backgroundColor:'#f08080',
    borderColor:'#f08080',
    borderRadius:5,
    borderWidth:0,
    margin:2,
          
  },
});
