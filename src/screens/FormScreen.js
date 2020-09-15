// - Imports
import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

/**
 * FormScreen Component
 * @returns {JSX.Element} - JSX to be rendered to the screen
 */
const FormScreen = (props) => {
    const [value, setValue] = useState("");

    return (
        <View style={styles.baseContainer}>
            <TextInput
                style={styles.inputStyle}
                autoCapitalize="none"
                autoCorrect={false}
                value={value}
                onChangeText={(text) => setValue(text)}
                placeholder="Enter some text..."
            />
            <Text style={styles.primaryText}>{value}</Text>
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
    inputStyle: {
        margin: 15,
        padding: 5,
        borderColor: "black",
        borderWidth: 1,
        width: "90%",
    },
});

// - Exports
export default FormScreen;
