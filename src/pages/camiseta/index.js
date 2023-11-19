import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { FlatList, View, Text, StyleSheet, Image, TextInput, Touchable, TouchableOpacity, ScrollView, Dimensions  } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation} from '@react-navigation/native'

const { width, height } = Dimensions.get('window');

const Camiseta = () => {
const navigation = useNavigation()

 return (
    <SafeAreaView>
        <ScrollView>
            <StatusBar/>
                {/* imagem topo */}
                <Image style={styles.top} source={require('../../assets/images/top.png')}/>

                {/* titulo */}
                <View style={{marginBottom: 14}}>
                    <View style={styles.title}>
                        <Text style={styles.text}>Produto</Text>
                        <Image style={styles.imageStyle} source={require('../../assets/images/coracao.png')}/>
                    </View>

                {/* linha */}
                <View style={styles.separador}></View>
                </View>

                {/* produto */}
                <View>
                    <Image style={styles.produto}  source={require('../../assets/images/fearless.jpg')}/>
                    <Text style={styles.descricao}>Camiseta Fearless</Text>
                    <Text style={styles.preco}>{'\n'}R$80,00</Text>
                </View>

                {/* botao favoritar */}
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('carrinho')}>
                    <Text style={styles.buttonText}>Favoritar ❤️</Text>
                </TouchableOpacity>

                {/* botao carrinho */}
                <TouchableOpacity style={styles.buttonC} onPress={() => navigation.navigate('carrinho')}>
                    <Text style={styles.buttonText}>Adicionar ao carrinho 🛒</Text>
                </TouchableOpacity>

        </ScrollView>
    </SafeAreaView>


 );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
    top:{
        width: 244,
        height: 90,
        alignSelf: 'center',
        marginTop: 30,
     },
     title: {
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'space-between', 
        paddingHorizontal: 16, 
        marginBottom: 10
     },
     text:{
        fontSize: 24,
        marginTop: 12,
     },
     imageStyle: {
        height: 32,
        width: 32,
        alignSelf: 'space-between'
      },
      separador:{
        borderBottomWidth: 1,
        borderBottomColor: 'black', 
        width: '100%', 
      },
      produto:{
        width: width * 1, 
        height: height * 0.45, 
        alignSelf: 'center',
        marginTop: -20
      },
      descricao:{
        fontSize: 24,
        alignSelf: 'center',
      },
      preco:{
        fontSize: 24,
        alignSelf: 'center',
        fontWeight: 'bold'
      },
      button: {
        backgroundColor: '#171717',
        borderRadius: 8,
        padding: 10,
        width: '90%',
        marginTop: 20,
        alignSelf: 'center',
        marginTop: 44
     },
     buttonC: {
        backgroundColor: '#171717',
        borderRadius: 8,
        padding: 10,
        width: '90%',
        marginTop: 20,
        alignSelf: 'center',
        marginTop: 20
     },
     buttonText:{
        color: 'white',
        fontSize: 18,
        textAlign: 'center',
     }
})

export default Camiseta;