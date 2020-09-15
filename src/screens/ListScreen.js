// - Imports
import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

// Mock Data for rendering in the flat-list
const friends = [
    { name: "Friend #1" },
    { name: "Friend #2" },
    { name: "Friend #3" },
    { name: "Friend #4" },
    { name: "Friend #5" },
    { name: "Friend #6" },
    { name: "Friend #7" },
    { name: "Friend #8" },
    { name: "Friend #9" },
    { name: "Friend #10" },
];

// Function to render a single item in the flat-list
const renderListItem = ({ item, index }) => {
    return (
        <Text style={styles.primaryText}>
            {index}: {item.name}
        </Text>
    );
};

// Main List Screen Component
const ListScreen = () => {
    return (
        <View style={styles.baseContainer}>
            <FlatList
                data={friends}
                renderItem={renderListItem} // Set the function to use as the render criteria
                keyExtractor={(friend) => friend.name} // Add Keys to each rendered item
                // horizontal                           // Set list scroll to horizontal
                showsHorizontalScrollIndicator={false} // Hide Horizontal Scroll Bar
                showsVerticalScrollIndicator={false} // Hide Vertical Scroll Bar
            />
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
        marginVertical: 50,
    },
});

// - Exports
export default ListScreen;
