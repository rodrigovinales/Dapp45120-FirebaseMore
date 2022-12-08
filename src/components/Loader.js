import React from 'react'
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'

const LoaderSpinner = (props) => {
    const { visible } = props;

    if (!visible) return null;

    return (
        <View>
            <Text style={styles.textLoading}>CARGANDO LISTADO...</Text>
            <ActivityIndicator size='large' color="#EB6440" style={styles.loading} />
        </View>
    )
}

const styles = StyleSheet.create({
    textLoading: {
        marginTop: 250,
        fontSize: 60,
        justifyContent: "center",
        textAlign: "center",
        fontFamily: "MontSerrat",
        color: "#4E6C50"
    },
    loading: {
        marginBottom: 200,
    }
})

export default LoaderSpinner;