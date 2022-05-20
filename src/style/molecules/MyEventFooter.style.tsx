import { StyleSheet } from "react-native";

const MyEventFooter = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        flex: 1,
        borderRadius: 14,
        flexDirection: 'row',
    },
    footer: {
        flex: 2,
        flexDirection: 'row',
        borderRadius: 14,
    },
    textView: {
        flex: 4,
        justifyContent: 'center',
        paddingLeft: 12
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    titleBtn: {
        flex: 1,
        borderRadius: 14,
        justifyContent: 'center',
        alignItems: 'center',
    },
    footerLeft: {
        flex: 1.7,
    },
    footerRight: {
        flex: 1,
    },
    subtitle: {
        flex: 1,
        justifyContent: 'center',
        paddingLeft: 10,
    },
    centreInteretsView: {
        flex: 2,
        justifyContent: 'center',
    },
    centreInteretsBtn: {
        height: '50%',
        width: '40%',
        marginLeft: 10
    },
    invites: {
        flex: 3,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    moreBtn: {
        flex: 2,
    },
    textInvites: {
        flex: 1,
        fontSize: 16,
        fontWeight: '400',
        paddingTop: 10,
    },
    iconInvites: {
        flex: 1,
        alignItems: 'flex-end',
        justifyContent: 'center',
    },
    viewInvites: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
    },
    textSubtitle: {
        fontSize: 13,
        opacity: 0.5
    }
});

export default MyEventFooter;