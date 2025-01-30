import { CommonActions, useNavigation } from '@react-navigation/native'
import React from 'react'
import { Button, View } from 'react-native'

export const SignIn = () => {
    const navigation = useNavigation();
    return (
        <View>
            <Button
                title='no tengo cuenta ir a registrar'
                onPress={() => navigation.dispatch(CommonActions.navigate({ name: 'SignUp' }))}
            />
        </View>
    )
}
