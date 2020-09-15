// - Imports
import React, { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

/**
 * CounterScreen Component
 * @returns {JSX.Element} - JSX to be rendered to the screen
 */
const CounterScreen = (props) => {
    /** State */
    const [counter, setCounter] = useState(0);
    const counterStep = 1;

    /** Increment Counter */
    const handleCounterIncrement = () => {
        setCounter(counter + counterStep);
    };

    /** Decrement Counter */
    const handleCounterDecrement = () => {
        setCounter(counter - counterStep);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.primaryText}>Current Count: {counter}</Text>
            <Button title="Increase" onPress={handleCounterIncrement} />
            <Button title="Decrease" onPress={handleCounterDecrement} />
        </View>
    );
};

// - Styles
const styles = StyleSheet.create({
    container: {
        display: "flex",
        alignItems: "center",
    },
    primaryText: {
        fontSize: 30,
    },
});

// - Exports
export default CounterScreen;
