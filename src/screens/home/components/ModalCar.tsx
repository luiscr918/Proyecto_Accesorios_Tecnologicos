import React from 'react';
import { FlatList, Modal, Text, TouchableOpacity, useWindowDimensions, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { CardProduct } from '../Home';
import { styles } from '../../../theme/estilos';
import { PRIMARY_COLOR, SECONDARY_COLOR, TERTARY_COLOR } from '../../../theme/defaultColors';

interface Props {
    isVisible: boolean;
    carProducts: CardProduct[];
    setShowModalCar: () => void;
    reset: () => void;
}

export const ModalCar = ({ isVisible, carProducts, setShowModalCar, reset }: Props) => {
    const { width } = useWindowDimensions();
    //cerrar modal al dar click boton comprar
    const closeModal = () => {
        reset()
        setShowModalCar()
    }
    //Función para calcular el total de la compra
    const totalPay = (): number => {
        //acumulador
        let total: number = 0;
        carProducts.forEach(product => {
            total += product.total;
        })
        return total;
    }

    return (
        <Modal visible={isVisible} animationType='fade' transparent={true}>
            <View style={styles.containerModal}>
                <View style={{
                    ...styles.modalProduct,
                    width: width * 0.80
                }}>
                    <View style={styles.headerModal}>
                        <Text style={styles.titleHeaderModal}>
                            Mis Productos
                        </Text>
                        <View style={{
                            ...styles.containerIcon,
                            backgroundColor: 'red',
                            maxWidth: 25,
                            position: 'absolute',
                            right: 2,
                            bottom: 5
                        }}>
                            <Icon
                                name='cancel'
                                size={25}
                                color={SECONDARY_COLOR}
                                onPress={setShowModalCar} />
                        </View>
                    </View>

                    {carProducts.length === 0 ? (
                        <View style={{ alignItems: 'center', padding: 10 }}>
                            <Text style={{ fontSize: 18, color: TERTARY_COLOR }}>No hay productos en el carrito.</Text>
                        </View>
                    ) : (
                        <>
                            <View style={styles.headerTableCar}>
                                <Text style={styles.textHeaderTable}>Producto</Text>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{
                                        ...styles.textHeaderTable,
                                        marginHorizontal: 10
                                    }}>Precio</Text>
                                    <Text style={styles.textHeaderTable}>Cantidad</Text>
                                    <Text style={{
                                        ...styles.textHeaderTable,
                                        marginHorizontal: 10
                                    }}>Total</Text>
                                </View>
                            </View>
                            <FlatList
                                data={carProducts}
                                renderItem={({ item }) => (
                                    <View style={styles.headerTableCar}>
                                        <Text>{item.name}</Text>
                                        <View style={{ flexDirection: 'row' }}>
                                            <Text style={{ marginHorizontal: 10 }}>
                                                ${item.price.toFixed(2)}
                                            </Text>
                                            <Text style={{ paddingHorizontal: 25 }}>
                                                {item.quantity}
                                            </Text>
                                            <Text style={{ marginHorizontal: 10 }}>
                                                ${item.total.toFixed(2)}
                                            </Text>
                                        </View>
                                    </View>
                                )}
                                keyExtractor={item => item.id.toString()} />
                            <View style={styles.containerTotal}>
                                <Text style={styles.textTotal}>
                                    Total a pagar: ${totalPay().toFixed(2)}
                                </Text>
                            </View>
                            <View>
                                <TouchableOpacity style={styles.buttonAddCart} onPress={closeModal}>
                                    <Text style={{
                                        ...styles.buttonAddCartText,
                                        color: TERTARY_COLOR
                                    }}>Comprar</Text>
                                </TouchableOpacity>
                            </View>
                        </>
                    )}
                </View>
            </View>
        </Modal>
    )
}