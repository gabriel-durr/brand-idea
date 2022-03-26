import React from 'react';
import { View, Text, StyleSheet,TextInput,TouchableOpacity } from 'react-native';

import * as animatable from 'react-native-animatable'
import { backgroundColor, color } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

export default function SignIn() {
    return(
        <View style={styles.container}>
          <animatable.View animation="fadeInDown" delay={800} style={styles.containerHeader}>
              <Text style={styles.message}>Bem-vindo(a)</Text>
          </animatable.View>

          <animatable.View animation="fadeInUp" style={styles.containerForm}>
              <Text style={styles.title}>Email</Text>
              <TextInput
                placeholder='Digite seu email'
                style={styles.input}
              />


            <Text style={styles.title}>Senha</Text>
              <TextInput
                placeholder='Digite sua senha...'
                style={styles.input}
              />

              <TouchableOpacity style={styles.button}>
                  <Text style={styles.buttonText}>LogIn</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.buttonRegister}>
                  <Text style={styles.registerText}>Não possui uma conta? Cadastre-se</Text>
              </TouchableOpacity>
              
              


              
          </animatable.View>


        </View>
    );
}


const styles = StyleSheet.create({
    container:{

        flex: 1,
        backgroundColor: '#00ff35',
    },
    containerHeader:{
        marginTop: '0.1%',
        marginBottom: '8%',
        paddingStart: '5%',
        padding:'15%',
        backgroundColor: '#121420'

        
    },
    message:{
        fontSize: 28,
        fontWeight: 'bold',
        color: 'white'
    },
    containerForm:{
        backgroundColor: '#d2d3db',
        flex: 1,
        borderTopLeftRadius: 22,
        borderTopRightRadius: 22,
        paddingStart: '5%',
        paddingEnd: '5%'
    
    
    },
    title:{
        fontSize: 20,
        marginTop: 28,
    },
    input:{
        borderBottomWidth: 1,
        height: 40,
        marginBottom: 12,
        fontSize: 16,
    },
    button:{
        backgroundColor: '#00111C',
        width: '100%',
        borderRadius: 4,
        paddingVertical: 8,
        marginTop: 14,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText:{
        color: '#00ff35',
        fontSize: 18,
        fontWeight: 'bold'
    },
    buttonRegister:{
        marginTop: 14,
        alignSelf: 'center'
    },
    registerText:{
        color: '#22223b'
    }

})
