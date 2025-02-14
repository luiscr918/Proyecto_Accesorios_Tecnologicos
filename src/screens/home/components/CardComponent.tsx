import React, { useState } from 'react'
import { Image, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Product } from '../Home'
import { styles } from '../../../theme/estilos'
import Icon  from 'react-native-vector-icons/MaterialIcons'
import { BUTTON_COLOR, PRIMARY_COLOR } from '../../../theme/defaultColors'
import { ModalProduct } from './ModalProduct'
//props para manejo de producctos
interface Props {
    product: Product,
    handleChangeStock: (id: number, quantity: number) => void;

}
export const CardComponent = ({ product,handleChangeStock }: Props) => {
    const { name, pathImage, price } = product;
        //hook state para manejar la visibilidad del modal
        const [showModalProduct, setShowModalProduct] = useState<boolean>(false);
    return (
        <SafeAreaView>
            <View style={styles.containerCard}>
                <Image
                    style={styles.cardImage}
                    source={{ uri: pathImage }}
                />
                <View style={{margin:18}}>
                    <Text style={styles.titleCard}>{name}</Text>
                    <Text >Price: ${price.toFixed(2)}</Text>
                </View>
                <View style={{...styles.containerIcon,
                    position:'absolute',
                    right:5,
                    bottom:0
                }}>
                <Icon
                name='add-shopping-cart' size={30} color={'#9BEEF7'} 
                onPress={()=>setShowModalProduct(!showModalProduct)}
                />
                </View>
            </View>
            <ModalProduct product={product}
            handleChangeStock={handleChangeStock}
            isVisible={showModalProduct}
            setShowModalProduct={()=>setShowModalProduct(!setShowModalProduct)}
            />

        </SafeAreaView>
    )
}
