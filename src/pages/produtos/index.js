import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { FlatList, View, Text, StyleSheet, Image, TextInput, Touchable, TouchableOpacity, ScrollView,  } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation} from '@react-navigation/native'

const ProductsScreen = () => {
const navigation = useNavigation()

 return (
   <SafeAreaView style={styles.container}>
    <ScrollView>
    <StatusBar/>
    {/* imagem topo */}
    <Image style={styles.top} source={require('../../assets/images/top.png')}/>

    {/* imagem destque */}
    <Image style={styles.destaque} source={require('../../assets/images/destaque.jpg')}/>

    {/* texto pag */}
    <Text style={styles.text}>Produtos</Text>
    
    {/* pesquisa produto */}
    <View style={styles.sectionStyle}>
    <TextInput style={styles.input} placeholder='Digite o produto desejado...'/>
    <TouchableOpacity onPress={() => navigation.navigate('filtros')}>
      <Image style={styles.imageStyle} source={require('../../assets/images/filtro.png')}/>
    </TouchableOpacity>
    </View>

   {/* produtos */}
    <View style={styles.produtos}>
      <Image style={styles.esq} source={require('../../assets/images/moletom.png')}/>
      <Image style={styles.dir} source={require('../../assets/images/cd.png')}/>
    </View>

   {/* descricao produtos */}
    <View style={styles.descricao}>
      <Text style={styles.descricaoM}>Moletom Midnights{'\n'}R$150,00</Text>
      <Text style={styles.descricaoC}>CD 1989 (Taylor's Version){'\n'}R$30,00</Text>
    </View>

    {/* produtos */}
    <View style={styles.produtos}>
      <Image  source={require('../../assets/images/camiseta-fearless.png')}/>
      <Image style={styles.eras} source={require('../../assets/images/palhetas.png')}/>
    </View>

   {/* descricao produtos */}
    <View style={styles.descricao}>
      <Text style={styles.descricaoCF}>Camiseta Fearless{'\n'}R$80,00</Text>
      <Text style={styles.descricaoP}>Palhetas The Eras{'\n'}R$20,00</Text>
      
    </View>

    </ScrollView>
    </SafeAreaView>
 );
};

const styles = StyleSheet.create({
   container: {
      
    },
    descricao:{
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    descricaoM:{
      marginLeft: 30,
      fontSize: 16 
    },
    descricaoC:{
      marginRight: 20,
      fontSize: 16
    },
    descricaoCF:{
      marginLeft: 40,
      fontSize: 16
    },
    descricaoP:{
      marginRight:45,
      fontSize: 16
    },
    eras:{
      marginTop: 50
    },
    produtos:{
      flexDirection: 'row',
      marginTop: 10,
    },
   sectionStyle: {
      flexDirection: 'row', 
    },
    imageStyle: {
      padding: 10,
      margin: 5,
      height: 25,
      width: 25,
      resizeMode : 'stretch',
    },
 destaque:{
   width: 399,
   height: 147,
   alignSelf: 'center',
   marginTop: 13,
   borderRadius: 4
 },
 top:{
   width: 244,
   height: 90,
   alignSelf: 'center',
   marginTop: 30,
 },
 text:{
   fontSize: 24,
   marginLeft: 13,
   marginTop: 12
 },
  input: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    padding: 10,
    width: 358,
    height: 36,
    marginLeft: 13,
    backgroundColor: '#fff',
    flex: 1
},
 item: {
    padding: 10,
    marginVertical: 8,
 },
 title: {
    fontSize: 17,
 },
 price: {
    fontSize: 15,
    color: 'gray',
 },
});

export default ProductsScreen;