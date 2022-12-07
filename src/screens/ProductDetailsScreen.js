import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addItem } from '../store/actions/cart.actions'

const ProductDetailsScreen = () => {

  const dispatch = useDispatch();
  const product = useSelector((state) => state.product.selected)
  const { name, description, price, src } = product;

  const handleAddToCart = () => dispatch(addItem(product));


  return (
    <ScrollView style={styles.container}>
      <Image style={styles.image} source={src} />
      <Text style={styles.text_name}>{name}</Text>
      <Text style={styles.text_description}>{description}</Text>
      <Text style={styles.text_price}>Precio: ${price}</Text>
      <View style={styles.containerButtons}>
        <Button title="Agregar a Carrito" onPress={() => handleAddToCart()} color={colors.buttonColor} />
        {/* <View style={styles.cartButton}>
                    <Button title="Ir a Carrito" onPress={() => navigation.navigate('Cart')} color='#212121' />
                </View> */}
      </View>
    </ScrollView>
  )
}

export default ProductDetailsScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    marginHorizontal: 20,
},
text_price: {
    fontSize: 30,
    textAlign: 'center',
    marginVertical: 20,
    fontFamily: "SmoochSans"
},
text_name: {
    fontSize: 24,
    textAlign: 'center',
    marginVertical: 20,
    fontFamily: "MontSerrat"
},
text_description: {
    fontSize: 14,
    textAlign: 'center',
    marginVertical: 20,
    fontFamily: "MontSerrat"
},
image: {
    height: 300,
    width: 300,
},
buttonOpacity: {
    backgroundColor: '#576574',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 4,
},
buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14
},
containerButtons: {
    flexDirection: 'row',
    alignItems: "center"
}
})