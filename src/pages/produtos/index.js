import React from 'react';
import { FlatList, View, Text, StyleSheet, Image } from 'react-native';

const data = [
 {
    id: '1',
    title: 'Taylor Swift PS',
    price: 'R$150,00',
 },
 {
    id: '2',
    title: 'Moletom Midnights',
    price: 'R$150,00',
 },
 {
    id: '3',
    title: 'Fearless Camiseta',
    price: 'R$80,00',
 },
 {
    id: '4',
    title: 'Palheta de violão',
    price: 'R$20,00',
 },
];

const renderItem = ({ item }) => (
 <View style={styles.item}>
    <Text style={styles.title}>{item.title}</Text>
    <Text style={styles.price}>{item.price}</Text>
 </View>
);

const ProductsScreen = () => {
 return (
    <View>
    <Image style={styles.top} source={require('../../assets/images/top.png')}/>
    
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={item => item.id}
    />
    </View>
 );
};

const styles = StyleSheet.create({
top:{

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