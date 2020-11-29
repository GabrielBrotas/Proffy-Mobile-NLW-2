import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    logoContent: {
        height: 300,
        width: "100%",
        backgroundColor: "#8257e5",
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        width: 200,
        height: 60,
        resizeMode: "contain"
    },
    logoText: {
        paddingTop: 10,
        color: "#ffffff",
        fontFamily: "Poppins_400Regular"
    },
    mainContent: {
        flex: 1,
        marginTop: 20,
        marginLeft: 20,
        marginRight: 20,
    },
    title: {
        fontFamily: "Poppins_600SemiBold",
        fontSize: 25,
        marginBottom: 20
    },
    textInput: {
        height: 54,
        backgroundColor: "#fff",
        borderRadius: 8,
        justifyContent: 'center',
        paddingHorizontal: 16,
        marginTop: 4,
        marginBottom: 16
    },
    loginOptions: {
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'center',
    },
    checkBox: {
        margin: 0,
        padding: 0,
        backgroundColor: "#F0F0F7",
    },
    checkBoxText: {
        color: '#6A6180',
        fontFamily: "Archivo_400Regular"
    },
    span: {
        color: '#6A6180'
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