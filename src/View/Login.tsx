import React, { useContext, useState } from "react";
import { Image, Pressable, Text, TextInput, View } from "react-native";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Section from "../Components/Section";
import { ViewContext, ViewerType, changeBoard, changeView } from "../Context/ViewContext";
import { LoginStyle, getTheme, styles } from "../Styles/Styles";

const root = '../../';

const fields = {
    'email': { Title: 'Email Address', PlaceHolder: 'Email', type: 'emailAddress' },
    'firstName': { Title: 'First Name', PlaceHolder: 'Your First Name', type: 'name' },
    'lastName': { Title: 'Last Name', PlaceHolder: 'Your Last Name', type: 'familyName' },
    'password': { Title: 'Password', PlaceHolder: '••••••••', isPassword: true, type: 'password' },
    'confirmPassword': { Title: 'Confirm Password', PlaceHolder: '••••••••', isPasswordConfirm: true, type: 'password' },
}

const screens = [
    {
        imgPath: require(root + 'assets/learn.png'),
        containerTitle: 'Login',
        title: 'For free, join now and\nstart learning',
        buttonText: 'Login',
        text: 'Not you member? ',
        highlitedText: 'Signup',
        fields: ['email', 'password'],
    },
    {
        containerTitle: 'Signup',
        title: 'Create an Account',
        buttonText: 'Continue',
        text: 'Already you member? ',
        highlitedText: 'Login',
        fields: ['firstName', 'lastName', 'email'],
    },
    {
        containerTitle: 'Signup',
        title: 'Choose a Password',
        buttonText: 'Signup',
        text: 'Already you member? ',
        highlitedText: 'Login',
        fields: ['password', 'confirmPassword'],
    },
];

export function Login(): React.JSX.Element {

    const style = styles();
    const pageStyle = LoginStyle();
    const theme = getTheme();

    const { viewer, useViewer } = useContext(ViewContext);
    const [showPassword, setShowPassword] = useState(false);
    const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);

    const board = screens[viewer.board];

    const toggleShowPassword = (value: boolean, func: Function) => {
        func(!value);
    }

    const nextHandler = () => {
        if (viewer.board == 0) {
            useViewer((prev: ViewerType) => changeView(prev, prev.view + 1));
        } else if (viewer.board == 1) {
            useViewer((prev: ViewerType) => changeBoard(prev, 2));
        } else if (viewer.board == 2) {
            useViewer((prev: ViewerType) => changeBoard(prev, 0));
        }
    }

    const firstHandler = () => {
        if (viewer.board == 0) {
            useViewer((prev: ViewerType) => changeBoard(prev, 1));
        } else {
            useViewer((prev: ViewerType) => changeBoard(prev, 0));
        }
    }

    return (
        <Section backEnabled={true} title="Login" children={(
            <View style={{ ...pageStyle.container, }}>
                <View style={[pageStyle.titleContainer, { marginTop: viewer.board > 0 ? 40 : 0 }]}>
                    {viewer.board == 0 ? (
                        <Image
                            source={board.imgPath}
                            style={pageStyle.image} />) : ('')}
                    <Text style={pageStyle.title}>
                        {board.title}
                    </Text>
                </View>
                <View style={pageStyle.fieldsContainer}>
                    {board.fields.map((item) => {
                        const field = (fields as any)[item] as { Title: string; PlaceHolder: string; isPassword: boolean | null; isPasswordConfirm: boolean | null; type: undefined; };
                        const title = field.Title;
                        const placeholder = field.PlaceHolder;
                        const type = field.type;
                        const isPassword = field.isPassword || field.isPasswordConfirm;
                        return (
                            <View style={pageStyle.fieldContainer} key={title + 'Container'}>
                                <Text style={style.fieldTitle} key={title + 'Text'}>
                                    {title}
                                </Text>
                                <View style={style.fieldInputContainer}>
                                    <TextInput
                                        key={title + 'Field'}
                                        placeholder={placeholder}
                                        placeholderTextColor={theme.color}
                                        style={{ ...style.fieldInput, width: isPassword ? '90%' : '100%' }}
                                        textContentType={type}
                                        secureTextEntry={field.isPassword ? showPassword : field.isPasswordConfirm ? showPasswordConfirm : false} />
                                    {isPassword ? (
                                        <Pressable style={{ height: 64, justifyContent: 'center' }} onPress={() => { field.isPassword ? toggleShowPassword(showPassword, setShowPassword) : toggleShowPassword(showPasswordConfirm, setShowPasswordConfirm); }}>
                                            <MaterialCommunityIcons
                                                key={title + 'Icon'}
                                                name={field.isPassword ? (showPassword ? 'eye-off' : 'eye') : (showPasswordConfirm ? 'eye-off' : 'eye')}
                                                size={24}
                                                color={"#aaa"} />
                                        </Pressable>

                                    ) : ('')}
                                </View>
                            </View>
                        );
                    })}
                </View>
                {viewer.board == 0 ?
                    (<Pressable>
                        <Text style={pageStyle.forgotButton}>
                            Forgot Password
                        </Text>
                    </Pressable>) : ('')}
                <Pressable onPress={nextHandler} style={[style.button, { marginTop: viewer.board == 0 ? 0 : viewer.board == 1 ? 34 : 135 }]}>
                    <Text style={style.buttonText}>
                        {board.buttonText}
                    </Text>
                </Pressable>
                <Pressable onPress={firstHandler} style={pageStyle.signup}>
                    <Text style={pageStyle.signupText}>
                        {board.text} <Text style={style.highlightText}>{board.highlitedText}</Text>
                    </Text>
                </Pressable>
                {viewer.board == 0 ? (
                    <Pressable style={pageStyle.google}>
                        <Text style={pageStyle.googleText}>
                            Use can use <Text style={style.highlightText}>Google</Text> for sign in
                        </Text>
                    </Pressable>) : ('')}
            </View>
        )}>
        </Section>
    );
}

export default Login;