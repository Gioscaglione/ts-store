import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground, Image, SafeAreaView } from 'react-native';
import { useNavigation} from '@react-navigation/native'



import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from 'firebase/auth';
import { firebaseConfig } from '../../../firebase.config'
import firebase from 'firebase/app';



const Login = () => {
const navigation = useNavigation()

 const [email, setEmail] = React.useState('');
 const [password, setPassword] = React.useState('');

//  const app = initializeApp(firebaseConfig);
//  const auth = getAuth(app);

//  const handleCreateAccount = () => {
//    createUserWithEmailAndPassword(auth, email, password)
//    .then(() => {console.log('conta criada')
//                const user = userCredential.user;
//                console.log(user)
//                })
//                .catch(error => {
//                   console.log(error)
//                })
//  };

//  const handleSingIn = () => {
//    signInWithEmailAndPassword(auth, email, password)
//    .then(() => {
//       console.log('Logado')
//       const user = userCredential.user;
//       console.log(user)
//    })
//    .catch(error => {
//       console.log(error)
//    })
//  }

 return (
    <View style={styles.container}>
      <ImageBackground source={require('../../assets/images/bg.jpg')} resizeMode="cover" style={styles.imageBg}>
        <View style={styles.content}>
          <Image style={styles.title} source={require('../../assets/images/icon.png')} />
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
          <TextInput style={styles.input}
            placeholder="Senha"
            value={password}
            onChangeText={(text) => setPassword(text)}
            secureTextEntry
          />
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('produtos')}>
            <Text style={styles.buttonText}>Ready for it!</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('cadastro')}>
            <Text style={styles.buttonText}>Cadastro</Text>
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

export default Login