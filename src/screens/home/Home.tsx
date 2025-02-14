import React, { useState } from 'react'
import { FlatList, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { CardComponent } from './components/CardComponent';
import { TitleComponents } from '../../components/TitleComponents';
import { BodyComponents } from '../../components/BodyComponents';
import { styles } from '../../theme/estilos';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { SECONDARY_COLOR, TERTARY_COLOR } from '../../theme/defaultColors';
import { ModalCar } from './components/ModalCar';
//creo interfaz de mis productos
export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  stock: number;
  pathImage: string;
};
export interface CardProduct {
  id: number;
  name: string;
  price: number;
  quantity: number;
  total: number;
}

const Home = () => {
  const products: Product[] = [
    { id: 1, name: 'iPhone 15 Pro Max', description: 'Smartphone de alto rendimiento con pantalla OLED de 6.7", chip A17 Pro y cámara de 48 MP.', price: 1119, stock: 5, pathImage: 'https://http2.mlstatic.com/D_NQ_NP_912227-MLA71782903150_092023-O.webp' },
    { id: 2, name: 'ASUS ROG Zephyrus G14', description: 'AMD 3ª generación Ryzen 9, Pantalla Full HD de 14 pulgadas con tasa de actualización de 120Hz, Sistema de memoria de 16 GB, Unidad de estado sólido de 1 TB.', price: 1430.00, stock: 7, pathImage: 'https://dlcdnwebimgs.asus.com/gain/7583764C-92E3-413D-A5AD-4CB7D9713802/w1000/h732' },
    { id: 3, name: 'iPad Air (5ª generación)', description: 'RAM de 8GB, Cámara ancha de 12MP, apertura de ƒ/1.8 Zoom digital hasta 5x, Chip M1 de Apple: de 8 núcleos, gráficos de 8 núcleos, Grabación de video 4K a 24 fps,', price: 159.99, stock: 10, pathImage: 'https://mobilestore.ec/wp-content/uploads/2022/04/iPad-Air-5ta-Gen-Gray-Mobile-Store-Ecuador.jpg' },
    { id: 4, name: 'Samsung Galaxy Watch 6 ', description: 'Pantalla de Cristal de zafiro 44 mm: 1,.5" (37,3 mm), 480 x 480 px, Procesador Exynos W930 Dual-Core 1.4GHz, Memoria ram de 2GB, Bateria 44 mm: 425 mAh40 mm: 300 mAh Carga Rápida (WPC-base de carga inalámbrica) .', price: 169.99, stock: 15, pathImage: 'https://mundotek.com.ec/wp-content/uploads/2024/06/galaxy-watch-6-43mm-clasic.webp' },
    { id: 5, name: 'Sony WH-1000XM5', description: 'Alcance inalámbrico de 10 m, Modo manos libres incluido, Asistente de voz integrado: Alexa, Tamaño del altavoz: 30mm.', price: 239.99, stock: 11, pathImage: 'https://http2.mlstatic.com/D_NQ_NP_773829-MLA74287271021_012024-O.webp' },
    { id: 6, name: 'PlayStation 5 ', description: 'Capacidad: 825 GB, Resolución de 3840 px x 2160 px, Memoria RAM de 16GB, Incluye control, Cuenta con: 1 cable de alimentación.', price: 660.00, stock: 15, pathImage: 'https://http2.mlstatic.com/D_NQ_NP_782912-MLU74196247619_012024-O.webp' },
    { id: 7, name: 'Dell UltraSharp 27" 4K', description: 'Resolucion de 2560 x 1440 a 120 Hz, Tecnología IPS Black, Puertos : 1 x DisplayPort 1.4 (DRR para Microsoft Windows) (compatible con 2 x QHD 120 Hz 8 bits) 1 x DisplayPort 1.4 (salida)', price: 599.99, stock: 6, pathImage: 'https://http2.mlstatic.com/D_NQ_NP_2X_900171-MLU70716442760_072023-T.webp' },
    { id: 8, name: 'Keychron K6 Wireless ', description: 'Hot Swappable para cambiar switches sin soldar, Conectividad inalámbrica Bluetooth 5.1 para mayor flexibilidad, Diseño compacto de 65% para ahorrar espacio en el escritorio.', price: 59.99, stock: 0, pathImage: 'https://http2.mlstatic.com/D_Q_NP_713030-MLU74111567287_012024-O.webp' },
    { id: 9, name: 'Logitech G Pro X Superlight ', description: 'Es inalámbrico, Incluye batería recargable, Con luces para mejorar la experiencia de uso, Con sensor optico.', price: 152.30, stock: 12, pathImage: 'https://nomadaware.com.ec/wp-content/uploads/NomadaWare_mouse_logitech_pro_x_superlight_black-6.png' },
    { id: 10, name: 'HP LaserJet Pro MFP M227fdw', description: 'Voltaje: 120V, Impresión doble faz automática, Tecnología de impresión: láser, Tiene entrada USB, Capacidad máxima de 295 hojas..', price: 550.00, stock: 8, pathImage: 'https://co-media.hptiendaenlinea.com/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/G/3/G3Q75A-2_T1679076836.png' },
    { id: 11, name: 'Canon EOS R7 ', description: 'Zoom digital de 10x, Al tener enfoque manual esta cámara captura más detalles en las fotografías,Con modo autofoco, Lente incluido: Canon RF-S 18-150mm IS STM.', price: 1379.99, stock: 15, pathImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoEYym6OqOea0HQ1Gy0CNvWycAmmhsJVNwKQ&s' },
    { id: 12, name: 'WD My Passport 2TB', description: 'Capacidad: 2 TB, Útil para guardar programas y documentos con su capacidad de 2 TB,Tamaño de 2.5 ", Es compatible con Windows.', price: 122.00, stock: 10, pathImage: 'https://http2.mlstatic.com/D_NQ_NP_948292-MLA46040022319_052021-O.webp' },
    { id: 13, name: 'TP-Link Archer AX6000 ', description: 'Conexión inalámbrica, Ofrece una velocidad de 5952Mbps, Es banda doble, Posee 8 antenas externas.', price: 386.99, stock: 18, pathImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc0UOyW7caQmTZJDSW-rY10K6TTE07oH6xHQ&s' },
    { id: 14, name: 'Secretlab TITAN Evo 2022', description: 'Material del tapizado: Cuero sintéticoCómodos apoyabrazos, Soporte lumbar regulable, Tiene apoya cabeza, Con ruedas, Giratoria, Peso máximo soportado: 130kg.', price: 689.99, stock: 20, pathImage: 'https://images.secretlab.co/turntable/tr:n-w_450/M07-E24NN-BLACK1R_02.jpg' },
    { id: 15, name: 'Philips Hue White & Color Ambiance', description: 'Voltaje: 120V, Tiene un enchufe. a19, Con Wi-Fi, Cuenta con Bluetooth, Compatible con los asistentes virtuales de Alexa y Cortana y con la aplicación Philips Hue.', price: 155.00, stock: 25, pathImage: 'https://www.assets.signify.com/is/image/Signify/046677548568-929002226711-Hue_WA-7_5W-A19-E26-2P-US-RTP-TRN?wid=500&qlt=82' },
  ]
  const [productsState, setProductsState] = useState<Product[]>(products);

  const [carProducts, setCarProducts] = useState<CardProduct[]>([]);

  const [showModalCar, setShowModalCar] = useState<boolean>(false);

  const handleChangeStock = (id: number, quantity: number): void => {
    const updateStock = productsState.map(product => product.id === id
      ? { ...product, stock: product.stock - quantity }
      : product);
    setProductsState(updateStock);
    addProductCar(id, quantity);
  }

  const addProductCar = (id: number, quantity: number): void => {
    const product = productsState.find(product => product.id === id);
    if (!product)
      return;

    const existingProduct = carProducts.find(item => item.id === id);

    if (existingProduct) {
      // Actualizar la cantidad del producto existente
      const updatedCarProducts = carProducts.map(item =>
        item.id === id
          ? { ...item, quantity: item.quantity + quantity, total: (item.quantity + quantity) * item.price }
          : item
      );
      setCarProducts(updatedCarProducts);
    } else {
      // Agregar el nuevo producto al carrito
      const newProduct: CardProduct = {
        id: product.id,
        name: product.name,
        price: product.price,
        quantity: quantity,
        total: product.price * quantity
      }
      setCarProducts([...carProducts, newProduct]);
    }
  }
  const reset = () => {
    setCarProducts([]);
  }

  return (
    <SafeAreaView>
      <View>
        <TitleComponents title='Products' />
        <View style={styles.headerProducts}>
          <View style={{
            ...styles.containerIcon,
            paddingHorizontal: 30
          }}>
            <Text style={styles.textIconCar}>
              {carProducts.length}
            </Text>
            <Icon name='shopping-cart'
              size={30}
              color={TERTARY_COLOR}
              onPress={() => setShowModalCar(!showModalCar)} />
          </View>
        </View>
        <BodyComponents>
          <FlatList
            data={productsState}
            renderItem={({ item }) => <CardComponent product={item} handleChangeStock={handleChangeStock} />}
            keyExtractor={item => item.id.toString()}
            numColumns={2}
            columnWrapperStyle={{ justifyContent: 'space-between' }}
          />
        </BodyComponents>
      </View>
      <ModalCar isVisible={showModalCar}
        reset={reset}
        carProducts={carProducts}
        setShowModalCar={() => setShowModalCar(!showModalCar)}
      />
    </SafeAreaView>
  )
}

export default Home
