import { StyleSheet } from "react-native"

const MyAccountStyle = StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        flex: 1,
        flexDirection: 'row',
    },
    img: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    btn: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    body: {
        flex: 4
    },
    informations: {
        flex: 1
    },
    user: {
        flex: 1,
        backgroundColor: 'red'
    },
    userName: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
    },
    description: {
        flex: 1,
        paddingHorizontal: 10,
        backgroundColor: 'blue'
    },
    centreInterets: {
        flex: 1,
        paddingHorizontal: 10
    },
    event: {
        flex: 1,
        paddingHorizontal: 10
    },
    friends: {
        flex: 1,
        paddingHorizontal: 10
    },
    subTitle: {
        fontSize: 22,
        fontWeight: 'bold'
    }
});

export default MyAccountStyle;