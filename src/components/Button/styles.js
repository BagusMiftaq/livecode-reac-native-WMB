import {StyleSheet} from "react-native";

export default StyleSheet.create({
    container:{
        padding: 5,
    },
    buttonOk:{
        borderRadius: 10,
        backgroundColor:"#FF5111",
        margin:5,
        padding:15,
    },
    text:{
        fontWeight:"bold",
        color:"white",
        fontSize:20,
        textAlign:"center"
    },
    buttonCancel:{
        borderRadius: 10,
        backgroundColor:"#d0d0d0",
        margin:5,
        padding:15,
    },
    buttonRound:(color)=>({
        borderRadius: 10,
        backgroundColor:color,
        paddingVertical:15,
        paddingHorizontal:20,
    }),
})