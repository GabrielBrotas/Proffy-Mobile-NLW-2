import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#8257E5",
        flex: 1,
        justifyContent: 'center',
        padding: 20
    },
    content: {
        flex: 1,
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    welcomeMessage: {
        alignItems: 'center',
        justifyContent: 'center',
    }, 
    checkIcon: {
        width: 100,
        height: 50,
        marginBottom: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title:{ 
        color: "#fff",
        fontFamily: "Archivo_700Bold",
        fontSize: 30,
        width: 250,
        textAlign: 'center'
    },
    subTitle: {
        marginTop: 20,
        color: "#f8f8fc",
        textAlign: 'center',
        width: 250,
    },
    submitButton: {
        backgroundColor: "#04d361",
        height: 56,
        borderRadius: 8,
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 8,
        marginTop: 25,
        bottom: 0,
        width: 300
    },
    buttonText: {
        color: '#fff',
        fontFamily: "Poppins_600SemiBold",
        fontSize: 20
    }
})

export default styles