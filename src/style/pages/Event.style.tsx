import { StyleSheet } from "react-native";

const EventStyle = StyleSheet.create({
    input: {
        flex: 0.5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    body: {
        flex: 1,
    },
    createEvent: {
        flex: 0.8,
    },
    centreInterets: {
        flex: 1,
    },
    myEvent: {
        flex: 2,
    },
    subTitle: {
        flex: 1,
        justifyContent: 'center',
    },
    listView: {
        flex: 3,
        flexDirection: 'row'
    },
    card: {
        flex: 0.3,
        marginTop: 10,
        marginHorizontal: 10
    },
    myEventStyle: {
        flex: 2,
    },
    myEventCardStyle: {
        flex: 4,
        marginHorizontal: 12,
        marginBottom: 12
    },
    subTitleEvent: {
        flex: 0.8,
    }
});

export default EventStyle;