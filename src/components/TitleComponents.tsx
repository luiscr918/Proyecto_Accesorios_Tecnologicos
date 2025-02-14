import React from 'react'
import { Image, Text, TouchableOpacity, useWindowDimensions } from 'react-native'
import { styles } from '../theme/estilos';
import { View } from 'react-native';
import { useNavigation, CommonActions } from '@react-navigation/native';



//Definir la interfaz de los props
interface Props {
    title: string;
}
export const TitleComponents = ({ title }: Props) => {
    const { height, width } = useWindowDimensions();
    //hook para navegar con el logito
    const navigation = useNavigation();
    return (
        <View style={{
            ...styles.title1Container,
            height: height * 0.12,
            width: width,
        }}>
            <View style={{ justifyContent: 'center' }}>
                <TouchableOpacity
                    onPress={() => navigation.dispatch(CommonActions.navigate({ name: 'SignIn' }))}
                >
                    <Image
                        style={styles.logoEmpresa}
                        source={require('../../assets/logoEmpresa.png')}
                    />
                </TouchableOpacity>
            </View>
            <View >
                <Text style={styles.title1}>
                    {title}
                </Text>
            </View>
        </View>
    )
}