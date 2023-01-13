import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    title: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    text: {
        color: '#fff',
        fontSize: 12,
        fontWeight: 'bold',
        marginHorizontal: 2,

    },
    textOne: {
        color: '#111',
        fontSize: 10,
        fontWeight: 'bold',
        marginHorizontal: 2,
        backgroundColor: "#cecece",
        paddingHorizontal: 8,
        paddingVertical: 2,
        borderRadius: 4

    },
    coinContainer: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#f4f4f4',
        padding: 15
    }
});

export default styles;