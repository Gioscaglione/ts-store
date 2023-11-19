import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground, Image, SafeAreaView } from 'react-native';
import { useNavigation} from '@react-navigation/native'

const Cadastro = () => {
const navigation = useNavigation()
 const [email, setEmail] = useState('');
 const [password, setPassword] = useState('');
 const [nome, setNome] = useState('');

 const handleLogin = () => {
    // handle login logic here
    console.log('Logged in with email:', email);
    console.log('Logged in with password:', password);
 };

 return (
    <View style={styles.container}>
      <ImageBackground source={require('../../assets/images/bg.jpg')} resizeMode="cover" style={styles.imageBg}>
        <View style={styles.content}>
          <Image style={styles.title} source={require('../../assets/images/icon.png')} />
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
          />
          <TextInput style={styles.input}
            placeholder="Nome"
            value={nome}
            onChangeText={setNome}
          />
          <TextInput style={styles.input}
            placeholder="Senha"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
          <TextInput style={styles.input}
            placeholder="Confirmar senha"
            secureTextEntry
          />
          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Ready for it!</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('login')}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
          
        </View>
      </ImageBackground>
    </View>
 );
};

const styles = StyleSheet.create({
 container: {
    flex: 1,
 },
 imageBg: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
 },
 content: {
    width: '80%',
    alignItems: 'center',
 },
 title: {
    marginBottom: 20,
 },
 input: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    padding: 10,
    width: '100%',
    marginBottom: 10,
    backgroundColor: '#fff'
 },
 button: {
    backgroundColor: 'black',
    borderRadius: 5,
    padding: 10,
    width: '100%',
    marginTop: 20,
 },
 buttonText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
 },
});

export default Cadastro