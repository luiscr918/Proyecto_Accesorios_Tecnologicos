import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    Button,
    StyleSheet,
    Alert,
    KeyboardAvoidingView,
    ScrollView,
    SafeAreaView,
    useWindowDimensions,
    ImageBackground
} from 'react-native';

export const SignUp: React.FC = () => {
    const { width,height } = useWindowDimensions();
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = () => {
        if (!username || !email || !phoneNumber || !password) {
            Alert.alert('Error', 'Por favor llena todos los campos.');
            return;
        }

        if (!email.endsWith('@gmail.com')) {
            Alert.alert('El correo electrónico debe ser una dirección de Gmail.');
            return;
        }

        if (phoneNumber.length !== 10) {
            Alert.alert('El número de teléfono debe tener 10 dígitos.');
            return;
        }

        console.log('Datos de registro:', { username, email, phoneNumber, password });
    };
    
    return (
        <ImageBackground source={require('../../assets/fondoSignUp.jpeg')}
        style={{
            ...styles.background,
            height: height,
            width: width
        }}
        >
            
                <KeyboardAvoidingView behavior="height" >
                    <ScrollView
                        contentContainerStyle={styles.scrollContainer}
                        keyboardShouldPersistTaps="handled"
                    >
                        <View style={[styles.form, { width: width * 0.9, maxWidth: 400, alignSelf: 'center' }]}>
                            <Text style={styles.title}>Registro</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="Nombre de usuario"
                                value={username}
                                onChangeText={setUsername}
                                autoCapitalize="none"
                            />
                            <TextInput
                                style={styles.input}
                                placeholder="Correo electrónico"
                                keyboardType="email-address"
                                value={email}
                                onChangeText={setEmail}
                                autoCapitalize="none"
                            />
                            <TextInput
                                style={styles.input}
                                placeholder="Número de teléfono"
                                keyboardType="phone-pad"
                                value={phoneNumber}
                                onChangeText={setPhoneNumber}
                                maxLength={10}
                            />
                            <TextInput
                                style={styles.input}
                                placeholder="Contraseña"
                                secureTextEntry
                                value={password}
                                onChangeText={setPassword}
                            />
                            <Button title="Registrar" onPress={handleRegister} />
                        </View>
                    </ScrollView>
                </KeyboardAvoidingView>
        </ImageBackground>

    );
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
        resizeMode: 'cover', // Ajusta la imagen al tamaño del contenedor


    },
    scrollContainer: {

        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 20,
    },
    form: {
        flexDirection: 'column',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#f9f9f9',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 5,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
    },
    input: {
        width: '100%',
        height: 45,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 15,
        backgroundColor: '#fff',
    },
});

