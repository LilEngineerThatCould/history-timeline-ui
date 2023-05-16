import { View, Text, StyleSheet } from 'react-native';

const ExploreScreen = () => {
    return (
        <View style={styles.rootContainer}>
            <Text>Explore Screen</Text>
        </View>
    );
};

export default ExploreScreen;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
    },
});
