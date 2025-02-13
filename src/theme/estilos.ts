import { StyleSheet, ImageBackground } from "react-native";
import {
  BUTTON_COLOR,
  PRIMARY_COLOR,
  SECONDARY_COLOR,
  TERTARY_COLOR,
} from "./defaultColors";

export const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  background1: {
    flex: 1,
    resizeMode: "cover",
  },
  container1: {
    alignItems: "center",
    justifyContent: "space-evenly",
    flex: 1,
  },
  container2: {
    backgroundColor: SECONDARY_COLOR,
    borderRadius: 15,
    justifyContent: "center",
  },

  textoSignIn: {
    fontSize: 30,
    margin: 5,
    textAlign: "center",
  },
  textinput1: {
    alignItems: "center",
    margin: 15,
    padding: 10,
    backgroundColor: "#f1f4f5",
    width: "95%",
    alignSelf: "center",
    borderRadius: 10,
  },
  textinput2: {
    alignItems: "center",
    margin: 15,
    padding: 10,
    backgroundColor: "#f1f4f5",
    width: "95%",
    alignSelf: "center",
    borderRadius: 10,
  },
  button: {
    padding: 10,
    backgroundColor: "#ddd",
    borderRadius: 5,
    alignContent: "center",
    justifyContent: "center",
    margin: "auto",
    height: "auto",
    width: "auto",
  },
  inputTextSignUp: {
    backgroundColor: "#f1f4f5",
    maxWidth: 400,
    padding: 15,
    borderRadius: 10,
    margin: 7,
    elevation: 3,
  },
  body: {
    backgroundColor: SECONDARY_COLOR,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 35,
    paddingTop: 40,
    paddingHorizontal: 35,
    paddingBottom:70
  },
  titlePrincipal: {
    fontSize: 17,
    fontWeight: "bold",
    color: TERTARY_COLOR,
    alignSelf: "center",
  },
  title1: {
    color: TERTARY_COLOR,
    fontSize: 25,
    paddingHorizontal: 15,
    fontWeight: "bold",
    paddingVertical: 30,
    backgroundColor: PRIMARY_COLOR,
    textAlign: "left",
    justifyContent: "center",
  },
  containerForm: {
    marginBottom: 10,
  },
  titleDescrption: {
    fontSize: 15,
    color: TERTARY_COLOR,
    marginTop: 7,
    alignSelf: "center",
  },
  buttomForm: {
    backgroundColor: BUTTON_COLOR,
    paddingVertical: 10,
    paddingHorizontal: 10,
    alignItems: "center",
    borderRadius: 10,
    elevation: 3,
    width: "95%",
    maxWidth: 400,
    margin: 10,
    cursor: "pointer",
  },
  register: {
    alignSelf: "center",
    color: "grey",
    fontWeight: "condensed",
    margin: 10,
  },
  sub: {
    textDecorationLine: "underline",
  },
  iconPassword: {
    position: "absolute",
    right: 20,
    bottom: 25,
  },
  //estilos con nombre sin necesidad de renombrar
  containerCard: {
    flex: 1,
    width: 140,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 2.70,
    borderWidth: 1,
    borderColor: PRIMARY_COLOR,
    borderStyle: "solid",
    marginBottom: 5,
    elevation: 2,
    marginHorizontal:3,
  
  },
  cardImage: {
    height: 100,
    width: 75,

  },
  titleCard: {
    fontSize: 15,
    fontWeight: "bold",
    color: TERTARY_COLOR,
  },
  containerIcon: {
    flex: 1,
    alignSelf: "flex-end",
    alignItems:'flex-end',
    elevation: 4,
    margin:5
  },
  containerModal: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalProduct: {
    padding: 15,
    backgroundColor: SECONDARY_COLOR,
    borderRadius: 10,
    shadowColor: '"#000',
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  headerModal: {
    flexDirection: "row",
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    borderStyle: "solid",
    padding: 5,
  },
  titleHeaderModel: {
    fontSize: 17,
    fontWeight: "bold",
    color: TERTARY_COLOR,
  },
  imageModal: {
    width: 150,
    height: 200,
  },
  containerQuantity: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonQuantity: {
    backgroundColor: BUTTON_COLOR,
    height: 60,
    width: 60,
    borderRadius: 100,
    margin: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonQuantityText: {
    color: '#C7AFF7',
    fontSize: 20,
    fontWeight: "bold",
  },
  textQuantity: {
    fontSize: 18,
    color: TERTARY_COLOR,
    fontWeight: "bold",
    margin: 10,
  },
  buttonAddCar: {
    backgroundColor: BUTTON_COLOR,
    marginTop: 15,
    alignItems: "center",
    paddingVertical: 10,
    borderRadius: 5,
  },
  buttonAddCarText: {
    color: '#C7AFF7',
    fontWeight: "bold",
  },
  headerProducts: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textIconCar: {
    backgroundColor: SECONDARY_COLOR,
    paddingHorizontal: 5,
    borderRadius: 10,
    fontSize: 13,
    fontWeight: 'bold',
  },
  titleHeaderModal: {
    fontSize: 17,
    fontWeight: 'bold',
    color: TERTARY_COLOR
  },
  headerTableCar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textHeaderTable: {
    fontWeight: 'bold',
    color: TERTARY_COLOR
  },
  containerTotal: {
    alignItems: 'flex-end',
    marginVertical: 15
  },
  textTotal: {
    fontWeight: 'bold',
    paddingHorizontal: 10,
    fontSize: 18
  },
  buttonAddCart: {
    backgroundColor: PRIMARY_COLOR,
    marginTop: 15,
    alignItems: 'center',
    paddingVertical: 10,
    borderRadius: 5
  },
  buttonAddCartText: {
    color: SECONDARY_COLOR,
    fontWeight: 'bold'
  },
  imageCard: {
    width: 70,
    height: 70,
  },
  textStock: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#801f1f',
    textAlign: 'center'
  },

});
