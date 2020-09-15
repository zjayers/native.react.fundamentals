// - Imports
import React from "react";
import { View, Text, Button, StyleSheet, FlatList } from "react-native";
import { routes } from "../routes/routes";

/**
 * Renders a new button to route to a specific screen
 * @param navigation - The app navigator context
 * @param screenName - The screen to navigate to
 */
const renderRoutingButton = (navigation, screenName) => {
    return (
        <Button
            title={`${screenName} Demo`}
            onPress={() => {
                navigation.setParams({ title: screenName });
                navigation.navigate(screenName);
            }}
        />
    );
};

// - Main Component
const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.baseContainer}>
            <Text style={styles.primaryText}> Welcome to React Native!</Text>
            <FlatList
                data={Object.keys(routes)}
                renderItem={({ item }) => renderRoutingButton(navigation, item)}
                keyExtractor={(route) => route}
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
export default HomeScreen;
