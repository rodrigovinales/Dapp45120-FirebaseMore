import { StyleSheet, Text, View, ScrollView, Image, Button } from 'react-native'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addItem } from '../store/actions/cart.actions'

const ProductDetailsScreen = () => {

  const dispatch = useDispatch();
  const product = useSelector((state) => state.products.selected)

  const handleAddToCart = () => dispatch(addItem(product));

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.text_name}>{product.name}</Text>
      <Image
        style={styles.image}
        source={{ uri: product.image }}>
      </Image>
      <Text style={styles.text_description}>{product.description}</Text>
      <Text style={styles.text_price}>Precio: ${product.price}</Text>
      <View style={styles.containerButtons}>
        <Button title="Agregar a Carrito" onPress={() => handleAddToCart()} color="grey" />
      </View>
    </ScrollView>
  )
}

export default ProductDetailsScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginHorizontal: 20,
  },
  text_price: {
    fontSize: 30,
    textAlign: 'center',
    marginVertical: 20,
    fontFamily: "MontSerrat"
  },
  text_name: {
    fontSize: 40,
    textAlign: 'center',
    marginVertical: 20,
    fontFamily: "MontSerrat"
  },
  text_description: {
    fontSize: 22,
    textAlign: 'center',
    // marginVertical: 20,
    paddingTop: 20,
    fontFamily: "MontSerrat"
  },
  image: {
    height: 300
  },
  containerButtons: {
    // flexDirection: 'row',
    // alignItems: "center"
    
  }
})