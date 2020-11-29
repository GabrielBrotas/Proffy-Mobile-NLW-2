import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerContent: {
        backgroundColor: '#8257E5',
        padding: 20
    },
    profileContent: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        marginTop: 10,
        height: 50,
    },
    backIcon: {
        marginLeft: 'auto',
        width: 20,
        height: 20,
        marginRight: 10
    },
    profileImg: {
        width: 40,
        height: 40,
        borderRadius: 50,
        marginRight: 10,
        marginLeft: 10
    },
    userName: {
        color: "#fff",
        fontSize: 15
    },
    banner: {
        width: '100%',
        resizeMode: 'contain'
    },
    mainContent: {
        flex: 1,
        padding: 20
    },
    title: {
        color: "#6A6180",
        fontSize: 20,
        lineHeight: 30,
        fontFamily: 'Poppins_400Regular'
    },
    titleBold: {
        fontFamily: 'Poppins_600SemiBold'
    },
    buttonsContainer: {
        flexDirection: 'row',
        marginTop: 40,
        justifyContent: 'space-between'
    },
    button: {
        height: 150,
        width: '48%',
        backgroundColor: "#333",
        borderRadius: 8,
        padding: 24,
        justifyContent: 'space-between'
    },
    buttonPrimary: {
        backgroundColor: "#9871f5",
    },
    buttonSecondary: {
        backgroundColor: "#04d361",
    },
    buttonText: {
        fontFamily: "Archivo_700Bold",
        color: "#fff",
        fontSize: 20 
    },
    totalConnections: {
        fontFamily: 'Poppins_400Regular',
        color: "#6A6180",
        fontSize: 12,
        lineHeight: 20,
        maxWidth: 400,
        marginTop: 40
    }
})

export default styles