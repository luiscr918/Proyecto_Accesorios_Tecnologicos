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
    inputTextSignUp: {
        backgroundColor: '#D1F8EF',
        maxWidth:400,
        padding:15,
        borderRadius: 10,
        margin: 7,
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
        marginBottom:10
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
        elevation: 3,
        width: '95%',
        maxWidth:400,
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
    },
    backgroundImage:{
        position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    },
    containerMainSignIn:{
        flex: 1,
    position: 'relative',
    }


});
