// - Imports
import React from "react";
import { View, Text, StyleSheet } from "react-native";

/**
 * BoxModelScreen Component
 * @returns {JSX.Element} - JSX to be rendered to the screen
 */
const BoxModelScreen = (props) => {
    return (
        <View style={styles.baseContainer}>
            <Text style={styles.primaryText}>Child #1</Text>
            <Text style={styles.primaryText}>Child #2</Text>
            <Text style={styles.primaryText}>Child #3</Text>
        </View>
    );
};

// - Styles
const styles = StyleSheet.create({
    baseContainer: {
        borderWidth: 10,
        borderColor: "black",
        margin: 20,
    },
    primaryText: {
        fontSize: 30,
        borderWidth: 5,
        borderColor: "red",
        marginVertical: 20,
        marginHorizontal: 10,
        textAlign: "center",
    },
});

// - Exports
export default BoxModelScreen;
