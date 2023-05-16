import { View, Text, StyleSheet } from 'react-native';

const GamesScreen = () => {
    return (
        <View style={styles.rootContainer}>
            <Text>Games Screen</Text>
        </View>
    );
};

export default GamesScreen;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
    },
});
