import {StyleSheet} from "react-native";

export default StyleSheet.create({
    container:{
        padding: 5,
    },
    buttonOk:(color)=>({
        borderRadius: 10,
        backgroundColor:color,
        margin:5,
        padding:15,
    }),
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
    buttonAdd:(color)=>({
        borderRadius: 50,
        backgroundColor:color,
        paddingVertical:5,
        paddingHorizontal:5,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity:1,
        shadowRadius: 5,
        elevation: 3,
    }),
})