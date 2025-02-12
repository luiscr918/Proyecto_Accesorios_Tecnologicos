import React, { useState } from 'react';
import { View, Text, Alert, KeyboardAvoidingView, ScrollView, useWindowDimensions, StatusBar, TouchableOpacity } from 'react-native';
import { styles } from '../theme/estilos';
import { User } from '../navigation/StackNavigator';
import { InputComponent } from '../components/InputComponents';
import { BodyComponents } from '../components/BodyComponents';
import { TitleComponents } from '../components/TitleComponents';
import { ButtonComponent } from '../components/ButtonComponent';
import { CommonActions, useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

interface Props {
    users: User[];
    addUsers: (user: User) => void;
}

interface RegisterForm {
    username: string;
    email: string;
    phoneNumber: string;
    password: string;
    confPassword: string;
}

export const SignUp = ({ users, addUsers }: Props) => {
    const [registerForm, setregisterForm] = useState<RegisterForm>({
        username: '',
        email: '',
        phoneNumber: '',
        password: '',
        confPassword: ''
    });
    const [hiddenPasword, setHiddenPassword] = useState<boolean>(true);
    const navigation = useNavigation();

    const handleChange = (name: string, value: string) => {
        setregisterForm({
            ...registerForm,
            [name]: value
        });
    }

    const verifyUser = (): User | undefined => {
        const existUser = users.find(user => user.email === registerForm.email);
        return existUser
    }

    const getIdNewUser = (): number => {
        const getIdUser = users.map(user => user.id);
        return Math.max(...getIdUser) + 1;
    }

    const handleRegister = () => {
        if (!registerForm.username ||
            !registerForm.email ||
            !registerForm.phoneNumber ||
            !registerForm.password ||
            !registerForm.confPassword) {
            Alert.alert('Error', 'Por favor llena todos los campos.');
            return;
        }

        if (verifyUser()) {
            Alert.alert('Error', 'El usuario ya existe');
            return;
        }

        if (!registerForm.email.endsWith('@gmail.com')) {
            Alert.alert('El correo electrónico debe ser una dirección de Gmail.');
            return;
        }

        if (registerForm.phoneNumber.length !== 10) {
            Alert.alert('El número de teléfono debe tener 10 dígitos.');
            return;
        }
        if (registerForm.password.length<6&& registerForm.confPassword.length<6) {
            Alert.alert('Error', 'La contraseña debe contener mas de 6 digitos.');
            return;
        }

        if (registerForm.password !== registerForm.confPassword) {
            Alert.alert('Error', 'Las contraseñas no coinciden.');
            return;
        }

        const newUser: User = {
            id: getIdNewUser(),
            name: registerForm.username,
            email: registerForm.email,
            phoneNumber: registerForm.phoneNumber,
            password: registerForm.password,
            confPassword: registerForm.confPassword
        };

        addUsers(newUser);
        Alert.alert('Registro', 'Usuario registrado con éxito');
        console.log(newUser);
        navigation.goBack();
    };

    return (
        <SafeAreaView>
            <StatusBar />
            <TitleComponents title='TecZone' />
            <BodyComponents>
                <Text style={styles.titlePrincipal}>
                    Se parte de nostros
                </Text>
                <Text style={styles.titleDescrption}>
                    Realiza tus compras de manera rápida y segura en la mejor tienda de tecnología.
                </Text>
                <KeyboardAvoidingView behavior="height">
                    <ScrollView
                        contentContainerStyle={styles.container}
                        keyboardShouldPersistTaps="handled"
                    >
                        <View style={styles.containerForm}>
                            <InputComponent
                                placeholder='Nombre'
                                keyboardType='default'
                                handleChange={handleChange}
                                name='username'
                            />
                            <InputComponent
                                placeholder="Correo electrónico"
                                keyboardType="email-address"
                                name='email'
                                handleChange={handleChange}
                            />
                            <InputComponent
                                placeholder="Número de teléfono"
                                keyboardType="phone-pad"
                                handleChange={handleChange}
                                maxLength={10}
                                name='phoneNumber'
                            />
                            <InputComponent
                                placeholder="Contraseña"
                                keyboardType='default'
                                handleChange={handleChange}
                                name='password'
                            />
                            <InputComponent
                                placeholder="Confirma contraseña"
                                keyboardType='default'
                                handleChange={handleChange}
                                name='confPassword'
                            />
                        </View>
                        <ButtonComponent title='Registrar' handleSendInfor={handleRegister} />
                        <TouchableOpacity style={styles.register} onPress={() => navigation.dispatch(CommonActions.navigate({ name: 'SignIn' }))}>
                            <Text style={styles.sub}>¿Ya tienes una cuenta? Inicia Sesión aquí</Text>
                        </TouchableOpacity>
                    </ScrollView>
                </KeyboardAvoidingView>
            </BodyComponents>
        </SafeAreaView>
    );
};



