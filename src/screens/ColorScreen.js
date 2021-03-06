// - Imports
import React, { useState } from "react";
import { View, Button, Text, StyleSheet, FlatList } from "react-native";

/**
 * ColorScreen Component
 * @returns {JSX.Element} - JSX to be rendered to the screen
 */
const ColorScreen = (props) => {
    const [colors, setColors] = useState([]);

    return (
        <View style={styles.baseContainer}>
            <Button
                title={"Add a Color"}
                onPress={() => setColors([...colors, getRandomRGB()])}
            />
            <FlatList
                data={colors}
                renderItem={renderColorBox}
                keyExtractor={(i) => i}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                style={styles.flatList}
                numColumns={3}
            />
        </View>
    );
};

/**
 * Renders a new color box to the screen
 * @param rgbValue - The RBG Value to display to the screen
 * @returns {JSX.Element} - JXS to be rendered to the screen
 */
function renderColorBox({ item: rgbValue }) {
    return (
        <View
            style={{
                ...styles.colorBox,
                backgroundColor: rgbValue,
            }}
        />
    );
}

/**
 * Generate a random RGB value
 * @returns {string} - Random RGB string in format 'rgb(<red>, <green>, <blue>)'
 */
function getRandomRGB() {
    const red = getRandomColorCode();
    const blue = getRandomColorCode();
    const green = getRandomColorCode();
    return `rgb(${red}, ${green}, ${blue})`;
}

/**
 * Generate a random color value between 0 and 255
 * @returns {number} - Random color value between 0 and 255
 */
function getRandomColorCode() {
    return Math.floor(Math.random() * 256);
}

// - Styles
const styles = StyleSheet.create({
    baseContainer: {
        display: "flex",
        alignItems: "center",
    },
    colorBox: {
        height: 100,
        width: 100,
    },
    primaryText: {
        fontSize: 30,
    },
    flatList: {
        flexDirection: "column",
    },
});

// - Exports
export default ColorScreen;
