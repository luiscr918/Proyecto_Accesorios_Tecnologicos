import React, { useState } from 'react';
import { Image, Text, View } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { ModalProduct } from './ModalProduct';
import { Product } from '../Home';
import { styles } from '../../../theme/estilos';
import { PRIMARY_COLOR } from '../../../theme/defaultColors';

//Definir la interface para las propiedades
interface Props {
    product: Product;
    handleChangeStock: (id: number, quantity: number) => void;
}

export const CardProduct = ({ product, handleChangeStock }: Props) => {
    //hook useState para manejar la visibilidad del modal
    const [showModalProduct, setShowModalProduct] = useState<boolean>(false);

    return (
        <View>
            <View style={styles.containerCard}>
                <Image source={{
                    uri: product.pathImage
                }}
                    style={styles.imageCard} />
                <View>
                    <Text style={styles.titleCard}>{product.name}</Text>
                    <Text>Precio: ${product.price.toFixed(2)}</Text>
                </View>
                <View style={styles.containerIcon}>
                    <Icon name='add-shopping-cart'
                        size={30}
                        color={PRIMARY_COLOR}
                        onPress={() => setShowModalProduct(!showModalProduct)} />
                </View>
            </View>
            <ModalProduct
                product={product}
                isVisible={showModalProduct}
                setShowModalProduct={() => setShowModalProduct(!showModalProduct)}
                handleChangeStock={handleChangeStock} />
        </View>
    )
}