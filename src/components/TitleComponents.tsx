import React from 'react'
import { Text, useWindowDimensions } from 'react-native'
import { styles } from '../theme/estilos';



//Definir la interfaz de los props
interface Props {
    title: string;

}
export const TitleComponents = ({ title }: Props) => {
    const { height, width } = useWindowDimensions();
    return (
        <Text style={(title == 'Welcome To TecZone')
            ? ({
                ...styles.title1,
                height: height * 0.12,
                width: width,
                backgroundColor: 'rgba(255, 255, 255, 0)',
                color: '#e2c15c'
            })
            : ({
                ...styles.title1,
                height: height * 0.12,
                width: width
            })
        }

        >
            {title}</Text>
    )
}