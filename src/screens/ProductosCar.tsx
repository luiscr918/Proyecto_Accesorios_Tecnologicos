import React from 'react'
import { FlatList, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { CardProduct } from './home/Home';
import { styles } from '../theme/estilos';
import { TERTARY_COLOR } from '../theme/defaultColors';
import { useRoute } from '@react-navigation/native';
// interface RouteParams{
//     carProducts:CardProduct[];
// }

export const ProductosCar = () => {
    const route=useRoute();
    const carProducts = route.params as CardProduct[];



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
        <SafeAreaView>
            <View>
                {carProducts.length === 0
                    ? (
                        <View style={{ alignItems: 'center', padding: 10 }}>
                            <Text style={styles.textWarning}>No hay productos en el carrito.</Text>
                        </View>
                    )
                    : (
                        <>
                            <View style={styles.headerTableCar}>
                                <View style={{ maxWidth: 100 }}>
                                    <Text style={styles.textHeaderTable}>Producto</Text>
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <View style={{ alignSelf: 'flex-start' }}>
                                        <Text style={{
                                            ...styles.textHeaderTable,
                                            marginHorizontal: 10,
                                        }}>Precio</Text>
                                    </View>
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
                                        <View style={{ maxWidth: 100, justifyContent: 'center' }}>
                                            <Text >{item.name}</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row' }}>
                                            <View style={{ width: 111 }}>
                                                <Text style={{ marginHorizontal: 10, padding: 10 }}>
                                                    ${item.price.toFixed(2)}
                                                </Text>
                                            </View>
                                            <Text style={{ padding: 10 }}>
                                                {item.quantity}
                                            </Text>
                                            <Text style={{ marginHorizontal: 10, padding: 10 }}>
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
                            </View>
                        </>
                    )}
            </View>
        </SafeAreaView>
    )
}
