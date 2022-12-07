import React from "react";
import { Text, View, TouchableOpacity } from "react-native";


const OrderItem = ({ data, onDelete, onDetails }) => {
    const { date, id, total } = data;

    const formatDate = (time) => {
        const date = new Date(time);
        return date.toLocaleDateString();
    }

    return (
        <View style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.date}>{formatDate(date)}</Text>
        </View>
        <View style={styles.details}>
            <Text style={styles.total}>total: $ {total}</Text>
            <View style={styles.buttonsContainer}>
                <TouchableOpacity onPress={() => onDetails(id)}>
                    <IonicIcons name="list-outline" size={20} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => onDelete(id)}>
                    <IonicIcons name="trash-outline" size={20} />
                </TouchableOpacity>
            </View>
        </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 20,
        marginVertical: 10
    },
    header: {
        flex: 1,
    },
    date: {
        fontSize: 20,
        fontFamily: "OpenSans-Bold",
        // color: colors.textColor
    },
    details: {
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    buttonsContainer: {
        flexDirection: "row",
        alignItems: 'center',
    }
})
export default OrderItem;