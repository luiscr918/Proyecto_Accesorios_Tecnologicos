/* import React from 'react'
import { KeyboardTypeOptions, useWindowDimensions } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import { styles } from '../screens/SignIn'

interface Props{
    placeholder: string,
    keyboardType: KeyboardTypeOptions,
    handleChange: (name: string, value: string) => void,
    name: string,
    showPassword?:boolean,
    onChangeText: string,
    onChangeEmail: string,
    value: string
}

export const InputComponent = ({handleChange,name, showPassword, placeholder, keyboardType } : Props) => {
    const { height, width } = useWindowDimensions();

    return (
        <TextInput
        style={{
            ...styles.textinput2,
            height: height * 0.06,
        }}
        onChangeText={(value) => handleChange(name, value)}
        placeholder={placeholder}
        keyboardType={keyboardType}
        secureTextEntry={showPassword}


        />
    )
}
 */