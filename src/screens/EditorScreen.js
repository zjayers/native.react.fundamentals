// - Imports
import React, { useReducer } from "react";
import { StyleSheet, View } from "react-native";
import ColorAdjuster from "../components/ColorAdjuster";

// - Constants
const STEP = 15;
const RED = "red";
const GREEN = "green";
const BLUE = "blue";

/**
 * EditorScreen Component
 * @returns {JSX.Element} - JSX to be rendered to the screen
 */
const EditorScreen = (props) => {
    const [state, dispatch] = useReducer(rgbReducer, { [RED]: 0, [GREEN]: 0, [BLUE]: 0 });
    const handleIncrement = (colorName) => handleValueChange(dispatch, STEP, colorName);
    const handleDecrement = (colorName) => handleValueChange(dispatch, -STEP, colorName);
    const { red, green, blue } = state;

    return (
        <View style={styles.baseContainer}>
            <ColorAdjuster
                colorName={RED}
                value={red}
                onIncrease={() => handleIncrement(RED)}
                onDecrease={() => handleDecrement(RED)}
            />
            <ColorAdjuster
                colorName={GREEN}
                value={green}
                onIncrease={() => handleIncrement(GREEN)}
                onDecrease={() => handleDecrement(GREEN)}
            />
            <ColorAdjuster
                colorName={BLUE}
                value={blue}
                onIncrease={() => handleIncrement(BLUE)}
                onDecrease={() => handleDecrement(BLUE)}
            />
            <View
                style={{
                    ...styles.colorBox,
                    backgroundColor: `rgb(${red}, ${green}, ${blue})`,
                }}
            />
        </View>
    );
};

/**
 * Action Creator for changing color values
 * @param dispatch - The dispatch function for changing the state
 * @param step - The amount to step through the
 * @param colorName - The name of the color to be updated
 */
function handleValueChange(dispatch, step, colorName) {
    dispatch({
        type: colorName,
        payload: step,
    });
}

/**
 * RGB Reducer function for changing RGB state
 */
function rgbReducer(state, action) {
    const mutate = (item) => mutateValue(state, action, item);
    switch (action.type) {
        case RED:
            return mutate(RED);
        case GREEN:
            return mutate(GREEN);
        case BLUE:
            return mutate(BLUE);
        default:
            return state;
    }
}

/**
 * Utility Function for mutating the state of each individual color value
 */
function mutateValue(state, action, item) {
    return state[item] + action.payload > 255 || state[item] + action.payload < 0
        ? state
        : { ...state, [item]: state[item] + action.payload };
}

// - Styles
const styles = StyleSheet.create({
    baseContainer: {
        display: "flex",
        alignItems: "center",
    },
    primaryText: {
        fontSize: 30,
    },
    colorBox: {
        height: 300,
        width: 300,
    },
});

// - Exports
export default EditorScreen;
