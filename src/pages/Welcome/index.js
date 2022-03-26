import React from 'react';
import { 
    View, 
    Text,
    StyleSheet,
    Image,
    TouchableOpacity
} from 'react-native';


import * as Animatable from 'react-native-animatable'

import { useNavigation } from '@react-navigation/native'


export default function Welcome() {
    const navigation = useNavigation();

    return(
        <View style={styles.container}>

            <View style={styles.containerLogo}>
                <Animatable.Image delay={500}
                    animation="fadeInDown"
                    source={require('../../assets/myLogo-transparent.png')}
                    style={{ width: '100%' }}
                    resizeMode="center"
                />
            </View>

            <Animatable.View delay={700} animation="fadeInUp" style={styles.containerForm}>
                <Text style={styles.title}> Conheça o meu portifólio com mais detalhes {'>'}_</Text>
                <Text style={styles.text}>Conecte-se para começar...</Text>


                <TouchableOpacity 
                style={styles.button}
                onPress={ () => navigation.navigate('SignIn')}
                >
                    <Text style={styles.buttonText}>Acessar</Text>
                </TouchableOpacity>

            </Animatable.View>
            
        </View>
    );
}


const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#FFF',

    },
    containerLogo:{
        flex:2,
        justifyContent: 'center',
        alignItems: 'center'
        
    },
    containerForm: {
        flex: 1,
        backgroundColor: '#003A61',
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
        paddingStart: '5%',
        paddingEnd: '5%',
    
    },
    title:{
        fontSize: 25,
        fontWeight: 'bold',
        marginTop: 28,
        marginBottom: 20,
        color: '#CED4DA'

    },
    text:{
        color: '#FFF',
        fontSize: 14
    },
    button:{
        position: 'absolute',
        backgroundColor: '#00111C',
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        borderRadius: 7,
        paddingVertical: 8,
        width: '60%',
        alignSelf: 'center',
        bottom: '15%',
        alignItems: 'center',
        justifyContent: 'center'

    },
    buttonText:{
        fontSize: 18,
        color: '#00ff35',
        fontWeight: 'bold'
    }
})