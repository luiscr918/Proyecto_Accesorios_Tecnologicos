import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { styles } from '../theme/estilos';

interface Props {
    title: string;
    handleSendInfor: () => void;
}

export const ButtonComponent = ({ title, handleSendInfor }: Props)=> {
    return (
        <TouchableOpacity style={styles.buttomForm} onPress={handleSendInfor}>
            <Text>{title}</Text>
        </TouchableOpacity>
    )
}