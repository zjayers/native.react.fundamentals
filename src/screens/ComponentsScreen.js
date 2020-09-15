// - Imports
import React from "react";
import { Text, StyleSheet, View } from "react-native";
import TextInput from "react-native-web/src/exports/TextInput";

// - Component Definition
const ComponentsScreen = () => {
    return (
        <View style={styles.baseContainer}>
            <Text style={styles.primaryText}>Component Screen</Text>
            <Text>Hello World</Text>
        </View>
    );
};

// - Styles
const styles = StyleSheet.create({
    baseContainer: {
        display: "flex",
        alignItems: "center",
    },
    primaryText: {
        fontSize: 30,
    },
});

// - Exports
export default ComponentsScreen;
