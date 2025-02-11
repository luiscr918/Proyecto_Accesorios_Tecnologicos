import React from 'react'
import { Image, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Product } from '../Home'
import { styles } from '../../../theme/estilos'
import Icon  from 'react-native-vector-icons/MaterialIcons'
import { BUTTON_COLOR, PRIMARY_COLOR } from '../../../theme/defaultColors'
//props para manejo de producctos
interface Props {
    product: Product
}
export const CardComponent = ({ product }: Props) => {
    const { name, pathImage, price } = product;
    return (
        <SafeAreaView>
            <View style={styles.containerCard}>
                <Image
                    style={styles.cardImage}
                    source={{ uri: pathImage }}
                />
                <View>
                    <Text style={styles.titleCard}>{name}</Text>
                    <Text>Price: ${price.toFixed(2)}</Text>
                </View>
                <View style={styles.containerIcon}>
                <Icon
                name='add-shopping-cart' size={30} color={'#9BEEF7'} 
                
                />

                </View>

            </View>

        </SafeAreaView>
    )
}
