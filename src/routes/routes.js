// - Imports
import BoxModelScreen from "../screens/BoxModelScreen";
import ColorScreen from "../screens/ColorScreen";
import ComponentsScreen from "../screens/ComponentsScreen";
import CounterScreen from "../screens/CounterScreen";
import EditorScreen from "../screens/EditorScreen";
import FlexBoxScreen from "../screens/FlexBoxScreen";
import FormScreen from "../screens/FormScreen";
import ImageScreen from "../screens/ImageScreen";
import ListScreen from "../screens/ListScreen";

/**
 * Screens For The Application - All Routes Go here
 * @type {((function(): *)|(function(*): JSX.Element))[]}
 */
const screens = [
    ComponentsScreen,
    ListScreen,
    ImageScreen,
    CounterScreen,
    ColorScreen,
    EditorScreen,
    FormScreen,
    BoxModelScreen,
    FlexBoxScreen,
];

/**
 * Generates an array of screen routing options
 * @type {{}[]}
 */
const screenOptions = screens.map((screen) => {
    const ScreenName = screen.name.replace("Screen", "");
    return {
        [ScreenName]: {
            screen,
            navigationOptions: () => ({
                title: ScreenName,
            }),
        },
    };
});

/**
 * All Routes for the React Native Application
 */
export const routes = Object.assign(...screenOptions);
