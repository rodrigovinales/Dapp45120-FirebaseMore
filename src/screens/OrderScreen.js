import React, { useEffect} from 'react'
import { StyleSheet, View } from 'react-native'
import { useDispatch, connect, useSelector } from "react-redux";
import { getOrders, removeOrder } from '../store/actions/order.action';
import OrderItem from '../components/OrderItem';

const OrderScreen = () => {
    const dispatch = useDispatch();
    const userId = useSelector(state => state.auth.userId);
    const orders = useSelector(state => state.order.orders);

    useEffect(() => {
        dispatch(getOrders(userId));
    }, []);

    const onDelete = (id) => {
        dispatch(removeOrder(id));
    }

    const onDetails = (id) => {
        console.log(id);
    }

    const renderItem = ({ item }) => (
        <OrderItem
            data={item}
            onDelete={onDelete}
            onDetails={onDetails}
        />
    )

    return (
        <View style={styles.container}>
            <FlatList
                data={orders}
                renderItem={renderItem}
                keyExtractor={item => item.id.toString()}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff"
    },
})


export default connect()(OrderScreen);
