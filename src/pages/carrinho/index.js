import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { FlatList, View, Text, StyleSheet, Image, TextInput, Touchable, TouchableOpacity, ScrollView, Dimensions  } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation} from '@react-navigation/native'

const { width, height } = Dimensions.get('window');

const Carrinho = () => {
const navigation = useNavigation()

 return (
    <SafeAreaView>
            <StatusBar/>
                {/* imagem topo */}
                <Image style={styles.top} source={require('../../assets/images/top.png')}/>

                {/* titulo */}
                <View style={{marginBottom: 14}}>
                    <View style={styles.title}>
                        <Text style={styles.text}>Seu carrinho 🛒</Text>
                    </View>

                {/* linha */}
                <View style={styles.separador}></View>
                </View>

                {/* excluir */}
                <Image style={styles.excluir} source={require('../../assets/images/excluir.png')}/>

                {/* produto carrinho */}
                <View style={styles.produto}>
                    <Image style={styles.imagem} source={require('../../assets/images/moletom.png')}/>
                    <Text style={styles.descricao}>Moletom Reputation</Text>
                    <Text style={styles.preco}>{'\n'}R$150,00</Text>
                    <Text style={styles.quantidade}>{'\n'}Quantidade: + 1 -</Text>
                </View>

                {/* linha */}
                <View style={{borderBottomWidth: 1, borderBottomColor: 'black', width: '100%', marginTop: 13}}></View>

                {/* descricao compra */}
                <View>
                    <Text style={{fontSize: 24, marginTop: 28, marginLeft: 21, fontWeight: 'bold'}}>Total: R$150,00</Text>
                    <Text style={{fontSize: 24, marginTop: 15, marginLeft: 21}}>Forma de pagamento: Pix</Text>
                </View>
                
                {/* botao carrinho */}
                <TouchableOpacity style={styles.buttonC} onPress={() => navigation.navigate('finalizacao')}>
                    <Text style={styles.buttonText}>Ir para o pagamento</Text>
                </TouchableOpacity>
    </SafeAreaView>
 );
};

const styles = StyleSheet.create({
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
      separador:{
        borderBottomWidth: 1,
        borderBottomColor: 'black', 
        width: '100%', 
      },
      produto:{
        flexDirection: 'row'
      },
      descricao:{
        fontSize: 20,
        marginTop: 60
      },
      preco:{
        fontSize: 20,
        alignSelf: 'center',
        marginLeft: -135,
        fontWeight: 'bold'
      },
      quantidade:{
        fontSize: 20,
        alignSelf: 'right',
        marginLeft: -135,
        fontWeight: 'bold',
      },
      excluir:{
        marginLeft: 13
      },
      buttonC: {
        backgroundColor: '#3A3836',
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

export default Carrinho;