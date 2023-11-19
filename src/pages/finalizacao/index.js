import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground, Image, SafeAreaView } from 'react-native';
import { useNavigation} from '@react-navigation/native'



const Final = () => {
const navigation = useNavigation()
    return(
        <SafeAreaView style={styles.container}>
            <Image  source={require('../../assets/images/done.png')}/>
            <Text style={{fontSize: 24, marginBottom: 9}}>Compra concluída!</Text>
            <Text style={{fontSize: 16, marginBottom: 9}}>Logo menos seu pedido estará em sua residência!</Text>

            {/* botao voltar */}
            <TouchableOpacity style={styles.buttonC} onPress={() => navigation.navigate('produtos')}>
                    <Text style={styles.buttonText}>Voltar para as compras</Text>
                </TouchableOpacity>
        </SafeAreaView>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center', 
        alignItems: 'center', 
      },
      buttonC: {
        backgroundColor: '#778EA9',
        borderRadius: 8,
        padding: 10,
        width: '90%',
        alignSelf: 'center',
        marginTop: 50
     },
      buttonText:{
        color: 'white',
        fontSize: 18,
        textAlign: 'center',
     }
})

export default Final;