// - Imports
import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import ImageDetail from "../components/ImageDetail";

// - Mock Data For Rendering
const images = [
    { title: "Forest", imageSrc: require("../assets/forest.jpg") },
    { title: "Beach", imageSrc: require("../assets/beach.jpg") },
    { title: "Mountain", imageSrc: require("../assets/mountain.jpg") },
];

// - Main Component
const ImageScreen = () => {
    return (
        <View style={styles.baseContainer}>
            <FlatList
                data={images}
                keyExtractor={(item) => item.title}
                renderItem={({ item }) => <ImageDetail item={item} />}
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
    },
});

// - Exports
export default ImageScreen;
