import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { FlatList, View, Text, StyleSheet, Image, TextInput, Touchable, TouchableOpacity,  } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation} from '@react-navigation/native'

// const data = [
//  {
//     id: '1',
//     title: 'Taylor Swift PS',
//     price: 'R$150,00',
//  },
//  {
//     id: '2',
//     title: 'Moletom Midnights',
//     price: 'R$150,00',
//  },
//  {
//     id: '3',
//     title: 'Fearless Camiseta',
//     price: 'R$80,00',
//  },
//  {
//     id: '4',
//     title: 'Palheta de violão',
//     price: 'R$20,00',
//  },
// ];

// const renderItem = ({ item }) => (
//  <View style={styles.item}>
//     <Text style={styles.title}>{item.title}</Text>
//     <Text style={styles.price}>{item.price}</Text>
//  </View>
// );

const ProductsScreen = () => {
const navigation = useNavigation()

 return (
    <SafeAreaView style={styles.container}>
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

    <View style={styles.produtos}>
      <Image style={styles.moletom} source={require('../../assets/images/moletom.png')}/>
    </View>
    </SafeAreaView>
 );
};

const styles = StyleSheet.create({
   container: {
      
    },
    moletom:{
      alignSelf: 'center'
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
   marginTop: 50,
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