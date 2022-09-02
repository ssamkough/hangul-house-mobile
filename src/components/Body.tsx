import React, { useState } from 'react';
import { Alert, KeyboardAvoidingView, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import type { Phrase } from '../phrases';
import { phrases as rawPhrases } from '../phrases';

const getRandomNumber = (maxNumber: number) => Math.floor(Math.random() * maxNumber);

const Body = (): React.ReactElement => {
    const [phrases, setPhrases] = useState<Phrase[]>(rawPhrases);
    const [currentIndex, setCurrentIndex] = useState<number>(getRandomNumber(rawPhrases.length));
    const [isPressed, setIsPressed] = useState<boolean>(false);
    const [answer, setAnswer] = useState<string>('');

    const onPress = () => {
        if (!isPressed) {
            if (!answer) {
                Alert.alert('You must input an answer!');
                return;
            }
            if (answer && answer.toLowerCase() !== phrases[currentIndex].meaning.toLowerCase()) {
                Alert.alert('Wrong answer!');
                return;
            }
            if (answer && answer.toLowerCase() === phrases[currentIndex].meaning.toLowerCase()) setIsPressed(true);
        }
        if (isPressed) {
            setIsPressed(false);
            const newPhrases = phrases.filter((value, index) => currentIndex !== index);
            setPhrases(newPhrases);
            setAnswer('');
            setCurrentIndex(getRandomNumber(newPhrases.length));
        }
    };

    return (
        <View style={styles.container}>
            {!phrases.length ? (
                <Text style={styles.refresh} onPress={() => setPhrases(rawPhrases)}>
                    refresh
                </Text>
            ) : (
                    <View style={styles.card}>

                <KeyboardAvoidingView style={styles.card} behavior='position'>
                    {!isPressed && (
                        <View style={[styles.card, styles.prompt]}>
                            <Text style={[styles.letter, styles.korean, styles.spacingBottom32]}>
                                {phrases[currentIndex].korean}
                            </Text>
                            {/** TODO: use phosphor icons to play sound */}
                            {/* <Horse style={styles.spacingBottom48} /> */}
                            <TextInput
                                clearButtonMode="while-editing"
                                style={[styles.input]}
                                value={answer}
                                onChangeText={setAnswer}
                                onSubmitEditing={onPress}
                            />
                        </View>
                    )}
                    {isPressed && (
                        <View style={[styles.card, styles.answer]}>
                            <Text style={[styles.letter, styles.meaning, styles.spacingBottom32]}>
                                {phrases[currentIndex].meaning}
                            </Text>
                            <Text style={[styles.letter, styles.romanization]}>
                                {phrases[currentIndex].romanization}
                            </Text>
                        </View>
                    )}

                </KeyboardAvoidingView>
                    <View style={styles.buttonContainer}>
                        <Pressable style={styles.button} onPress={onPress}>
                            <Text style={styles.buttonText}>{!isPressed ?'Enter' : 'Continue'}</Text>
                        </Pressable>
                    </View>
                    </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    card: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonContainer: { 
        width: '100%'
    },
    refresh: {
        fontSize: 48,
    },
    prompt: {},
    answer: {},
    letter: {
        fontSize: 16,
    },
    korean: {
        fontSize: 128,
    },
    meaning: {
        fontSize: 64,
    },
    romanization: {
        fontSize: 64,
    },
    playIcon: {
        fontSize: 32,
    },
    input: {
        width: 280,
        height: 80,
        fontSize: 32,
        borderWidth: 1,
        padding: 10,
    },
    button: {
        width: '100%',
    },
    buttonText: {
        fontSize: 64,
    },
    spacingBottom24: {
        marginBottom: 24,
    },
    spacingBottom32: {
        marginBottom: 32,
    },
    spacingBottom48: {
        marginBottom: 48,
    },
});

export default Body;
