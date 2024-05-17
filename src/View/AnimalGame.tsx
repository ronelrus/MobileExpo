import { useContext, useEffect, useState } from "react";
import { Image, Pressable, Text, TextInput, View } from "react-native";
import Section from "../Components/Section";
import { ViewContext } from "../Context/ViewContext";
import { AnimalGameStyle, colors, styles } from "../Styles/Styles";

const assets = '../../assets/';

type questioType = {
    imagePath: any,
    correct: string,
}

const questions = [
    {
        imagePath: require(assets + 'animal1.png'),
        correct: 'Racoon',
    },
];

export function AnimalGame(): React.JSX.Element {

    const style = styles();
    const pageStyle = AnimalGameStyle();

    const [data, useData] = useState<questioType>(questions[0]);
    const [answer, useAnswer] = useState('');
    const [correct, useCorrect] = useState<null | boolean>(null);
      const { useStatusColor } = useContext(ViewContext);


    const buttonHandler = () => {
        if (correct != null) {
            useCorrect(null);
            useData(questions[0]);
        } else {
            useCorrect(answer.toLowerCase() == data.correct.toLowerCase());
        }
    }

    const tryAgain = () => {
        useCorrect(null);
    };

    useEffect(() => {
        useStatusColor(correct != null ? correct ? 'rgba(91, 168, 144, 1)' : 'rgba(214, 24, 93, 1)' : colors.mainColor);
    }, [correct]);

    return (
        <Section
            title="Guess the animal"
            backEnabled={true}
            backColor={correct != null ? correct ? 'rgba(91, 168, 144, 1)' : 'rgba(214, 24, 93, 1)' : null}
            children={(
                <View style={{ marginHorizontal: 24, }}>
                    {
                        correct == null ? <Image source={data.imagePath} style={{ ...pageStyle.image }} /> :
                            <View><Text style={{ textAlign: 'center', lineHeight: 200, fontSize: 160, marginTop: 65 }}> {correct ? '🎉' : '😿'} </Text></View>
                    }
                    {
                        correct == null ? (
                            <View>
                                <Text style={{ ...style.fieldTitle, marginTop: 17, marginBottom: 8 }}>
                                    Write who is on image
                                </Text>
                                <View style={style.fieldInputContainer}>
                                    <TextInput
                                        style={{ ...style.fieldInput }}
                                        value={answer}
                                        onChangeText={text => useAnswer(text)}
                                    />
                                </View>
                            </View>) : (
                            <View>
                                <Text style={{ ...style.title, fontSize: 20, fontWeight: '500', marginTop: 45, height: 45, }}>
                                    {correct ? 'Holy Molly! That is Right!' : 'Eh? Wrong answer :(\nThat is: Racoon'}
                                </Text>
                            </View>)
                    }
                    <Pressable onPress={buttonHandler} style={{ ...style.button, marginTop: 17, width: '100%', }}>
                        <Text style={style.buttonText}>
                            {correct == null ? 'Check' : 'Next'}
                        </Text>
                    </Pressable>
                    {
                        correct != null && !correct ? (
                            <Pressable onPress={tryAgain} style={{ ...style.button, marginTop: 11, width: '100%', }}>
                                <Text style={style.buttonText}>
                                    {'Try again'}
                                </Text>
                            </Pressable>) : ('')
                    }
                </View>
            )}>
        </Section>
    );
}

export default AnimalGame;