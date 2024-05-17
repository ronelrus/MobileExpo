import React, { useContext } from "react";
import { Image, Pressable, Text, View } from "react-native";
import { ViewContext, ViewerType, changeBoard, changeViewBoard } from "../Context/ViewContext";
import { FirstStartStyles, colors, isDarkMode, styles } from "../Styles/Styles";

const assets = '../../assets/';

const screens = [
    {
        imgPath: require(assets + 'onBoard1.png'),
        title: 'Confidence in your words',
        description: "With conversation-based learning,\nyou'll be talking from lesson one",
        buttonText: 'Next'
    },
    {
        imgPath: require(assets + 'onBoard2.png'),
        title: 'Take your time to learn',
        description: 'Develop a habit of learning and\nmake it a part of your daily routine',
        buttonText: 'More'

    },
    {
        imgPath: require(assets + 'onBoard3.png'),
        title: 'The lessons you need to learn',
        description: 'Using a variety of learning styles to learn\nand retain',
        buttonText: 'Choose a language'
    },
];

export function FirstStart(): React.JSX.Element {
    const style = styles();
    const pageStyle = FirstStartStyles();

    const { viewer, useViewer } = useContext(ViewContext);

    const board = screens[viewer.board];

    const nextHandler = () => {
        if (viewer.board == 2) {
            useViewer((prev : ViewerType) => changeViewBoard(prev.view + 1, 0));
            return;
        }
        useViewer((prev: ViewerType) => { return changeBoard(prev, prev.board + 1) });
    };

    const skipHandler = () => {
        useViewer(() => changeViewBoard(2, 0));
    }

    return (
        <View style={style.container}>
            <Image
                source={board.imgPath}
                style={pageStyle.image} />
            <View style={pageStyle.circleContainer}>
                <View style={[pageStyle.circle, viewer.board == 0 ? { backgroundColor: colors.orange } : { opacity: 0.25 }]}></View>
                <View style={[pageStyle.circle, viewer.board == 1 ? { backgroundColor: colors.orange } : { opacity: 0.25 }]}></View>
                <View style={[pageStyle.circle, viewer.board == 2 ? { backgroundColor: colors.orange } : { opacity: 0.25 }]}></View>
            </View>
            <Text style={pageStyle.title}>
                {board.title}
            </Text>
            <Text style={pageStyle.description}>
                {board.description}
            </Text>
            <Pressable onPress={nextHandler} style={style.button}>
                <Text style={style.buttonText}>
                    {board.buttonText}
                </Text>
            </Pressable>
            <Pressable onPress={skipHandler} style={pageStyle.skipOnboarding}>
                <Text style={pageStyle.skipAllText}>
                    <Text style={[{ opacity: 0.6 }, pageStyle.skipOnboardingText]}>
                        {isDarkMode() ? 'Already a fillolearn user? ' : 'Skip onboarding'}
                    </Text>
                    <Text style={style.highlightText}>
                        {isDarkMode() ? 'Log in' : ''}
                    </Text>
                </Text>
            </Pressable>
        </View>
    );
}

export default FirstStart;