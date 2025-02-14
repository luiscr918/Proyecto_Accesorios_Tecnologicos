import React, { useState } from 'react'
import { Image, Modal, Text, TouchableOpacity, useWindowDimensions, View } from 'react-native'
import { Product } from '../Home';
import Icon from 'react-native-vector-icons/MaterialIcons'
import { BUTTON_COLOR, PRIMARY_COLOR, SECONDARY_COLOR } from '../../../theme/defaultColors';
import { styles } from '../../../theme/estilos';
interface Props {
    product: Product;
    isVisible: boolean;
    handleChangeStock: (id: number, quantity: number) => void;
    setShowModalProduct: () => void;

}
export const ModalProduct = ({ product, isVisible, setShowModalProduct, handleChangeStock }: Props) => {
    const { name, pathImage, price, stock,description } = product;
    const closeModal = () => {
        setShowModalProduct();
        //Modificar  el valor del contador
        setQuantity(1);
    }
    //dimensiones de pantalla
    const { width } = useWindowDimensions();
    //hook useState para manejar la cantidad de productos
    const [quantity, setQuantity] = useState<number>(1);
    const handleAddProduct = () => {
        //llamar función para actualizar stock
        handleChangeStock(product.id, quantity);

        //Cerrar el modal
        closeModal();
    }


    return (
        <Modal
            visible={isVisible}
            animationType='slide'
            transparent={true}
        >
            <View style={styles.containerModal}>
                <View style={{
                    ...styles.modalProduct,
                    width: width * 0.85
                }}>
                    <View style={styles.headerModal}>
                        <Text style={{
                            ...styles.titleHeaderModel,
                            fontSize: 14
                        }}>{name}-
                            {'\n'}
                            ${price.toFixed(2)}</Text>
                        <View style={{
                            ...styles.containerIcon,
                            backgroundColor: 'red',
                            maxWidth: 30,
                            padding: 5,
                            position: 'absolute',
                            right: 2,
                            bottom: 5
                        }}>
                            <Icon
                                name='close'
                                size={20}
                                color={SECONDARY_COLOR}
                                onPress={setShowModalProduct}
                            />
                        </View>
                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <Image source={{
                            uri: pathImage
                        }}
                            style={styles.imageModal} />
                    </View>
                    {
                        (stock === 0)
                            ? <Text style={styles.textWarning}>Producto Agotado</Text>
                            :
                            <View>
                                <View style={styles.cotainerDesciptionProduct}>
                                    <Text style={styles.textDescriptionProduct}>{description}</Text>
                                </View>
                                <View style={styles.containerQuantity}>
                                    <TouchableOpacity style={styles.buttonQuantity}
                                        onPress={() => setQuantity(quantity - 1)}
                                        disabled={quantity === 1}
                                    >
                                        <Text style={styles.buttonQuantityText}>-1</Text>
                                    </TouchableOpacity>
                                    <Text style={styles.textQuantity}>{quantity}</Text>
                                    <TouchableOpacity style={styles.buttonQuantity}
                                        onPress={() => setQuantity(quantity + 1)}
                                        disabled={quantity === stock}
                                    >
                                        <Text style={styles.buttonQuantityText}>+1</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={{ alignItems: 'center' }}>
                                    <Text style={styles.textQuantity}>Total: $ {(price * quantity).toFixed(2)}</Text>
                                </View>
                                <View>
                                    <TouchableOpacity style={styles.buttonAddCar}
                                        onPress={handleAddProduct}
                                    >
                                        <Text style={styles.buttonAddCarText}>Agregar carrito</Text>

                                    </TouchableOpacity>
                                </View>
                            </View>
                    }
                </View>
            </View>
        </Modal>
    )
}
