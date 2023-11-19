import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { FlatList, View, Text, StyleSheet, Image, TextInput, Touchable, TouchableOpacity, ScrollView, Button,   } from 'react-native';
import Checkbox from 'expo-checkbox';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation} from '@react-navigation/native'

const Filtros = () => {
    const navigation = useNavigation()
    const checkboxData = [
        { id: 1, text: 'Debut Era' },
        { id: 2, text: 'Fearless Era' },
        { id: 3, text: 'Speak Now Era' },
        { id: 4, text: 'RED Era' },
        { id: 5, text: '1989 Era' },
        { id: 6, text: 'Reputation Era' },
        { id: 7, text: 'Lover Era' },
        { id: 8, text: 'Folklore Era' },
        { id: 9, text: 'Evermore Era' },
        { id: 10, text: 'Midnights Era' },
        
      ];
    
      
      const [checkboxStates, setCheckboxStates] = useState(checkboxData.map(() => false));
    
      
      const handleCheckboxChange = (index) => {
        const newCheckboxStates = [...checkboxStates];
        newCheckboxStates[index] = !newCheckboxStates[index];
        setCheckboxStates(newCheckboxStates);
      };
    
      return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <StatusBar/>
                {/* imagem topo */}
                <Image style={styles.top} source={require('../../assets/images/top.png')}/>

                {/* titulo */}
                <View style={{marginBottom: 14}}>
                <View style={styles.title}>
                <Text style={styles.text}>Filtrar por</Text>
                <Image style={styles.imageStyle} source={require('../../assets/images/filtro.png')}/>
                </View>

                {/* linha */}
                <View style={styles.separador}></View>
                </View>

                {/* eras */}
                <Text style={styles.eras}>Eras</Text>

                
            {/* checkbox */}
            {checkboxData.map((item, index) => (
                <View key={item.id} style={styles.checkboxRow}>
                <Checkbox
                    value={checkboxStates[index]}
                    onValueChange={() => handleCheckboxChange(index)}
                />
                <Text style={styles.topicos}>{item.text}</Text>
                </View>
            ))}
                {/* botao aplicar */}
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('produtos')}>
                    <Text style={styles.buttonText}>Aplicar filtro!</Text>
                </TouchableOpacity>


            </ScrollView>
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
     imageStyle: {
        padding: 10,
        height: 25,
        width: 25,
        resizeMode : 'stretch',
        alignSelf: 'space-between'
      },
      separador:{
        borderBottomWidth: 1,
        borderBottomColor: 'black', 
        width: '100%', 
      },
     container: {
        padding: 16,
      },
      eras:{
        alignSelf: 'center',
        fontSize: 24,
        marginBottom: 10
      },
      checkboxRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
        marginLeft: 13
      },
      topicos:{
        marginLeft: 15,
        fontSize: 24,
        margin: 13
      },
      button: {
        backgroundColor: 'black',
        borderRadius: 5,
        padding: 10,
        width: '100%',
        marginTop: 20,
     },
     buttonText:{
        color: 'white',
        fontSize: 18,
        textAlign: 'center',
     }
    })

export default Filtros;