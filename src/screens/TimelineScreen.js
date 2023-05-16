import { View, Text, StyleSheet } from 'react-native';

const TimelineScreen = () => {
    return (
        <View style={styles.rootContainer}>
            <Text>Timeline Screen</Text>
        </View>
    );
};

export default TimelineScreen;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
    },
});
