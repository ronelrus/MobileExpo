import React, { useContext, useState } from "react";
import { Pressable, Text, View } from "react-native";
import Section from "../Components/Section";
import { ViewContext, ViewerType, changeView } from "../Context/ViewContext";
import { LoginStyle, styles } from "../Styles/Styles";

const languages = [
    'Russian',
    'English',
    'Chinese',
    'Belarus',
    'Kazakh',
];

export function ChooseLanguage(): React.JSX.Element {

    const style = styles();
    const pageStyle = LoginStyle();

    const { viewer, useViewer } = useContext(ViewContext);
    const [radio, useRadio] = useState(languages[0]);

    const nextHandler = () => {
        useViewer((prev: ViewerType) => changeView(prev, prev.view + 1));
    }

    return (
        <Section backEnabled={false} title="Language select" children={(
            <View style={[pageStyle.container, { backgroundColor: 'pinkg' }]}>
                <View style={[pageStyle.titleContainer, { marginTop: 12 }]}>
                    <Text style={pageStyle.title}>
                        What is your Mother language?
                    </Text>
                </View>
                <View style={{ height: '75%', width: '100%', alignItems: 'center' }}>
                    {
                        languages.map((language) => {
                            return <Text
                                key={language}
                                onPress={() => { useRadio(language) }}
                                style={{ width: '80%', backgroundColor: radio == language ? 'rgba(247, 100, 0, 1)' : 'rgba(255, 246, 235, 1)', height: 67, marginBottom: 12, padding: 18, borderRadius: 20, fontWeight: '500', fontSize: 22, }} >
                                {language}
                            </Text>
                        })
                    }
                </View>
                <View >
                    <Pressable onPress={nextHandler} style={[style.button, { marginTop: viewer.board == 0 ? 0 : viewer.board == 1 ? 34 : 135 }]}>
                        <Text style={style.buttonText}>
                            Choose
                        </Text>
                    </Pressable>
                </View>
            </View>
        )} description={null} imageSrc={null} pressableHandler={null}>
        </Section>
    );
}

export default ChooseLanguage;