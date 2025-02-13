import React, { useState } from 'react';
import { FlatList, StatusBar, Text, View } from 'react-native';

import { BodyComponents } from '../../components/BodyComponents';
import { CardProduct } from './components/CardProduct';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { ModalCar } from './components/ModalCar';
import { PRIMARY_COLOR, SECONDARY_COLOR } from '../../theme/defaultColors';
import { styles } from '../../theme/estilos';
import { TitleComponents } from '../../components/TitleComponents';

export interface Product {
    id: number;
    name: string;
    price: number;
    stock: number;
    pathImage: string;
    description: string;
}
export interface CardProduct {
    id: number;
    name: string;
    price: number;
    quantity: number;
    total: number;
}

export const HomeScreen = () => {
    const products: Product[] = [
      { id: 1, name: 'iPhone 15 Pro Max', description: 'Smartphone de alto rendimiento con pantalla OLED de 6.7", chip A17 Pro y cámara de 48 MP.', price: 1119, stock: 5, pathImage: 'https://http2.mlstatic.com/D_NQ_NP_912227-MLA71782903150_092023-O.webp' },
      { id: 2, name: 'ASUS ROG Zephyrus G14', description: 'Smartphone de alto rendimiento con pantalla OLED de 6.7", chip A17 Pro y cámara de 48 MP.', price: 1119, stock: 5, pathImage: 'https://http2.mlstatic.com/D_NQ_NP_912227-MLA71782903150_092023-O.webp' },
      { id: 3, name: 'iPad Air (5ª generación)', description: 'Smartphone de alto rendimiento con pantalla OLED de 6.7", chip A17 Pro y cámara de 48 MP.', price: 1119, stock: 5, pathImage: 'https://http2.mlstatic.com/D_NQ_NP_912227-MLA71782903150_092023-O.webp' },
      { id: 4, name: 'Samsung Galaxy Watch 6 ', description: 'Smartphone de alto rendimiento con pantalla OLED de 6.7", chip A17 Pro y cámara de 48 MP.', price: 1119, stock: 5, pathImage: 'https://http2.mlstatic.com/D_NQ_NP_912227-MLA71782903150_092023-O.webp' },
      { id: 5, name: 'Sony WH-1000XM5', description: 'Smartphone de alto rendimiento con pantalla OLED de 6.7", chip A17 Pro y cámara de 48 MP.', price: 1119, stock: 5, pathImage: 'https://http2.mlstatic.com/D_NQ_NP_912227-MLA71782903150_092023-O.webp' },
      { id: 6, name: 'PlayStation 5 ', description: 'Smartphone de alto rendimiento con pantalla OLED de 6.7", chip A17 Pro y cámara de 48 MP.', price: 1119, stock: 5, pathImage: 'https://http2.mlstatic.com/D_NQ_NP_912227-MLA71782903150_092023-O.webp' },
      { id: 7, name: 'Dell UltraSharp 27" 4K', description: 'Smartphone de alto rendimiento con pantalla OLED de 6.7", chip A17 Pro y cámara de 48 MP.', price: 1119, stock: 5, pathImage: 'https://http2.mlstatic.com/D_NQ_NP_912227-MLA71782903150_092023-O.webp' },
      { id: 8, name: 'Keychron K6 Wireless ', description: 'Smartphone de alto rendimiento con pantalla OLED de 6.7", chip A17 Pro y cámara de 48 MP.', price: 1119, stock: 5, pathImage: 'https://http2.mlstatic.com/D_NQ_NP_912227-MLA71782903150_092023-O.webp' },
      { id: 9, name: 'Logitech G Pro X Superlight ', description: 'Smartphone de alto rendimiento con pantalla OLED de 6.7", chip A17 Pro y cámara de 48 MP.', price: 1119, stock: 5, pathImage: 'https://http2.mlstatic.com/D_NQ_NP_912227-MLA71782903150_092023-O.webp' },
      { id: 10, name: 'HP LaserJet Pro MFP M227fdw', description: 'Smartphone de alto rendimiento con pantalla OLED de 6.7", chip A17 Pro y cámara de 48 MP.', price: 1119, stock: 5, pathImage: 'https://http2.mlstatic.com/D_NQ_NP_912227-MLA71782903150_092023-O.webp' },
      { id: 11, name: 'Canon EOS R7 ', description: 'Smartphone de alto rendimiento con pantalla OLED de 6.7", chip A17 Pro y cámara de 48 MP.', price: 1119, stock: 5, pathImage: 'https://http2.mlstatic.com/D_NQ_NP_912227-MLA71782903150_092023-O.webp' },
      { id: 12, name: 'WD My Passport 2TB', description: 'Smartphone de alto rendimiento con pantalla OLED de 6.7", chip A17 Pro y cámara de 48 MP.', price: 1119, stock: 5, pathImage: 'https://http2.mlstatic.com/D_NQ_NP_912227-MLA71782903150_092023-O.webp' },
      { id: 13, name: 'TP-Link Archer AX6000 ', description: 'Smartphone de alto rendimiento con pantalla OLED de 6.7", chip A17 Pro y cámara de 48 MP.', price: 1119, stock: 5, pathImage: 'https://http2.mlstatic.com/D_NQ_NP_912227-MLA71782903150_092023-O.webp' },
      { id: 14, name: 'Secretlab TITAN Evo 2022', description: 'Smartphone de alto rendimiento con pantalla OLED de 6.7", chip A17 Pro y cámara de 48 MP.', price: 1119, stock: 5, pathImage: 'https://http2.mlstatic.com/D_NQ_NP_912227-MLA71782903150_092023-O.webp' },
      { id: 15, name: 'Philips Hue White & Color Ambiance', description: 'Smartphone de alto rendimiento con pantalla OLED de 6.7", chip A17 Pro y cámara de 48 MP.', price: 1119, stock: 5, pathImage: 'https://http2.mlstatic.com/D_NQ_NP_912227-MLA71782903150_092023-O.webp' },
    ]
    const [productsState, setProductsState] = useState<Product[]>(products);

    const [carProducts, setCarProducts] = useState<CardProduct[]>([]);

    const [showModalCar, setShowModalCar] = useState<boolean>(false)
    const handleChangeStock = (id: number, quantity: number): void => { 
        const updateStock = productsState.map(product => product.id === id
            ? { ...product, stock: product.stock - quantity } 
            : product);
        setProductsState(updateStock);
        addProductCar(id, quantity);
    }
    const addProductCar = (id: number, quantity: number): void => {
        const product = productsState.find(product => product.id === id);
        if (!product) return;
        const newProduct: CardProduct = {
            id: product.id,
            name: product.name,
            price: product.price,
            quantity: quantity,
            total: product.price * quantity
        }
        setCarProducts([...carProducts, newProduct])
    }

    return (
        <View>
            <View>
                <StatusBar backgroundColor={PRIMARY_COLOR} />
                <View style={styles.headerProducts}>
                    <TitleComponents title='Productos' />
                    <View style={{
                        ...styles.containerIcon,
                        paddingHorizontal: 30
                    }}>
                        <Text style={styles.textIconCar}>
                            {carProducts.length}
                        </Text>
                        <Icon name='shopping-cart'
                            size={28}
                            color={SECONDARY_COLOR}
                            onPress={() => setShowModalCar(!showModalCar)} />
                    </View>
                </View>
                <BodyComponents>
                    <FlatList
                        data={productsState}
                        renderItem={({ item }) => <CardProduct product={item} handleChangeStock={handleChangeStock} />}
                        keyExtractor={item => item.id.toString()} />
                </BodyComponents>
            </View>
            <ModalCar isVisible={showModalCar}
                carProducts={carProducts}
                setShowModalCar={() => setShowModalCar(!showModalCar)} />
        </View>
    )
}
