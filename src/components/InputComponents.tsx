import React from 'react'
import { KeyboardTypeOptions, TextInput, useWindowDimensions } from 'react-native'
import { styles } from '../theme/estilos';


interface Props {
    placeholder: string,
    keyboardType: KeyboardTypeOptions;
    handleChange: (name: string, value: string) => void;
    name: string;
    isPassword?: boolean;
    maxLength?: number;
}

export const InputComponent = ({ placeholder, keyboardType, handleChange, name, isPassword = false }: Props) => {
    const { width } = useWindowDimensions();
    return (
        <TextInput
            placeholder={placeholder}
            keyboardType={keyboardType}
            onChangeText={(value) => handleChange(name, value)}
            secureTextEntry={isPassword}
            style={{
                ...styles.inputTextSignUp,
                width: width * 0.8
            }}>

        </TextInput>


    )
}