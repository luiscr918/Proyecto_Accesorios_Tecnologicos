import React, { ReactNode } from 'react'
import { useWindowDimensions, View } from 'react-native'
import { styles } from '../theme/estilos';

interface Props {
    children: ReactNode;
}
export const BodyComponents = (props: Props) => {
    //hook useWindowsDimensions
    const { height } = useWindowDimensions();
    return (
        <View style={{
            ...styles.body,
            height: height * 0.88
        }}>
            {props.children}
        </View>
    )
}