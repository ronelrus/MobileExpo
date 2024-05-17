import React, { useContext } from "react";
import { Pressable, Text, View } from "react-native";
import Section from "../Components/Section";
import { ViewContext, changeViewBoard } from "../Context/ViewContext";
import { MainMenuStyle, styles } from "../Styles/Styles";

const topUsers = [
    {
        emoji: '👨🏻‍🎨',
        name: 'Vincent van Gogh',
        points: 12
    },
    {
        emoji: '👨🏻‍🔬',
        name: 'Dmitri Ivanovich Mendeleev',
        points: 10
    },
    {
        emoji: '🧛🏻‍♂️',
        name: 'Vlad Toples',
        points: 8
    },
];

type card = {
    backgroundColor: string,
    emoji: string,
    title: string,
    handler: Function,
}

function getCards(cards: Array<Object>) {
    var rows = [];
    const getCard = (item: card, i: number) => {
        return (
            <View key={i + 'Item'} style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Pressable key={i + 'Press'} style={{ width: 153, height: 117, borderRadius: 20, backgroundColor: item.backgroundColor }} onPress={() => { item.handler?.() }}>
                    <Text key={i + 'Emoji'} style={{ fontSize: 65, textAlign: 'center' }}>
                        {item.emoji}
                    </Text>
                    <Text key={i + 'Title'} style={{ textAlign: 'center', fontWeight: '400', fontSize: 13, }}>
                        {item.title}
                    </Text>
                </Pressable>
            </View>
        )
    }
    for (let i = 0; i < cards.length; i += 2) {
        const first = cards[i] as card;
        const second = cards[i + 1] as card;
        rows.push(
            (
                <View key={i} style={{ flexDirection: 'row', marginBottom: 17, justifyContent: 'space-between' }}>
                    {getCard(first, i)}
                    {getCard(second, i + 1)}
                </View>
            )
        )
    }
    return rows;
}

export function MainMenu(): React.JSX.Element {

    const style = styles();
    const pageStyle = MainMenuStyle();

    const { useViewer } = useContext(ViewContext);

    const cards = [
        {
            backgroundColor: 'rgba(91, 123, 254, 1)',
            emoji: '🐻‍❄️',
            title: 'Guess the animal',
            handler: () => { useViewer(changeViewBoard('AnimalGame', 0)); }
        },
        {
            backgroundColor: 'rgba(214, 24, 93, 1)',
            emoji: '✏️',
            title: 'Word practice',
            handler: () => { }
        },
        {
            backgroundColor: 'rgba(247, 100, 0, 1)',
            emoji: '🔊',
            title: 'Guess the animal',
            handler: () => { }
        },
        {
            backgroundColor: 'rgba(91, 168, 144, 1)',
            emoji: '🎮',
            title: 'Game',
            handler: () => { }
        },
    ];

    return (
        <Section
            title="Hello, Emil"
            description={'Are you ready for learning today?'}
            imageSrc={''}
            pressableHandler={() => { console.log('hello') }}
            backEnabled={false}
            children={(
                <View>
                    <View style={{ ...pageStyle.topUsers }}>
                        <Text style={{ ...style.sectionTitle }}>
                            Top users
                        </Text>
                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                            {
                                topUsers.map((user) => {
                                    let place = topUsers.indexOf(user);
                                    return (
                                        <View key={place + user.name + 'View'} style={{ padding: 19, height: 64, width: '100%', backgroundColor: 'rgba(229, 229, 229, 1)', marginBottom: 10, marginHorizontal: 24, borderRadius: 20, flexDirection: 'row', alignItems: 'center' }}>
                                            <Text key={place + user.name + 'Emoji'} style={{ fontSize: 20, textAlign: 'center', maxWidth: 32, maxHeight: 37, marginRight: 24 }} > {user.emoji}</Text>
                                            <View key={place + user.name + 'User'} style={{ height: 44, width: 170, justifyContent: 'center' }}>
                                                <Text key={place + user.name + 'Name'} style={{ fontSize: 17, fontWeight: '500', }}>{user.name}</Text>
                                            </View>
                                            <Text key={place + user.name + 'Points'} style={{ fontSize: 17, fontWeight: '500', textAlign: 'right', width: 73 }}>{user.points} points</Text>
                                        </View>
                                    )
                                })
                            }
                        </View>
                        <View>
                            <Text style={{ ...style.sectionTitle }}>
                                Available excersises
                            </Text>
                            <View style={{ backgroundColor: 'pink', minHeight: 420 }}>
                                {
                                    getCards(cards)
                                }
                            </View>
                        </View>
                    </View>
                </View>
            )} >
        </Section>
    );
}

export default MainMenu;