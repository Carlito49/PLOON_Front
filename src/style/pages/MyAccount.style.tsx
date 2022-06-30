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
        backgroundColor: 'red'
    },
    profil: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'yellow'
    },
    body: {
        flex: 4
    },
    informations: {
        flex: 6
    },
    userName: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'blue'
    },
    btns: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-end',
        paddingEnd: 15,
        backgroundColor: 'green'
    }
});

export default MyAccountStyle;