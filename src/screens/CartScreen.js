import React from 'react'
import { FlatList, StyleSheet, Text, TouchableOpacity, View, Alert } from 'react-native'
import CartItem from '../components/CartItem'
import { CART } from '../data/cart'
import { useSelector, useDispatch, connect } from 'react-redux'
import { removeItem, emptyCart, confirmCart } from '../store/actions/cart.actions'
import Boton from '../components/Boton'


const CartScreen = ({ navigation }) => {

  const dispatch = useDispatch()
  const items = useSelector(state => state.cart.items)
  const total = useSelector(state => state.cart.total)

  const handleConfirmCart = () => {
    dispatch(confirmCart(items, total))
    // dispatch(confirmCart(items, total, user)) // USAR CUANDO SE VEA LOGIN
    Alert.alert('Compra Satisfactoria, regresamos al menu principal !!')
    navigation.navigate('Categories')
    dispatch(emptyCart(items, total))
  }

  const handleDeleteItem = (id) => {
    dispatch(removeItem(id))
  }

  const handleConfirm = () => {
    if (total === 0) {
      Alert.alert('Carrito Vacio!!, vuelva para seleccionar productos')
    }
    else {
      Alert.alert(
        "Desea confirmar la compra??",
        "SI para generar el pedido o seguir comprando",
        [
          { text: "Seguir Comprando", style: "cancel" },
          { text: "SI, finalizar", onPress: () => handleConfirmCart() }
        ]
      );
    }
  }

  const renderItem = ({ item }) => (
    <CartItem item={item} onDelete={handleDeleteItem} />
  )


  return (
    <View style={styles.container}>
      <View styles={styles.list}>
        <FlatList
          data={items}
          keyExtractor={item => item.id.toString()}
          renderItem={renderItem}
        />
      </View>
      <View style={styles.footer}>
        <View style={styles.confirm}>
          <Text>EFECTIVO / DEBITO</Text>
          <View style={styles.total}>
            <Text style={styles.text}>TOTAL</Text>
            <Text style={styles.text}>$ {total}</Text>
          </View>
        </View>
        <Boton
          onPress={() => handleConfirm()}
          text="CONFIRMAR COMPRA"
        />
      </View>
    </View>
  )
}

export default connect()(CartScreen)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    backgroundColor: '#fff',
    paddingBottom: 120
  },
  list: {
    flex: 1,
  },
  footer: {
    padding: 12,
    borderTopColor: '#ccc',
    borderTopWidth: 1
  },
  confirm: {
    backgroundColor: '#ccc',
    borderRadius: 10,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  total: {
    flexDirection: 'row',
  },
  text: {
    fontSize: 18,
    padding: 8
  }
})