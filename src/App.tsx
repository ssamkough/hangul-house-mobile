import { registerRootComponent } from 'expo';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Body from './components/Body';

/**
 * TODO:
 * Hangul house app: timed game that starts when you press start.
 * For every input that’s incorrect, a toast pops from above
 * (and the input turns red). For every input that’s right, a toast
 * pops above as well. At the end the score is how long it took * the amount of questions.
 */
const App = (): React.ReactElement => (
    <View style={styles.container}>
        <Text style={styles.header}>Hangul House</Text>
        <Body />
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex',
        marginTop: 100,
        marginBottom: 100,
        backgroundColor: '#fff',
    },
    header: {
        fontSize: 32,
        textAlign: 'center',
        marginBottom: 24,
    },
});

export default registerRootComponent(App);
