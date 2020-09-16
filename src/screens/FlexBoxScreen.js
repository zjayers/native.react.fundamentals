// - Imports
import React from "react";
import { View, Text, StyleSheet } from "react-native";

/**
 * FlexBoxScreen Component
 * @returns {JSX.Element} - JSX to be rendered to the screen
 */
const FlexBoxScreen = (props) => {
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
        borderColor: "blue",
        // flexDirection: "row",
        flexDirection: "column",
        alignItems: "stretch",
        // alignItems: "flex-start",
        // alignItems: "center",
        // alignItems: "flex-end",
        ...StyleSheet.absoluteFillObject, // Shorthand for filling paren
    },
    primaryText: {
        fontSize: 30,
        borderWidth: 5,
        borderColor: "red",
        textAlign: "center",
    },
});

// - Exports
export default FlexBoxScreen;
