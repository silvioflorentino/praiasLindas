import * as React from 'react';
import {View,Text,StyleSheet,Image,ScrollView} from 'react-native';

export default function App(){
  return(
    <View style={estilo.container}>
      <Text style={estilo.titulo}> Praias Lindas do Brasil </Text>
      <Text style={estilo.frase}> Minhas Férias.... </Text>
      <ScrollView style={estilo.fotos}>
      <Image style={estilo.img} source={require("./assets/beach-ga284b9b6a_640.jpg")}/>
      <Text style={estilo.legenda}> Praia de Ipanema</Text>
      <Image style={estilo.img} source={require("./assets/sugar-loaf-pao-de-acucar-gc92cf00c9_640.jpg")}/>
      <Text style={estilo.legenda}> Praia de Guarujá</Text>
      <Image style={estilo.img} source={require("./assets/sunset-g118b1efe8_640.jpg")}/>
      <Text style={estilo.legenda}>Praia de Fernando de Noronha </Text>
      <Image style={estilo.img} source={require("./assets/the-rivers-fish-and-g3fb2f1b4b_640.jpg")}/>
      <Text>Praia Grande </Text>
      </ScrollView>
    </View>
  );
}

const estilo = StyleSheet.create({
container:{
flex:1,
backgroundColor: '#DCDCDC'
},
titulo:{
textAlign:'center',
fontSize:30,
marginTop: 45,
marginBottom: 20
},
frase:{
fontSize: 15,
marginBottom:20,
textAlign:'right'
},
img:{
width: 250,
height: 200,
borderRadius:5
},
legenda:{
fontFamily:'Verdana',
fontSize: 10,
marginBottom: 10
},
fotos:{
  alignItems: 'center'
}
});











