import { StyleSheet } from "react-native";

 export const styles = StyleSheet.create({
    background: {
        flex: 1,
        resizeMode: 'cover', 
    },
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
    },
    background1: {
        flex: 1,
        resizeMode: 'cover', 

    },
    container1: {
        alignItems: 'center',
        justifyContent: 'space-evenly',
        flex: 1,
    },
    container2: {
        backgroundColor: '#fff',
        borderRadius: 10,
        justifyContent: 'center',

    },

    textoSignIn: {
        fontSize: 30,
        textAlign: 'left',
        fontWeight: 'bold',
        margin: 5
    },
    textinput1: {
        alignItems: 'center',
        margin: 8,
        borderWidth: 1,
        padding: 10,
        backgroundColor: 'white',
        width: '95%'
    },
    textinput2: {
        alignItems: 'center',
        margin: 8,
        borderWidth: 1,
        padding: 10,
        backgroundColor: 'white',
        width: '70%',
        alignSelf: 'center'
    },
    button: {
        padding: 10,
        backgroundColor: '#ddd',
        borderRadius: 5,
        alignContent: 'center',
        justifyContent: 'center',
        margin: 'auto',
        height: 'auto',
        width: 'auto'
    },
    inputText: {
        backgroundColor: '#D1F8EF',
        width: '95%',
        borderRadius: 10,
        margin: 5,
        elevation: 3,
    },
    body: {
        backgroundColor: '#9ACBD0',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 35,
        paddingTop: 40,
        paddingHorizontal: 35,
        
    },
    titlePrincipal: {
        fontSize: 17,
        fontWeight: 'bold',
        color: 'blacks',
        alignSelf: 'center'
    },
    title1: {
        color: 'black',
        fontSize: 25,
        paddingHorizontal: 35,
        fontWeight: 'bold',
        paddingVertical: 30,
        backgroundColor:'#D1F8EF',
        textAlign:'center'
    },
    containerForm: {
        marginVertical: 20,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 20,
    },
    titleDescrption: {
        fontSize: 15,
        color: 'black',
        marginTop: 7,
        alignSelf:'center'
    },
    buttomForm: {
        backgroundColor: '#578FCA',
        paddingVertical: 10,
        paddingHorizontal: 10,
        alignItems: 'center',
        borderRadius: 10,
        elevation: 2,
        width: '95%',
        margin: 5,
        cursor:'pointer'
    },
    register:{
        alignSelf: 'center',
        color: 'grey',
        fontWeight: 'condensed',
        margin:5,
    },
    sub:{
        textDecorationLine:'underline'
    }

});
