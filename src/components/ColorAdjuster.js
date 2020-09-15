// - Imports
import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

/**
 * ColorAdjuster Component
 * @returns {JSX.Element} - JSX to be rendered to the screen
 */
const ColorAdjuster = ({
    colorName,
    value,
    onIncrease: handleIncrease,
    onDecrease: handleDecrease,
}) => {
    return (
        <View style={styles.baseContainer}>
            <Text style={styles.primaryText}>
                {colorName}: {value}
            </Text>
            <Button title={`Increase ${colorName}`} onPress={handleIncrease} />
            <Button title={`Decrease ${colorName}`} onPress={handleDecrease} />
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
export default ColorAdjuster;
