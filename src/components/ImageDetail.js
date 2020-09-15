// - Imports
import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";

// - Main Component
const ImageDetail = ({ item: { title, imageSrc } }) => {
    return (
        <View style={styles.baseContainer}>
            <Image style={styles.imageStyle} source={imageSrc} />
            <Text>{title}</Text>
        </View>
    );
};

// - Styles
const styles = StyleSheet.create({
    baseContainer: {
        display: "flex",
        alignItems: "center",
    },
    imageStyle: {
        width: 200,
        height: 200,
    },
});

// - Exports
export default ImageDetail;
