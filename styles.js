//...
import { StyleSheet } from "react-native";

export default StyleSheet.create({
    //Element boxes
    containerScroll: {
        width: '100%',
        height: '100%',
        borderWidth: 15,
        borderColor: '#84A59D',
        borderStyle:  "solid",
        borderRadius: 20
    },
    container: {
        height: '50%',
        width: '100%',
        alignItems: "baseline",
        padding: 30
    },
    //light & dark mode

    //Boxes
    containerLight: {
        backgroundColor: "#F7EDE2",
        color: "#f27a72"
    },
    containerDark: {
        backgroundColor: "#3F4F4A",
        color: "#fff"
    },
    //Heading "Alcometer"
    headLight: {
        alignSelf: "center",
        color: "#E29578",
        fontSize: 36,
        fontWeight: "bold",
        marginBottom: 20
    },
    headDark: {
        alignSelf: "center",
        color: "#FDE2B7",
        fontSize: 36,
        fontWeight: "bold",
        marginBottom: 20
    },
    textLight: {
        paddingTop: 10,
        color: "#73615C",
        fontWeight: "bold",
    },
    textDark: {
        paddingTop: 10,
        color: "#fff",
        fontWeight: "bold",
    },
    labelDark: {
        color: "#fff",
        fontWeight: "bold",
    },
    labelLight: {
        color: "#73615C",
        fontWeight: "bold",
    },
    //Input box
    textInput: {
        backgroundColor: "#C7C6C3",
        borderRadius: 5,
        width: "100%",
        paddingLeft: 5,
        alignSelf: "center",
    },
    padding: {
        paddingTop: 15,
    },
    //Calculate-btn and its text
    buttonContainer: {
        width: '100%',
        margin: 15,
        marginTop: 70,
        padding: 25,
        alignSelf: "center",
        backgroundColor: '#FCF5EE',
        borderWidth: 3,
        borderColor: '#84A59D',
        borderRadius: 15,
        textAlignVertical: "bottom"
    },
    button: {
        marginBottom: 0,
        backgroundColor: "#006D77",
        padding: 30,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#84A59D'
    },
    buttonText: {
        alignSelf: "center",
        color: "#fff",
        fontSize: 40,
        fontWeight: "bold",
        letterSpacing: 1
    }
});