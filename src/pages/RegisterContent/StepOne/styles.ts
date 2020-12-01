import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    pageContent: {
        paddingLeft: 30,
        paddingRight: 30,
    },
    backIcon: {
        marginTop: 40,
        marginLeft: 20,
        borderRadius: 50,
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontFamily: "Poppins_600SemiBold",
        fontSize: 25,
        width: 200,
        marginBottom: 5,
        marginTop: 10
    },
    subTitle: {
        fontFamily: "Poppins_400Regular",
        fontSize: 15,
        color: '#6A6180',
        marginBottom: 20
    },
    textInput: {
        height: 54,
        backgroundColor: "#fff",
        borderRadius: 8,
        justifyContent: 'center',
        paddingHorizontal: 16,
        marginTop: 5,
        marginBottom: 5
    },
    spanError: {
        color: "red",
        marginBottom: 4
    },
    submitButton: {
        backgroundColor: "#04d361",
        height: 56,
        borderRadius: 8,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginRight: 8,
        marginTop: 25,
    },
    buttonText: {
        color: '#fff',
        fontFamily: "Poppins_600SemiBold",
        fontSize: 20
    }
})

export default styles