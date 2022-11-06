import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FFF"
    },
    list: {
        paddingVertical: 24,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    item: {
        paddingBottom: 10,
        paddingTop: 10,
        marginLeft: 24,
    },
    text: {
        fontSize: 18,
        flexWrap: 'wrap',
    }
});
