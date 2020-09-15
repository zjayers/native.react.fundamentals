// - Imports
import React, { useReducer } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const STEP = 1;
const INCREMENT_COUNTER = "INCREMENT_COUNTER";
const DECREMENT_COUNTER = "DECREMENT_COUNTER";
const initialState = { counter: 0 };

/**
 * CounterScreen Component
 * @returns {JSX.Element} - JSX to be rendered to the screen
 */
const CounterScreen = (props) => {
    /** State */
    const [state, dispatch] = useReducer(counterReducer, initialState);

    return (
        <View style={styles.container}>
            <Text style={styles.primaryText}>Current Count: {state.counter}</Text>
            <Button title="Increase" onPress={() => incrementCounter(dispatch)} />
            <Button title="Decrease" onPress={() => decrementCounter(dispatch)} />
        </View>
    );
};

/** Increment Counter Action */
function incrementCounter(dispatch) {
    dispatch({ type: INCREMENT_COUNTER });
}

/** Decrement Counter Action */
function decrementCounter(dispatch) {
    dispatch({ type: DECREMENT_COUNTER });
}

/** Counter Reducer */
function counterReducer(state, action) {
    switch (action.type) {
        case INCREMENT_COUNTER:
            return { ...state, counter: state.counter + 1 };
        case DECREMENT_COUNTER:
            return { ...state, counter: state.counter - 1 };
        default:
            return state;
    }
}

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
