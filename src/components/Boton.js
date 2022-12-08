import React from "react";

import { TouchableOpacity, Text, StyleSheet, View } from "react-native";

const Boton = (props) => {

    const { onPress, text } = props;

    return (
        <View style={styles.container}>
        <TouchableOpacity
            style={styles.buttonContainer}
            onPress={onPress}
        >
            <Text style={styles.buttonText}>
                {text}
            </Text>
        </TouchableOpacity>
        </View>
    )
}

export default Boton;

const styles = StyleSheet.create({
    container: {
        alignItems:"center",
    },
    buttonContainer: {
        backgroundColor: "#2196F3",
        marginTop: 5,
        marginBottom: 5,
        paddingHorizontal: 20,
        paddingVertical: 10,
        width: 250,
        borderRadius: 10,
        
    },
    buttonText: {
        color: "#f9f9f9",
        textAlign:"center",
        fontSize: 18,
        fontFamily: "MontSerrat",
    }
})
