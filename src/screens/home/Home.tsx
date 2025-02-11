import React from 'react'
import { FlatList, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { CardComponent } from './components/CardComponent';
import { TitleComponents } from '../../components/TitleComponents';
import { BodyComponents } from '../../components/BodyComponents';
//creo interfaz de mis productos
export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  stock: number;
  pathImage: string;
}

const Home = () => {
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
  return (
    <SafeAreaView>
      <TitleComponents title='Products' />
      <BodyComponents>
        <FlatList
          data={products}
          renderItem={({ item }) => <CardComponent product={item} />}
          keyExtractor={item => item.id.toString()}
          numColumns={2}
          columnWrapperStyle={{ justifyContent: 'space-evenly' }}

        />

      </BodyComponents>

    </SafeAreaView>
  )
}

export default Home
